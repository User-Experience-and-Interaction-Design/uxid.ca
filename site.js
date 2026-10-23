/* ============================================================================
   UXID Lab - shared behaviour (every page)
   Split out of main.js on 2026-10-21. main.js shipped 57KB to tools.html,
   deadlines.html and venues.html, which used only the handful of blocks here;
   the rest (publication filters, abstracts, the content strips) is index-only
   and now lives in home.js.
   Loaded with defer, so it runs after parsing and never blocks render.
   Every block still guards on the elements it needs, so loading this on a page
   that lacks them is a no-op.
   ========================================================================= */

/* ---------- block 1 of 10 ---------- */
    function toggleMobileMenu() {
        const mobileMenu = document.getElementById("mobileMenu");
        const toggle = document.getElementById("menuToggle");
        const open = mobileMenu.classList.toggle("active");
        if (toggle) { toggle.setAttribute("aria-expanded", open ? "true" : "false"); }
        // Lock the page behind the overlay so content does not show through
        document.body.classList.toggle("menu-open", open);
    }

    function closeMobileMenu() {
        const mobileMenu = document.getElementById("mobileMenu");
        const toggle = document.getElementById("menuToggle");
        if (!mobileMenu || !mobileMenu.classList.contains("active")) { return; }
        mobileMenu.classList.remove("active");
        document.body.classList.remove("menu-open");
        if (toggle) { toggle.setAttribute("aria-expanded", "false"); toggle.focus(); }
    }

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") { closeMobileMenu(); }
    });

    document.addEventListener("DOMContentLoaded", function () {
        const mobileMenu = document.getElementById("mobileMenu");
        if (!mobileMenu) { return; }
        // Tapping a link should dismiss the overlay, not leave it covering the target.
        mobileMenu.querySelectorAll("a").forEach(function (a) {
            a.addEventListener("click", closeMobileMenu);
        });
    });

/* ---------- block 6 of 10 ---------- */
// Back to Top Button
(function() {
    var btn = document.getElementById('backToTop');
    if (!btn) { return; }
    var ticking = false;
    window.addEventListener('scroll', function() {
        if (ticking) { return; }
        ticking = true;
        window.requestAnimationFrame(function() {
            btn.style.display = window.scrollY > 400 ? 'block' : 'none';
            ticking = false;
        });
    }, { passive: true });
    btn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
})();

/* ---------- block 8: scroll reveal ---------- */
    document.addEventListener('DOMContentLoaded', function() {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        if (!('IntersectionObserver' in window)) return;
        var targets = document.querySelectorAll(
            '.section-title, .stat-tile, .award-card, .event-card, .publication-item, .team-card, .research-card, .pub-feature'
        );
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0, rootMargin: '0px 0px 25% 0px' });
        targets.forEach(function(el) {
            // Anything within 1.5 viewports is shown immediately. Previously only
            // the first viewport was exempt, so fast scrolling, screenshots and
            // crawlers caught whole sections mid-fade and saw them blank.
            var rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 1.5) return;
            el.classList.add('reveal-init');
            observer.observe(el);
        });
    });

/* ---------- block 9: email ---------- */
// The markup now ships a real mailto: href, so the address works with JavaScript
// disabled or broken - previously these were href="#" and the only route to
// contacting the lab jumped to the top of the page if this script did not run.
// The obfuscation this replaced was already thin: data-user and data-domain sit
// in the source in plain text. This pass only swaps the spelled-out display text
// ("ali dot neshati at ...") for the real address.
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a.js-email').forEach(function (a) {
        var addr = a.dataset.user + '@' + a.dataset.domain;
        a.href = 'mailto:' + addr;
        a.textContent = addr;
    });
});

/* ---------- block 10: hash target correction ---------- */
(function () {
    function scrollToHash() {
        if (!location.hash || location.hash === '#') { return; }
        var el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
        if (!el) { return; }
        // 'instant' so this correction does not fight the CSS smooth-scroll
        var y = el.getBoundingClientRect().top + window.scrollY
                - parseInt(getComputedStyle(el).scrollMarginTop || '0', 10);
        window.scrollTo({ top: y, behavior: 'instant' });
    }
    // after webfonts swap (metrics change -> section offsets move)
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(function () { requestAnimationFrame(scrollToHash); });
    }
    // and after every image has reserved/settled its box
    window.addEventListener('load', function () { requestAnimationFrame(scrollToHash); });
})();

/* ---------- Footer: year and last-updated ---------- */
(function () {
    var y = document.getElementById('footer-year');
    if (y) { y.textContent = String(new Date().getFullYear()); }
    var lu = document.getElementById('last-updated');
    if (lu) {
        // document.lastModified reflects the Last-Modified header GitHub Pages
        // sends, i.e. the most recent deploy of this file.
        var d = new Date(document.lastModified);
        if (!isNaN(d)) {
            lu.textContent = d.toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' });
            lu.setAttribute('datetime', d.toISOString().slice(0, 10));
        }
    }
})();
