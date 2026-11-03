/* =====================================================================
   Deadline assignments: which student works on which deadline, with what
   project. Shared by the venue guide (where Ali assigns) and the
   deadlines chart (where the assignments show as name tags).

   The published list is assignments.json beside this file. Edits go into
   a draft in this browser's localStorage first, so they show on both
   pages straight away; "Download file" in the venue guide saves the draft,
   and publishing it (a normal commit + push) makes it the published list.
   The repo is public, so the file holds first names only.

   Plain functions, no DOM. Exposed as window.UXIDAssign in the browser and
   as module.exports for the node tests.
   ===================================================================== */
(function (root) {
    "use strict";

    var DRAFT_KEY = "uxid-assignments-draft";
    // Pastels on the dark surface; tag text is #1F2937 on all of them.
    var PALETTE = ["#7DD3FC", "#FDA4AF", "#86EFAC", "#FCD34D", "#C4B5FD", "#FDBA74", "#5EEAD4", "#F9A8D4"];
    var INITIAL = ["Zawad", "Farnaz", "Aron", "Kevin", "Sadnima", "Sevara", "Jugal"];

    function clone(x) { return JSON.parse(JSON.stringify(x)); }
    function lc(s) { return String(s || "").trim().toLowerCase(); }

    function rowKey(row) { return row.n + "|" + row.tr + "|" + (row.dl || ""); }

    // "IEEE VR 2027" and "IEEE VR" -> "vr"; "IMWUT — journal, ..." and
    // "UBICOMP/IMWUT" -> "imwut". Used to find a venue-guide venue on the chart.
    function normaliseVenue(name) {
        var s = lc(String(name || "").split(" — ")[0]);
        if (s.indexOf("imwut") >= 0) { return "imwut"; }
        return s.replace(/^ieee\s+/, "").replace(/\b(19|20)\d{2}\b/g, "").replace(/\s+/g, " ").trim();
    }

    // Does a venue-guide track name ("Poster Submission") describe the same
    // kind of track as a chart row ("Posters")? If both names say what kind
    // of track they are and the kinds differ (demo vs poster), they do not;
    // if either says nothing ("Round 3 Submission"), the date decides.
    var KINDS = {
        full: "full", paper: "paper", short: "short", poster: "poster", demo: "demo",
        workshop: "workshop", doctoral: "doctoral", consortium: "doctoral", colloquium: "doctoral",
        star: "star", tutorial: "tutorial", panel: "panel", competition: "competition",
        contest: "competition", journal: "journal", industry: "industry", pictorial: "paper",
        late: "late", lbw: "late", interactivity: "interactivity", revision: "revision"
    };
    function kindsOf(name) {
        var out = {};
        String(name || "").toLowerCase().split(/[^a-z]+/).forEach(function (w) {
            var k = KINDS[w] || KINDS[w.replace(/s$/, "")];
            if (k) { out[k] = 1; }
        });
        // "Short paper" is not a paper row; a "full paper" is one.
        if (out.short) { delete out.paper; }
        if (out.full) { out.paper = 1; }
        return out;
    }
    // Kinds that are often the same track under another name: CHI's posters
    // are its Late-Breaking Work. A real match still wins over these.
    var RELATED = { late: "poster", poster: "late" };

    // 2 = same kind of track, 1 = one name does not say (the date decides)
    // or the kinds are related, 0 = different kinds.
    function trackScore(guideTrack, chartTrack) {
        var a = kindsOf(guideTrack), b = kindsOf(chartTrack);
        var ka = Object.keys(a), kb = Object.keys(b);
        if (!ka.length || !kb.length) { return 1; }
        if (ka.some(function (k) { return b[k]; })) { return 2; }
        return ka.some(function (k) { return b[RELATED[k]]; }) ? 1 : 0;
    }
    function trackMatches(guideTrack, chartTrack) { return trackScore(guideTrack, chartTrack) > 0; }

    // The highest-scoring entry of list, or null when none scores above 0.
    function best(list, score) {
        var top = null, s = 0;
        list.forEach(function (x) { var v = score(x); if (v > s) { top = x; s = v; } });
        return top;
    }

    function isoDate(iso) { return iso ? new Date(iso + "T00:00:00") : null; }

    // The chart row for an assignment: same venue (normalised), same deadline
    // date, the best-matching track. Rows place() added match on the key.
    function findLane(groups, item) {
        var dl = isoDate(item.dl), name = normaliseVenue(item.venue);
        var g = groups.filter(function (x) { return normaliseVenue(x.venue) === name; })[0] || null;
        var lane = g && dl ? best(g.lanes, function (L) {
            if (!L.dl || L.dl.getTime() !== dl.getTime()) { return 0; }
            return L._auto ? (L._key === item.key ? 2 : 0) : trackScore(item.track, L.track);
        }) : null;
        return { group: g, lane: lane };
    }

    // The other way round: the venue-guide row behind a chart row, so the
    // chart can assign to it. Null when the venue guide does not have it
    // (grants, for one).
    function rowFor(rows, venue, lane) {
        if (lane._key) { return rows.filter(function (r) { return rowKey(r) === lane._key; })[0] || null; }
        var name = normaliseVenue(venue);
        return best(rows, function (r) {
            if (!r.dl || !lane.dl || normaliseVenue(r.n) !== name || isoDate(r.dl).getTime() !== lane.dl.getTime()) { return 0; }
            return trackScore(r.tr, lane.track);
        });
    }

    // Puts each assignment on the chart. groups = [{venue, lanes: [{track, dl}]}]
    // is changed in place: a tag on the matching row (lane._as), else a row
    // added under its venue, else a new venue at the end, with the venue-guide
    // row's dates. Names stay plain text; the page escapes them when drawing.
    // Returns the items with no date or a date outside [t0, t1). Safe to run
    // again after a change: it first undoes what the last run added.
    function place(groups, data, rows, t0, t1) {
        var byKey = {}, tableOnly = [];
        for (var i = groups.length - 1; i >= 0; i--) {
            if (groups[i]._auto) { groups.splice(i, 1); continue; }
            groups[i].lanes = groups[i].lanes.filter(function (L) { return !L._auto; });
            groups[i].lanes.forEach(function (L) { delete L._as; });
        }
        (rows || []).forEach(function (r) { byKey[rowKey(r)] = r; });
        data.items.forEach(function (it) {
            var dl = isoDate(it.dl);
            if (!dl || dl < t0 || dl >= t1) { tableOnly.push(it); return; }
            var f = findLane(groups, it), g = f.group, lane = f.lane;
            if (!lane) {
                var r = byKey[it.key] || {};
                if (!g) {
                    g = { venue: it.venue, url: r.web || "venues.html", lanes: [], _auto: true,
                          meta: [r.loc, r.cd].filter(Boolean).join(" · ") || "added from the venue guide" };
                    groups.push(g);
                }
                lane = { track: it.track, sub: "from the venue guide", dl: dl,
                         kind: r.cat === "Full Papers" || r.cat === "Journals" ? "paper" : "short",
                         abs: isoDate(r.ab), notif: isoDate(r.nt), cr: isoDate(r.cr), _auto: true, _key: it.key };
                g.lanes.push(lane);
            }
            (lane._as = lane._as || []).push(it);
        });
        return tableOnly;
    }

    function empty() { return { updated: "", students: [], items: [] }; }

    function withDefaults(data) {
        var d = data && typeof data === "object" ? data : {};
        var out = {
            updated: typeof d.updated === "string" ? d.updated : "",
            students: Array.isArray(d.students) ? d.students.filter(function (s) { return s && s.name; }) : [],
            items: Array.isArray(d.items) ? d.items.filter(function (i) { return i && i.key && i.student; }) : []
        };
        if (!out.students.length) {
            out.students = INITIAL.map(function (n, i) { return { name: n, color: i }; });
        }
        return out;
    }

    function findStudent(data, name) {
        var n = lc(name);
        for (var i = 0; i < data.students.length; i++) {
            if (lc(data.students[i].name) === n) { return data.students[i]; }
        }
        return null;
    }

    // A student's colour is a palette index (the first students) or, for
    // everyone added later, a "#rrggbb" string. Anything else falls back to
    // the first palette colour, so a hand-edited file cannot inject CSS.
    function hexOf(color) {
        if (typeof color === "string") { return /^#[0-9a-f]{6}$/i.test(color) ? color : PALETTE[0]; }
        return PALETTE[(color || 0) % PALETTE.length];
    }

    function hex2(n) { return ("0" + Math.round(n * 255).toString(16)).slice(-2); }
    function hsl(h, s, l) {
        var c = (1 - Math.abs(2 * l - 1)) * s, x = c * (1 - Math.abs((h / 60) % 2 - 1)), m = l - c / 2;
        var rgb = h < 60 ? [c, x, 0] : h < 120 ? [x, c, 0] : h < 180 ? [0, c, x] :
                  h < 240 ? [0, x, c] : h < 300 ? [x, 0, c] : [c, 0, x];
        return "#" + rgb.map(function (v) { return hex2(v + m); }).join("");
    }
    function rgbDist(a, b) {
        var d = 0;
        for (var i = 1; i < 7; i += 2) { var v = parseInt(a.substr(i, 2), 16) - parseInt(b.substr(i, 2), 16); d += v * v; }
        return Math.sqrt(d);
    }

    // A random light colour (lightness 77-85%, so the dark tag text keeps
    // 4.5:1 or better): the best of 48 random tries, kept furthest from the
    // colours already in use.
    function newColor(data, rand) {
        var used = data.students.map(function (s) { return hexOf(s.color); });
        var best = null, bestD = -1;
        for (var i = 0; i < 48; i++) {
            var c = hsl(Math.floor(rand() * 360), 0.65 + rand() * 0.2, 0.77 + rand() * 0.08);
            var d = used.reduce(function (m, u) { return Math.min(m, rgbDist(c, u)); }, Infinity);
            if (d > bestD) { best = c; bestD = d; }
        }
        return best;
    }

    // Returns a new object with the name on the student list (once, any
    // case), with its own random colour. rand defaults to Math.random.
    function addStudent(data, name, rand) {
        var n = String(name || "").trim();
        if (!n || findStudent(data, n)) { return data; }
        var out = clone(data);
        out.students.push({ name: n, color: newColor(out, rand || Math.random) });
        return out;
    }

    // Returns a new object. Same student on the same deadline replaces the
    // project; a new name joins the student list with a random colour.
    function add(data, target, student, project) {
        var s = String(student || "").trim(), p = String(project || "").trim();
        if (!s || !p || !target || !target.key) { return data; }
        var out = addStudent(clone(data), s);
        var st = findStudent(out, s);
        for (var i = 0; i < out.items.length; i++) {
            var it = out.items[i];
            if (it.key === target.key && lc(it.student) === lc(st.name)) {
                it.project = p;
                return out;
            }
        }
        out.items.push({ key: target.key, venue: target.venue, track: target.track,
                         dl: target.dl || "", student: st.name, project: p });
        return out;
    }

    function remove(data, key, student) {
        var out = clone(data);
        out.items = out.items.filter(function (it) { return !(it.key === key && lc(it.student) === lc(student)); });
        return out;
    }

    function itemsFor(data, key) { return data.items.filter(function (it) { return it.key === key; }); }

    function colorOf(data, student) {
        var st = findStudent(data, student);
        return hexOf(st ? st.color : 0);
    }

    function projects(data) {
        var seen = {}, out = [];
        for (var i = data.items.length - 1; i >= 0; i--) {
            var p = data.items[i].project;
            if (p && !seen[lc(p)]) { seen[lc(p)] = 1; out.push(p); }
        }
        return out;
    }

    // Items added + removed + project changes. Students on their own do not count.
    function changeCount(published, draft) {
        function index(d) {
            var m = {};
            d.items.forEach(function (it) { m[it.key + "\u0000" + lc(it.student)] = it.project; });
            return m;
        }
        var a = index(published), b = index(draft), n = 0, k;
        for (k in b) { if (!(k in a) || a[k] !== b[k]) { n++; } }
        for (k in a) { if (!(k in b)) { n++; } }
        return n;
    }

    function same(published, draft) { return changeCount(published, draft) === 0; }

    // localStorage is read when used (not at load), so a blocked browser or
    // a test stub is honoured.
    function store() { return root.localStorage; }

    function storageOK() {
        try {
            store().setItem("uxid-assignments-probe", "1");
            store().removeItem("uxid-assignments-probe");
            return true;
        } catch (e) { return false; }
    }

    function loadDraft() {
        try {
            var raw = store().getItem(DRAFT_KEY);
            if (!raw) { return null; }
            var d = JSON.parse(raw);
            return d && Array.isArray(d.items) ? withDefaults(d) : null;
        } catch (e) { return null; }
    }

    function saveDraft(data) {
        try { store().setItem(DRAFT_KEY, JSON.stringify(data)); return true; } catch (e) { return false; }
    }

    function clearDraft() {
        try { store().removeItem(DRAFT_KEY); } catch (e) { /* storage blocked: nothing to clear */ }
    }

    // Missing, unreachable or broken file -> the defaults, never an error.
    function fetchPublished() {
        return Promise.resolve()
            .then(function () { return root.fetch("assignments.json", { cache: "no-cache" }); })
            .then(function (r) {
                if (!r.ok) { throw new Error("HTTP " + r.status); }
                return r.json();
            })
            .then(withDefaults)
            .catch(function () { return withDefaults(empty()); });
    }

    // Applies one change to the draft as saved now, not to a copy read when
    // the page loaded, so an older tab cannot wipe another tab's changes.
    function update(published, op) {
        var next = op(loadDraft() || published);
        saveDraft(next);
        return next;
    }

    // The draft wins while it differs from the published list; once they
    // match (after a publish) the draft has done its job and is removed.
    // Students added to the published file after the draft was started (say
    // new alumni) join the draft's list too.
    function current(published) {
        var d = loadDraft();
        if (d && !same(published, d)) {
            published.students.forEach(function (s) { if (!findStudent(d, s.name)) { d.students.push(s); } });
            return { data: d, isDraft: true };
        }
        if (d) { clearDraft(); }
        return { data: published, isDraft: false };
    }

    function toFile(data, today) {
        return JSON.stringify({ updated: today, students: data.students, items: data.items }, null, 2) + "\n";
    }

    function esc(s) {
        return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
            return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
        });
    }

    // The label sits in its own span so it can shorten with "…" and leave the
    // ✕ visible; nameOnly drops the project (the tooltip keeps it).
    function tagHTML(data, item, opts) {
        var title = esc(item.student + " · " + item.project);
        return '<span class="as-tag" style="background:' + colorOf(data, item.student) + '" title="' + title + '">' +
            '<span class="as-l">' + (opts && opts.nameOnly ? esc(item.student) : title) + "</span>" +
            (opts && opts.removable
                ? '<button type="button" class="as-x" data-key="' + esc(item.key) + '" data-student="' +
                  esc(item.student) + '" aria-label="Remove ' + esc(item.student) + ' from this deadline">✕</button>'
                : "") +
            "</span>";
    }

    // Every student as a button in their colour, for the Assign box.
    function pickerHTML(data) {
        return data.students.map(function (s) {
            return '<button type="button" class="as-pick" data-name="' + esc(s.name) + '" aria-pressed="false" style="background:' +
                hexOf(s.color) + '">' + esc(s.name) + "</button>";
        }).join("");
    }

    var A = {
        DRAFT_KEY: DRAFT_KEY, PALETTE: PALETTE, rowKey: rowKey, normaliseVenue: normaliseVenue,
        trackMatches: trackMatches, isoDate: isoDate, findLane: findLane, rowFor: rowFor, place: place,
        update: update, empty: empty,
        withDefaults: withDefaults, addStudent: addStudent, add: add, remove: remove, itemsFor: itemsFor, colorOf: colorOf,
        pickerHTML: pickerHTML,
        projects: projects, changeCount: changeCount, same: same, storageOK: storageOK,
        loadDraft: loadDraft, saveDraft: saveDraft, clearDraft: clearDraft,
        fetchPublished: fetchPublished, current: current, toFile: toFile, esc: esc, tagHTML: tagHTML
    };
    if (typeof module === "object" && module.exports) { module.exports = A; } else { root.UXIDAssign = A; }
})(typeof window !== "undefined" ? window : globalThis);
