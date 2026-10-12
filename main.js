/* ============================================================================
   UXID Lab behaviour
   Extracted from index.html on 2026-10-12 (was 10 inline <script> blocks).
   Loaded with defer, so it runs after parsing and never blocks render.
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

/* ---------- block 2 of 10 ---------- */
    // Count-up animation for lab stats (respects reduced motion)
    document.addEventListener('DOMContentLoaded', function() {
        var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced || !('IntersectionObserver' in window)) return;
        var counters = document.querySelectorAll('#lab-stats .stat-number');
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (!entry.isIntersecting) return;
                var el = entry.target;
                observer.unobserve(el);
                var target = parseInt(el.getAttribute('data-target'), 10);
                var suffix = el.getAttribute('data-suffix') || '';
                var duration = 900;
                var start = null;
                function step(ts) {
                    if (!start) start = ts;
                    var progress = Math.min((ts - start) / duration, 1);
                    el.textContent = Math.round(progress * target) + (progress === 1 ? suffix : '');
                    if (progress < 1) requestAnimationFrame(step);
                }
                requestAnimationFrame(step);
            });
        }, { threshold: 0.4 });
        counters.forEach(function(c) { observer.observe(c); });
    });

/* ---------- block 3 of 10 ---------- */
function toggleDescription2() {
    const description = document.getElementById("description");
    const button = document.getElementById("readMoreButton");

    if (description.style.maxHeight === "150px") {
        description.style.maxHeight = "1000px";
        button.innerText = "Show Less";
    } else {
        description.style.maxHeight = "150px";
        button.innerText = "Read More";
    }
}

/* ---------- block 4 of 10 ---------- */
// Automatically sort events by date and calculate countdowns
document.addEventListener("DOMContentLoaded", function() {
    const timeline = document.querySelector('.events-timeline');
    if (timeline) {
        const events = Array.from(timeline.querySelectorAll('.event-card'));
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Normalize today's date to midnight for accurate comparison
        
        events.sort((a, b) => {
            const getEventDate = (card) => {
                // Parse month and day from the badges
                const monthText = card.querySelector('.month').innerText.trim();
                const dayText = card.querySelector('.day').innerText.trim();
                
                // Try to extract a year from the card text (e.g., 2026), 
                // otherwise fallback to the current year
                const detailsText = card.querySelector('.event-details').innerText;
                const yearMatch = detailsText.match(/\b(202\d)\b/);
                const year = yearMatch ? yearMatch[1] : new Date().getFullYear();
                
                return new Date(`${monthText} ${dayText}, ${year}`);
            };

            const dateA = getEventDate(a);
            const dateB = getEventDate(b);

            // Temporarily store the calculated date on the event card node
            a.parsedDate = dateA;
            b.parsedDate = dateB;

            return dateA - dateB;
        });
        
        // Process, style, and re-append events in sorted order
        events.forEach(event => {
            timeline.appendChild(event);
            
            // If parsedDate was set during sort, calculate the differences
            if (event.parsedDate) {
                const timeDiff = event.parsedDate.getTime() - today.getTime();
                const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
                
                // Create the HTML countdown element dynamically
                const countdownBadge = document.createElement('div');
                countdownBadge.style.marginTop = '4px';
                countdownBadge.style.fontSize = '0.75rem';
                countdownBadge.style.fontWeight = 'bold';
                countdownBadge.style.display = 'inline-block';
                countdownBadge.style.padding = '5px 10px';
                countdownBadge.style.borderRadius = '5px';
                countdownBadge.style.textTransform = 'uppercase';
                countdownBadge.style.letterSpacing = '0.5px';
                
                // Change style based on whether the date is upcoming, today, or past
                if (daysDiff > 0) {
                    countdownBadge.innerHTML = `<i class="fas fa-hourglass-half" style="margin-right:4px;"></i>${daysDiff} days left`;
                    if (daysDiff < 60) {
                        // Less than 60 days: Red and bolder
                        countdownBadge.style.backgroundColor = 'rgba(231, 76, 60, 0.15)';
                        countdownBadge.style.color = '#e74c3c';
                        countdownBadge.style.border = '1px solid rgba(231, 76, 60, 0.3)';
                        countdownBadge.style.fontWeight = '900';
                    } else if (daysDiff > 90) {
                        // More than 3 months (~90 days): Green
                        countdownBadge.style.backgroundColor = 'rgba(46, 204, 113, 0.15)';
                        countdownBadge.style.color = '#2ecc71';
                        countdownBadge.style.border = '1px solid rgba(46, 204, 113, 0.3)';
                    } else {
                        // Standard: Yellow
                        countdownBadge.style.backgroundColor = 'rgba(244, 208, 63, 0.15)';
                        countdownBadge.style.color = '#F4D03F';
                        countdownBadge.style.border = '1px solid rgba(244, 208, 63, 0.3)';
                    }
                } else if (daysDiff === 0) {
                    countdownBadge.innerHTML = `<i class="fas fa-bell" style="margin-right:4px;"></i>Today!`;
                    countdownBadge.style.backgroundColor = 'rgba(231, 76, 60, 0.15)';
                    countdownBadge.style.color = '#e74c3c';
                    countdownBadge.style.border = '1px solid rgba(231, 76, 60, 0.3)';
                } else {
                    countdownBadge.innerHTML = `<i class="fas fa-check" style="margin-right:4px;"></i>Past Event`;
                    countdownBadge.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                    countdownBadge.style.color = '#AAB7B8';
                    countdownBadge.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                    // Slightly fade out old events
                    event.style.opacity = '0.6';
                }
                
                const detailsDiv = event.querySelector('.event-details');
                if (detailsDiv) {
                    detailsDiv.appendChild(countdownBadge);
                }
            }
        });
    }
});

/* ---------- block 5 of 10 ---------- */
    function toggleDescription(id) {
        const desc = document.getElementById(id);
        desc.style.display = desc.style.display === 'block' ? 'none' : 'block';
    }

/* ---------- block 6 of 10 ---------- */
// Back to Top Button
(function() {
    var btn = document.getElementById('backToTop');
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

// Publication filtering: year AND theme AND free-text search compose.
// data-year / data-theme are now hard-coded on each item in the HTML, so the
// list is self-describing and no longer parsed out of the badge text at runtime.
(function() {
    var items   = [].slice.call(document.querySelectorAll('.publication-item'));
    var search  = document.getElementById('pub-search');
    var countEl = document.getElementById('pub-count');
    var emptyEl = document.getElementById('pub-empty');
    var state   = { year: 'all', theme: 'all', q: '' };

    function matches(item) {
        var y = item.getAttribute('data-year') || '';
        if (state.year === 'older') { if (parseInt(y, 10) >= 2018) return false; }
        else if (state.year !== 'all' && y !== state.year) { return false; }

        if (state.theme !== 'all') {
            var themes = (item.getAttribute('data-theme') || '').split(/\s+/);
            if (themes.indexOf(state.theme) === -1) return false;
        }

        if (state.q) {
            if (item.textContent.toLowerCase().indexOf(state.q) === -1) return false;
        }
        return true;
    }

    function apply() {
        var shown = 0;
        items.forEach(function(item) {
            var ok = matches(item);
            item.classList.toggle('hidden', !ok);
            if (ok) shown++;
        });
        if (countEl) {
            countEl.textContent = (shown === items.length)
                ? shown + ' publications'
                : shown + ' of ' + items.length + ' publications';
        }
        if (emptyEl) emptyEl.hidden = shown !== 0;
    }

    function wire(selector, key) {
        var group = [].slice.call(document.querySelectorAll(selector));
        group.forEach(function(btn) {
            btn.addEventListener('click', function() {
                group.forEach(function(b) {
                    b.classList.remove('active');
                    b.setAttribute('aria-pressed', 'false');
                });
                btn.classList.add('active');
                btn.setAttribute('aria-pressed', 'true');
                state[key] = btn.getAttribute('data-' + key);
                apply();
            });
        });
    }
    wire('.pub-filter-btn', 'year');
    wire('.pub-theme-btn', 'theme');

    if (search) {
        var t;
        search.addEventListener('input', function() {
            clearTimeout(t);
            t = setTimeout(function() { state.q = search.value.trim().toLowerCase(); apply(); }, 120);
        });
    }

    // Deep links from the Research section: #publications?theme=wearable
    window.filterPublicationsByTheme = function(theme) {
        state.theme = theme;
        [].slice.call(document.querySelectorAll('.pub-theme-btn')).forEach(function(b) {
            var on = b.getAttribute('data-theme') === theme;
            b.classList.toggle('active', on);
            b.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
        apply();
        var target = document.getElementById('publications');
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    };

    apply();
})();

// Lazy Loading for images below the fold
document.addEventListener('DOMContentLoaded', function() {
    var imgs = document.querySelectorAll('img');
    imgs.forEach(function(img, i) {
        // Skip the hero image, which must load eagerly
        if (!img.closest('#hero')) {
            img.setAttribute('loading', 'lazy');
        }
    });
});

// ARIA now lives in the markup (nav aria-label, button aria-expanded/aria-controls),
// so it is present before JS runs and survives a script failure. The previous
// runtime injection also stamped role="region" on every section without giving
// them accessible names, which added screen-reader noise rather than structure.

// Sticky Section Indicator
(function() {
    var indicator = document.getElementById('section-indicator');
    var indicatorText = document.getElementById('section-indicator-text');
    var sectionNames = {
        'hero': 'Home',
        'about': 'About',
        'lab-stats': 'At a Glance',
        'research': 'Research',
        'publications': 'Publications',
        'recent-news': 'News',
        'awards': 'Awards',
        'join': 'Join Us',
        'important-dates': 'Deadlines',
        'people': 'People',
        'teaching': 'Teaching',
        'footer': 'Contact'
    };
    var sections = [];
    Object.keys(sectionNames).forEach(function(id) {
        var el = document.getElementById(id);
        if (el) sections.push({ el: el, name: sectionNames[id] });
    });
    var currentSection = '';
    var ticking = false;
    function updateIndicator() {
        if (window.scrollY < 200) {
            indicator.style.display = 'none';
            ticking = false;
            return;
        }
        indicator.style.display = 'block';
        var scrollPos = window.scrollY + 120;
        for (var i = sections.length - 1; i >= 0; i--) {
            if (sections[i].el.offsetTop <= scrollPos) {
                if (currentSection !== sections[i].name) {
                    currentSection = sections[i].name;
                    indicatorText.textContent = currentSection;
                }
                break;
            }
        }
        ticking = false;
    }
    window.addEventListener('scroll', function() {
        if (ticking) { return; }
        ticking = true;
        window.requestAnimationFrame(updateIndicator);
    }, { passive: true });
})();

// Collapsible Publication Abstracts
(function() {
    var abstracts = {
        'HamRaz': 'We present HamRaz, a culturally adapted Persian-language dataset for AI-assisted mental health support, grounded in Person-Centered Therapy (PCT). To reflect real-world therapeutic challenges, we combine script-based dialogue with adaptive large language models (LLM) role-playing, capturing the ambiguity and emotional nuance of Persian-speaking clients. We introduce HamRazEval, a dual-framework for assessing conversational and therapeutic quality using General Metrics and specialized psychological relationship measures. Human evaluations show HamRaz outperforms existing baselines in empathy, coherence, and realism. This resource contributes to the Digital Humanities by bridging language, culture, and mental health in underrepresented communities.',
        'SwipeSense': 'We explore the feasibility of using built-in IMU sensors on smartphones for detecting back-of-device swipe interactions. By leveraging accelerometer and gyroscope data, our system classifies directional swipe gestures performed on the rear surface of the device without requiring additional hardware. We evaluate recognition accuracy across multiple gesture types and device form factors, demonstrating that SwipeSense can reliably detect back-of-device swipes, opening new possibilities for eyes-free and one-handed mobile interaction.',
        'PaperPal': 'Collaborative learning with research papers is crucial for academic growth, yet the applications available today rarely provide the engaging and effective experience needed for collaborative learning. We propose a solution that simplifies working with academic papers while making the experience interactive and helpful. This paper introduces a platform designed to transform how groups collaborate on research papers, making the process more dynamic, intuitive, and productive. The system integrates real-time collaborative annotation, AI-generated tools, layered explanations, adaptive quizzes, and structured discussion workflows, all powered by large language models (LLMs). It tracks engagement and highlights key focus areas based on collective user behaviour. Our early implementation demonstrates the potential of generative AI to meaningfully enhance academic group learning by making it more inclusive, intelligent, and participatory. Through this work, we aim to explore how large language models and AI integration can transform collaborative academic tools, fostering deeper collaboration and understanding.',
        'CitePeek': 'Academic reading requires frequent citation engagement, but traditional PDF readers do not provide contextual support to understand cited works. Current tools require readers to navigate away from the main text to access citation details. This disrupts the reading flow, highlighting a significant gap in seamless citation exploration. We present CitePeek, an interactive PDF assistant that transforms citations in a research paper into interactive elements. Clicking a citation reveals a pop-up with metadata and an abstract for quick critical insights. A comprehensive sidebar offers Surface and Deep Dive information levels and cited paper results. Surface provides key points, Deep Dive gives narrative explanations with visuals, and Results highlight significant experimental outcomes with data visualizations. CitePeek calculates contextual relevance through similarity scoring, presenting relevant paragraphs and relevance-based highlighting in original PDFs. CitePeek identifies related papers within the reference network, delivering essential citation details directly within the reading environment.',
        'Large Language User Interfaces': 'The evolution of Large Language Models (LLMs) has showcased remarkable capacities for logical reasoning and natural language comprehension. These capabilities can be leveraged in solutions that semantically and textually model complex problems. In this paper, we present our efforts toward constructing a framework that can serve as an intermediary between a user and their user interface (UI), enabling dynamic and real-time interactions. We employ a system that stands upon textual semantic mappings of UI components, in the form of annotations. These mappings are stored, parsed, and scaled in a custom data structure, supplementary to an agent-based prompting backend engine. Employing textual semantic mappings allows each component to not only explain its role to the engine but also provide expectations. By comprehending the needs of both the user and the components, our LLM engine can classify the most appropriate application, extract relevant parameters, and subsequently execute precise predictions of the user\'s expected actions. Such an integration evolves static user interfaces into highly dynamic and adaptable solutions, introducing a new frontier of intelligent and responsive user experiences.',
        'Exploring Uni-manual Around Ear': 'Small form factor limits physical input space in earable (i.e., ear-mounted wearable) devices. Off-device earable inputs in alternate mid-air and on-skin around-ear interaction spaces using uni-manual gestures can address this input space limitation. Segmenting these alternate interaction spaces to create multiple gesture regions for reusing off-device gestures can expand earable input vocabulary by a large margin. Although prior earable interaction research has explored off-device gesture preferences and recognition techniques in such interaction spaces, supporting gesture reuse over multiple gesture regions needs further exploration. We collected and analyzed 7560 uni-manual gesture motion data from 18 participants to explore earable gesture reuse by segmentation of on-skin and mid-air spaces around the ear. Our results show that gesture performance degrades significantly beyond 3 mid-air and 5 on-skin around-ear gesture regions for different uni-manual gesture classes (e.g., swipe, pinch, tap). We also present qualitative findings on most and least preferred regions (and associated boundaries) by end-users for different uni-manual gesture shapes across both interaction spaces for earable devices.',
        'Exploring Unimanual Region-to-Region': 'We explore the design space of unimanual region-to-region (R2R) swipe gestures for off-device earable interaction. R2R swipes, where users swipe from one spatial region to another around the ear, provide a rich gesture vocabulary for ear-mounted wearable devices. We investigate the feasibility, performance, and user preferences for R2R swipes in both mid-air and on-skin interaction spaces. Through user studies, we evaluate how different swipe directions and region combinations affect gesture recognition accuracy and user comfort, providing design guidelines for expanding the input capabilities of earable devices.',
        'Interactive Color Palettes': 'Color design is essential in areas such as product, graphic, and fashion design. However, current tools like Photoshop, with their concrete-driven color manipulation approach, often stumble during early ideation, favoring polished end results over initial exploration. We introduced Mondrian as a test-bed for abstraction-driven approach using interactive color palettes for image colorization. Through a formative study with six design experts, we selected three design options for visual abstractions in color design and developed Mondrian where humans work with abstractions and AI manages the concrete aspects. We carried out a user study to understand the benefits and challenges of each abstraction format and compare the Mondrian with Photoshop. A survey involving 100 participants further examined the influence of each abstraction format on color composition perceptions. Findings suggest that interactive visual abstractions encourage a non-linear exploration workflow and an open mindset during ideation, thus providing better creative affordance.',
        'In-vehicle Performance': 'We compare the performance and level of distraction of expressive directional gesture input in the context of in-vehicle system commands. Center console touchscreen swipes and midair swipe-like movements are tested in 8-directions, with 8-button touchscreen tapping as a baseline. Participants use these input methods for intermittent target selections while performing the Lane Change Task in a virtual driving simulator. Input performance is measured with time and accuracy, cognitive load with deviation of lane position and speed, and distraction from frequency of off-screen glances. Results show midair gestures were less distracting and faster, but with lower accuracy. Touchscreen swipes and touchscreen tapping are comparable across measures. Our work provides empirical evidence for vehicle interface designers and manufacturers considering midair or touch directional gestures for centre console input.',
        'De-Stijl': 'Selecting a proper color palette is critical in crafting a high-quality graphic design to gain visibility and communicate ideas effectively. To facilitate this process, we propose De-Stijl, an intelligent and interactive color authoring tool to assist novice designers in crafting harmonic color palettes, achieving quick design iterations, and fulfilling design constraints. Through De-Stijl, we contribute a novel 2D color palette concept that allows users to intuitively perceive color designs in context with their proportions and proximities. Further, De-Stijl implements a holistic color authoring system that supports 2D palette extraction, theme-aware and spatial-sensitive color recommendation, and automatic graphical elements (re)colorization. We evaluated De-Stijl through an in-lab user study by comparing the system with existing industry standard tools, followed by in-depth user interviews. Quantitative and qualitative results demonstrate that De-Stijl is effective in assisting novice design practitioners to quickly colorize graphic designs and easily deliver several alternatives.',
        'Interaction Region': 'Recent computer vision advances can enable television control using midair barehand input, for which selecting targets using hand positions is a primary task. Yet, the size and position of a preferred 2D interaction region has not been specifically investigated for this setting. We report on a field study with people in front of their own television in their own home. Controlled variations of target position stimuli were presented while a camera records the natural hand position used by the participant in response. Based on hand and face landmarks, density plots define a preferred input region location and size using a human-scaled unit of face-widths. Distribution of hand positions relative to target stimuli reveals consistency and precision, suggesting an ability for users to map their input space to display space. We elicit an ideal input region from participants and provide a range of dimensions for designers implementing barehand input techniques.',
        'Slide4n': 'Data scientists often have to use other presentation tools (e.g., Microsoft PowerPoint) to create slides to communicate their analysis obtained using computational notebooks. Much tedious and repetitive work is needed to transfer the routines of notebooks (e.g., code, plots) to the presentable contents on slides (e.g., bullet points, figures). We propose a human-AI collaborative approach and operationalize it within Slide4N, an interactive AI assistant for data scientists to create slides from computational notebooks. Slide4N leverages advanced natural language processing techniques to distill key information from user-selected notebook cells and then renders them in appropriate slide layouts. The tool also provides intuitive interactions that allow further refinement and customization of the generated slides. We evaluated Slide4N with a two-part user study, where participants appreciated this human-AI collaborative approach compared to fully-manual or fully-automatic methods. The results also indicate the usefulness and effectiveness of Slide4N in slide creation tasks from notebooks.',
        'EdgeSelect': 'We present EdgeSelect, a linear target selection interaction technique that utilizes a small portion of the smartwatch display, explicitly designed to mitigate the \'fat finger\' and screen occlusion problems, two of the most common and well-known challenges when interacting with small displays. To design our technique, we first conducted a user study to answer which segments of the smartwatch display have the least screen occlusion while users are interacting with it. We use results from the first experiment to introduce EdgeSelect, a three-layer non-linear interaction technique, which can be used to interact with multiple co-adjacent graphs on the smartwatch by using a region that is the least prone to finger occlusion. In a second experiment, we explore the density limits of the targets possible with EdgeSelect. Finally, we demonstrate the generalizability of EdgeSelect to interact with various types of content.',
        'Data visualization and interaction': 'This thesis investigates the challenges and opportunities of data visualization and interaction on smartwatch small screens. Smartwatches have become ubiquitous wearable devices, but their small display size presents significant challenges for presenting and interacting with data visualizations. We explore novel techniques for displaying time-series data, interacting with graphs, and minimizing screen occlusion on these constrained displays. Our contributions include new visualization approaches and interaction techniques that enable effective data consumption directly on the wrist.',
        'Understanding and Adapting Bezel-to-Bezel': 'Supporting eyes-free interaction, mobility and encumbrance, while providing a broad set of commands on a smartwatch display is a difficult, yet important, task. Bezel-to-bezel (B2B) gestures are valuable for rapid command invocation during eyes-free operation, however we lack knowledge regarding B2B interactions on circular devices during common usage scenarios. We aim to improve our understanding of the dynamics of B2B interactions in these scenarios by conducting two studies and a third analysis: First, we explore the performance of B2B in a seated position; second, we explore the effect of mobility and encumbrance on the B2B interaction; finally, we improve on the B2B accuracies by calculating features and utilizing machine learning. With the limited interaction capabilities on smartwatches and the importance of the scenario of use, we conclude with applications and design guidelines for improved utilization of B2B that enables effective smartwatch control while in common, mobile and eyes-free scenarios.',
        'Crowdsourcing vs laboratory': 'The use of crowdsourcing platforms for data collection in HCI research is attractive in their ability to provide rapid access to large and diverse participant samples. As a result, several researchers have conducted studies investigating the similarities and differences between data collected through crowdsourcing and more traditional, laboratory-style data collection. We add to this body of research by examining the feasibility of conducting social acceptability studies via crowdsourcing. Social acceptability can be a key determinant for the early adoption of emerging technologies, and as such, we focus our investigation on social acceptability for Head-Worn Display (HWD) input modalities. Our results indicate that data collected via a crowdsourced experiment and a laboratory-style setting did not differ at a statistically significant level. These results provide initial support for crowdsourcing platforms as viable options for conducting social acceptability research.',
        'BezelGlide': 'We present BezelGlide, a novel suite of bezel interaction techniques, designed to minimize screen occlusion and \'fat finger\' effects, when interacting with common graphs on smartwatches. To explore the design of BezelGlide, we conducted two user studies. First, we quantified the amount of screen occlusion experienced when interacting with the smartwatch bezel. Next, we designed two techniques that involve gliding the finger along the smartwatch bezel for graph interaction. Full BezelGlide (FBG) and Partial BezelGlide (PBG), use the full or a portion of the bezel, respectively, to reduce screen occlusion while scanning a line chart for data. In the common value detection task, we find that PBG outperforms FBG and Shift, a touchscreen occlusion-free technique, both quantitatively and subjectively, also while mobile. We finally illustrate the generalizability potential of PBG to interact with common graph types making it a valuable interaction technique for smartwatch users.',
        'SF-LG': 'Multiple embedded sensors enable smartwatch apps to amass large amounts of interrelated time-series data simultaneously, such as heart rate, oxygen levels or steps walked. Visualizing multiple interlinked datasets is possible on smartphones but remains challenging on small smartwatch displays. We propose a new technique, the Space-Filling Line Graph (SF-LG), that preserves the key visual properties of time-series graphs while making available space on the display to augment such graphs with additional information. Results from our first study (N=30) suggest that, while SF-LG makes available additional space on the small display, it also enables effective (i.e. quick and accurate) comprehension of key line graph tasks. We next implement a greedy algorithm to embed auxiliary information in the most suitable regions on the display. In a second study (N=27), we find that participants are efficient at locating and linking interrelated content using SF-LG in comparison to two baselines approaches. We conclude with guidelines for smartwatch space maximization for visual displays.',
        'Using Guessability Framework': 'Mid-air gestures have been heavily studied in HCI but with mostly younger adults (YAs). Older adults (OAs) can equally benefit from such a modality, but given their heterogeneous motor abilities, designing suitable gestures is challenging. Our research specifically looks at age-related differences in hand gesture preferences between older and younger adults. This subject is important since it relates to the idea of a proper age-inclusive technological design and the means towards the successful adoption of technologies by all the layers of the population, including older adults.',
        'Eyes-Free Graph Legibility': 'Recent technological advances have enabled novel tactile displays which have mainly focused on providing shorter sensations for notifications and/or simple messages. These have been primarily been used to enhance the user experience. In contrast, conveying information via data charts, such as a line graph, remains largely unexplored. To address this gap, we developed a tactile display prototype. Our prototype uses skin-dragging, a method to produce longer tactile perceptions from dragging a tip on the skin, as the primary means to convey the data. We postulate that if such an approach is successful, it could convey the data in eyes-free scenarios, an element common for on-the-go computing. In an experiment (n=12), we compare the recognition performance of graphs with two different skin-dragging properties, Full-Drag and Dot. The results show that participants performed both techniques equally well, but our Full-Drag technique was greatly preferred. We conclude with design guidelines for tactile displays that focus on graph representations.',
        'G-Sparks': 'Optimizing the use of a small display while presenting graphic data such as line charts is challenging. To tackle this, we propose G-Sparks, a compact visual representation of glanceable line graphs for smartwatches, with exploration primarily considering suitable compression axes for time-series charts. In our first study, we examined the optimal line-graph compression approach without compromising perceptual metrics such as slope or height detections. We found that condensing graphs yields more accurate reading of height estimations than non-compressed graphs, but only when these are compressed along the x-axis. Building from this result, we studied the effect of x-axis compression on users\' ability to perform glanceable analytic tasks with actual biometric data. Our results indicate that extreme compression to one data sample per pixel maintains readability while reducing the need for navigation. We conclude with guidelines for application designers integrating line charts into smartwatch interfaces.',
        'An Analytic Model': 'Hierarchy structures such as file systems are widespread interfaces for item retrieval and selection tasks. Some hierarchies can be modified by end-users, such as application launchers on smartphones or pictures in a file folder. These modifiable hierarchies cannot benefit from an optimization made beforehand as their content, unknown during the design process, is constantly evolving. We hence propose an analytic model which designers can integrate in their system to recommend a range of local structure modifications (e.g., creating new folders) to end-users. Proposing a range of modifications gives flexibility to end-users regarding their own meaningful grouping and labeling choices to follow a recommendation. A first experiment confirms that the recommendations built on our model can lead to modified hierarchies resulting in faster theoretical selection times. A second experiment confirms that the theoretical selection times fit empirical selection times in different hierarchy visual layouts: linear, radial, and grid.',
        'Smart Home Interactions': 'Smart home technology is receiving significant attention. This is largely in response to an increase in the size of demographic those who require assistance due to reduced mobility, in particular, older adults. Smart home technology enables the assistance individuals with limited mobility need for their daily routines: these limitations can be addressed using modern ambient assisted living technologies. In particular we discuss the benefits of using electromyography (EMG) sensors to capture gestural input that would normally be difficult to sense in the absence of such sensors. With EMG, we can provide user control of a smart environment through the use of gestures based on muscle activity of the hands. This paper will focus on presenting the benefits of EMG technologies that can potentially assist individuals with hand mobility issues. We will describe the current state of EMG sensory technologies and their role in shaping gesture-based interaction techniques. We present our approach using such EMG signals and demonstrate their value in a smart home scenario. Finally we introduce the concept of subtle EMG gestures and build a better understanding of how we might improve accessibility for those with limited upper limb motion.',
        'Challenges in Displaying Health Data': 'Using smartwatches for self-tracking purposes has become increasingly common. This tracking is possible as a result of the many sensors embedded in modern smartwatches including GPS, heart rate monitor, accelerometer, and gyroscope. The ability to obtain personal health-related data is one of the most compelling reason to purchase such devices. However, form factor limitations create numerous challenges for users hoping to access and interpret the data available. Typically, users rely on a secondary device, such as a smartphone to view health data. The aim of our research is to identify methods to improve user consumption of health-related data directly on a smartwatch. To study and apply novel visualization approaches, several key challenges need to be addressed. We present these here along with their corollary methods of circumvention.',
        'Performer vs. Observer': 'The popularity of head-worn displays (HWD) technologies such as Virtual Reality (VR) and Augmented Reality (AR) headsets is growing rapidly. To predict their commercial success, it is essential to understand the acceptability of these new technologies, along with new methods to interact with them. In this vein, the evaluation of social acceptability of interactions with these technologies has received significant attention, particularly from the performer\'s (i.e., user\'s) viewpoint. However, little work has considered social acceptability concerns from observers\' (i.e., spectators\') perspective. Although HWDs are designed to be personal devices, interacting with their interfaces are often quite noticeable, making them an ideal platform to contrast performer and observer perspectives on social acceptability. Through two studies, this paper contrasts performers\' and observers\' perspectives of social acceptability interactions with HWDs under different social contexts. Results indicate similarities as well as differences, in acceptability, and advocate for the importance of including both perspectives when exploring social acceptability of emerging technologies.',
        'Is Really NACK Protocol': 'This paper examines the security vulnerabilities of the Negative Acknowledgement (NACK) protocol when employed in Mobile Ad hoc Networks (MANETs). MANETs are decentralized wireless networks where nodes communicate without fixed infrastructure, making them susceptible to various security attacks. We analyze the NACK protocol\'s resilience against common attack vectors in MANETs and demonstrate potential weaknesses that could be exploited by malicious nodes. Our findings suggest that additional security mechanisms are needed to ensure reliable and secure communication when using NACK-based protocols in mobile ad hoc environments.'
    };

    document.querySelectorAll('.publication-links').forEach(function(links) {
        var pubDetails = links.closest('.publication-details');
        var titleEl = pubDetails.querySelector('h4');
        var title = titleEl ? titleEl.textContent.trim() : '';

        // Find matching abstract by checking if title contains any key
        var abstractText = null;
        for (var key in abstracts) {
            if (title.indexOf(key) !== -1) {
                abstractText = abstracts[key];
                break;
            }
        }
        // No abstract on file: add no button at all. (Look this up BEFORE
        // creating the button, or papers without an abstract get a dead one.)
        if (!abstractText) { return; }

        var abstractBtn = document.createElement('button');
        abstractBtn.type = 'button';
        abstractBtn.className = 'btn-pub btn-abstract';
        abstractBtn.setAttribute('aria-expanded', 'false');
        abstractBtn.innerHTML = '<i class="fas fa-align-left"></i> Abstract';
        links.appendChild(abstractBtn);

        var abstract = document.createElement('div');
        abstract.className = 'pub-abstract';
        abstract.textContent = abstractText;
        pubDetails.appendChild(abstract);

        abstractBtn.addEventListener('click', function() {
            var open = abstract.classList.toggle('expanded');
            abstractBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
            abstractBtn.innerHTML = open
                ? '<i class="fas fa-align-left"></i> Hide Abstract'
                : '<i class="fas fa-align-left"></i> Abstract';
        });
    });
})();

/* ---------- block 7 ---------- */
    // The hero carousel (and its 21 MB background video) was removed in favour of
    // a static hero, so the play/pause controller that gated the video is gone too.

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
// Build the mailto: at runtime. Humans get a working link; naive address
// harvesters scraping the HTML source do not get a plain address.
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


/* ---------- Research theme counts ----------
   Fill the "N papers" figure on each research card from the publication list,
   so the counts cannot drift when a paper is added or retagged. */
(function () {
    var items = [].slice.call(document.querySelectorAll('.publication-item'));
    [].slice.call(document.querySelectorAll('[data-count]')).forEach(function (el) {
        var theme = el.getAttribute('data-count');
        el.textContent = items.filter(function (item) {
            return (item.getAttribute('data-theme') || '').split(/\s+/).indexOf(theme) !== -1;
        }).length;
    });
})();

/* ---------- Selected work strip ----------
   Clone the items marked data-featured into a card strip at the top of the
   Publications section. Built from the list rather than duplicated in the
   markup, so a paper's title, venue, image and links only ever exist once. */
(function () {
    var wrap = document.getElementById('pub-featured');
    if (!wrap) { return; }

    var featured = [].slice.call(document.querySelectorAll('.publication-item[data-featured]'));
    if (!featured.length) {
        var container = wrap.closest('.pub-featured-wrap');
        if (container) { container.hidden = true; }
        return;
    }

    featured.forEach(function (item) {
        var img    = item.querySelector('.publication-thumbnail');
        var badge  = item.querySelector('.publication-badge');
        var title  = item.querySelector('h4');
        var award  = item.querySelector('.honorable-mention');
        var teaser = item.getAttribute('data-teaser') || '';

        var card = document.createElement('article');
        card.className = 'pub-feature';

        var media = document.createElement('a');
        media.className = 'pub-feature__media';
        media.href = '#' + item.id;
        if (img) {
            var clone = img.cloneNode(true);
            clone.removeAttribute('class');
            clone.alt = '';
            clone.loading = 'lazy';
            media.appendChild(clone);
        }
        if (badge) {
            var pill = document.createElement('span');
            pill.className = 'pub-feature__pill';
            pill.textContent = badge.textContent.trim();
            media.appendChild(pill);
        }
        if (award) {
            var ribbon = document.createElement('span');
            ribbon.className = 'pub-feature__award';
            ribbon.textContent = 'Award';
            media.appendChild(ribbon);
        }
        card.appendChild(media);

        var body = document.createElement('div');
        body.className = 'pub-feature__body';

        var h = document.createElement('h4');
        h.className = 'pub-feature__title';
        var a = document.createElement('a');
        a.href = '#' + item.id;
        a.textContent = title ? title.textContent.trim() : '';
        h.appendChild(a);
        body.appendChild(h);

        if (teaser) {
            var p = document.createElement('p');
            p.className = 'pub-feature__teaser';
            p.textContent = teaser;
            body.appendChild(p);
        }

        // Reuse the real links so they can never drift from the list entry.
        var links = document.createElement('p');
        links.className = 'pub-feature__links';
        [].slice.call(item.querySelectorAll('.publication-links a')).forEach(function (src) {
            var l = document.createElement('a');
            l.href = src.getAttribute('href');
            if (src.hasAttribute('target')) { l.target = src.getAttribute('target'); l.rel = 'noopener'; }
            l.textContent = src.textContent.trim();
            links.appendChild(l);
        });
        body.appendChild(links);

        card.appendChild(body);
        wrap.appendChild(card);
    });
})();
