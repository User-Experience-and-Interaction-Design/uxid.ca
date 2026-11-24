/* =====================================================================
   The deadlines page's logic, apart from drawing: the milestones of one
   submission, and the "Needs action" lists (what is due soon, and which
   passed deadlines still have students on them).

   Lanes are the chart's rows: {track, kind, dl, abs, notif, notifLabel,
   cr, crLabel, steps: [{d, type, label}]}, with Date objects at local
   midnight. Plain functions, no DOM. Exposed as window.UXIDDeadlines in
   the browser and as module.exports for the node tests.
   ===================================================================== */
(function (root) {
    "use strict";

    // Same-day milestones in the order they are handed in.
    var NODE_ORDER = { internal: 0, loi: 1, abs: 2, dl: 3, notif: 4, revision: 5, cr: 6 };

    // Every milestone of one submission, in date order: internal deadlines,
    // notice of intent, abstract, the deadline itself, notifications, a
    // second-round revision, camera-ready.
    function nodesOf(L) {
        var out = [];
        if (L.abs) { out.push({ d: L.abs, type: "abs", label: "Abstract" }); }
        out.push({ d: L.dl, type: "dl",
                   label: L.dlLabel || (L.kind === "grant" ? "Application deadline" : "Submission deadline") });
        if (L.notif) { out.push({ d: L.notif, type: "notif", label: L.notifLabel || "Notification" }); }
        if (L.cr) { out.push({ d: L.cr, type: "cr", label: L.crLabel || "Camera-ready" }); }
        (L.steps || []).forEach(function (st) { out.push(st); });
        return out.sort(function (a, b) { return a.d - b.d || NODE_ORDER[a.type] - NODE_ORDER[b.type]; });
    }

    // The row is closed once its last thing to hand in has passed.
    function lastDue(L) {
        return nodesOf(L).filter(function (n) { return n.type !== "notif" && n.type !== "cr"; })
            .reduce(function (m, n) { return n.d > m ? n.d : m; }, L.dl);
    }

    // Calendar days, so a DST change never moves a date off midnight.
    function addDays(date, n) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate() + n);
    }

    function dayDiff(a, b) {
        return Math.round((Date.UTC(a.getFullYear(), a.getMonth(), a.getDate()) -
                           Date.UTC(b.getFullYear(), b.getMonth(), b.getDate())) / 86400000);
    }

    function relDays(date, today) {
        var n = dayDiff(date, today);
        if (n === 0) { return "today"; }
        if (n === 1) { return "tomorrow"; }
        if (n === -1) { return "yesterday"; }
        return n > 0 ? "in " + n + " days" : -n + " days ago";
    }

    // Results-type dates: notifications, camera-ready and registration
    // (registration steps are typed "cr"). They only matter for rows someone
    // here is on; dates to hand something in always do.
    var RESULTS = { notif: 1, cr: 1 };

    // Every milestone from today through the window's last day (a deadline
    // due today is still open), with the group and lane it belongs to.
    // ours(lane), when given, says whether anyone here is on that row; rows
    // nobody is on keep their hand-in dates but not their results.
    function upcoming(groups, today, days, ours) {
        var end = addDays(today, days), out = [];
        groups.forEach(function (g) {
            g.lanes.forEach(function (L) {
                if (!L.dl) { return; }
                var skipResults = ours ? !ours(L) : false;
                nodesOf(L).forEach(function (n) {
                    if (skipResults && RESULTS[n.type]) { return; }
                    if (n.d >= today && n.d <= end) {
                        out.push({ d: n.d, type: n.type, label: n.label, group: g, lane: L });
                    }
                });
            });
        });
        return out.sort(function (a, b) { return a.d - b.d || NODE_ORDER[a.type] - NODE_ORDER[b.type]; });
    }

    // Steps marked `open` are to-dos nobody has reported done yet (say, an
    // ethics application not yet submitted). Once their date has passed
    // they stay on the panel as overdue, oldest first, instead of dropping
    // off like other past dates.
    function overdue(groups, today) {
        var out = [];
        groups.forEach(function (g) {
            g.lanes.forEach(function (L) {
                (L.steps || []).forEach(function (st) {
                    if (st.open && st.d < today) {
                        out.push({ d: st.d, type: st.type, label: st.label, group: g, lane: L });
                    }
                });
            });
        });
        return out.sort(function (a, b) { return a.d - b.d; });
    }

    function isoDate(iso) { return iso ? new Date(iso + "T00:00:00") : null; }

    // Assignments whose deadline has passed (before today) and that nobody
    // has closed out yet: one entry per deadline, earliest first.
    function closeOut(items, today) {
        var byKey = {}, out = [];
        items.forEach(function (it) {
            var dl = isoDate(it.dl);
            if (it.state || !dl || !(dl < today)) { return; }
            var e = byKey[it.key];
            if (!e) {
                e = byKey[it.key] = { key: it.key, venue: it.venue, track: it.track, dl: dl, items: [] };
                out.push(e);
            }
            e.items.push(it);
        });
        return out.sort(function (a, b) {
            return a.dl - b.dl || (a.venue < b.venue ? -1 : a.venue > b.venue ? 1 : 0);
        });
    }

    var D = {
        NODE_ORDER: NODE_ORDER, nodesOf: nodesOf, lastDue: lastDue, addDays: addDays, relDays: relDays,
        upcoming: upcoming, overdue: overdue, closeOut: closeOut
    };
    if (typeof module === "object" && module.exports) { module.exports = D; } else { root.UXIDDeadlines = D; }
})(typeof window !== "undefined" ? window : globalThis);
