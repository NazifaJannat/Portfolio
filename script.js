// Data for Articles
const articlesData = [
    {
        title: 'Massive crackdown on students geared up July movement',
        source: 'BSS News',
        date: 'June 29, 2025',
        link: 'https://www.bssnews.net/july-uprising/287751',
        image: 'assets/thumb_bss_crackdown_1767613564511.png'
    },
    {
        title: 'We can unite forgetting differences',
        source: 'Prothom Alo (En)',
        date: 'Dec 2024',
        link: 'https://en.prothomalo.com/bangladesh/evgukx5ymk',
        image: 'assets/thumb_pa_reforms_1767613492793.png'
    },
    {
        title: 'July Movement Graffiti Amplifies Youth Demands',
        source: 'IID',
        date: '2024',
        link: 'https://iid.dev/july-movement-graffiti-amplifies-youth-demands-for-justice-and-dignity/',
        image: 'assets/thumb_iid_graffiti_1767614363556.png'
    },
    {
        title: 'New Bangladesh: Achievements and Challenges',
        source: 'Dhaka Tribune',
        date: '2024',
        link: 'https://www.dhakatribune.com/interviews-and-dialogue/368616/new-bangladesh-achievements-challenges-and-the',
        image: 'assets/thumb_dt_newbd_1767614006689.png'
    },
    {
        title: 'Role of Religion in Rebuilding Bangladesh',
        source: 'The Daily Star',
        date: '2024',
        link: 'https://www.thedailystar.net/opinion/rebuilding-bangladesh/vision-the-youth/news/role-religion-3694591',
        image: 'assets/thumb_ds_religion_fixed.png'
    },
    {
        title: 'Political Parties and Elections',
        source: 'The Daily Star',
        date: '2024',
        link: 'https://www.thedailystar.net/opinion/views/news/political-parties-and-elections-3751516',
        image: 'assets/thumb_ds_political_parties_fixed.png'
    },
    {
        title: 'বৈষম্যের দিন শেষ হবে একদিন',
        source: 'Prothom Alo',
        date: '2024',
        link: 'https://www.prothomalo.com/bangladesh/o9g267ipqz',
        image: 'assets/thumb_pa_discrimination_fixed.png'
    },
    {
        title: 'গণমানুষের চাওয়াকে গুরুত্ব দিতে হবে',
        source: 'Ajker Patrika',
        date: '2024',
        link: 'https://www.ajkerpatrika.com/women/ajpdcgzhwtdcu',
        image: 'assets/thumb_ajker_women_1767614300398.png'
    },
    {
        title: 'UNICEF Feature Post',
        source: 'Instagram',
        date: '2024',
        link: 'https://www.instagram.com/p/DB3WbJVoGzn/',
        image: 'assets/thumb_insta_post_1767613980352.png'
    },
    {
        title: 'Social Media Feature',
        source: 'Facebook (UNESCO)',
        date: '2024',
        link: 'https://www.facebook.com/share/1VogRtY3ic/',
        image: 'assets/thumb_insta_post_1767613980352.png'
    },
    {
        title: 'নারীকে টোকেন হিসেবে রাখার মানসিকতা গ্রহণ করা হবে না',
        source: 'Prothom Alo',
        date: 'Aug 8, 2025',
        link: 'https://www.prothomalo.com/bangladesh/3a3u681sz4',
        image: 'assets/thumb_pa_token_women_fixed.png'
    },
    {
        title: 'Liberation War highest glory, 2024 its continuation',
        source: 'Prothom Alo (En)',
        date: 'Dec 15, 2024',
        link: 'https://en.prothomalo.com/bangladesh/718ms7iqpo',
        image: 'assets/thumb_pa_liberation_fixed.png'
    },
    {
        title: 'Women in Humanitarian Movements: The July Mass Uprising',
        source: 'Pressenza',
        date: 'July 2, 2025',
        link: 'https://www.pressenza.com/2025/07/women-in-humanitarian-movements-the-july-mass-uprising-and-their-current-standing/',
        image: 'assets/thumb_pressenza_1767612217309.png'
    },
    {
        title: 'The Brave Girls of July',
        source: 'The Daily Star',
        date: 'Oct 11, 2025',
        link: 'https://www.thedailystar.net/supplements/international-day-the-girl-child-2025/news/the-brave-girls-july-4006806',
        image: 'assets/thumb_dailystar_1767612289382.png'
    },
    {
        title: 'Broader social change needed for women\'s participation',
        source: 'Dhaka Tribune',
        date: 'Mar 8, 2025',
        link: 'https://www.dhakatribune.com/seminars-and-interviews/375863/experts-broader-social-change-needed-for-women’s',
        image: 'assets/thumb_dhakatribune_1767612250254.png'
    },
    {
        title: 'Autonomous, efficient and decentralised local government',
        source: 'Prothom Alo',
        date: 'Nov 24, 2024',
        link: 'https://en.prothomalo.com/bangladesh/roundtable/nshp9orwpk',
        image: 'assets/thumb_pa_localgov_fixed.png'
    },
    {
        title: 'Women\'s representation in parliament is vital',
        source: 'Prothom Alo',
        date: 'Aug 8, 2025',
        link: 'https://en.prothomalo.com/bangladesh/roundtable/b690i4jsn6',
        image: 'assets/thumb_pa_women_rep.png'
    },
    {
        title: 'Women\'s 5pc seats: Is that charity?',
        source: 'Prothom Alo',
        date: 'Aug 8, 2025',
        link: 'https://en.prothomalo.com/bangladesh/roundtable/yzyza0g8k8',
        image: 'assets/thumb_pa_women_seats.png'
    },
    {
        title: 'নারী–ম্যানিফেস্টো ও অন্তর্ভুক্তিমূলক জাতীয় নির্বাচন',
        source: 'Prothom Alo',
        date: 'Dec 10, 2025',
        link: 'https://www.prothomalo.com/roundtable/b7u7wgzrje',
        image: 'assets/thumb_pa_manifesto_fixed.png'
    },
    {
        title: 'Border Killings: The Lingering Pain',
        source: 'Counter Currents',
        date: 'Mar 7, 2025',
        link: 'https://countercurrents.org/2025/03/border-killings-the-lingering-pain-and-diplomatic-efforts-in-india-bangladesh-relations/',
        image: 'assets/thumb_cc_border.png'
    },

    {
        title: 'July Uprising: Women activists feel sidelined',
        source: 'The Daily Star',
        date: 'Nov 2024',
        link: 'https://www.thedailystar.net/news/bangladesh/rights/news/july-uprising-women-activists-feel-sidelined-and-forgotten-3759231',
        image: 'assets/thumb_ds_july_women.png'
    },

    {
        title: 'Activists decry charity quota for women in JS',
        source: 'The Daily Star',
        date: '',
        link: 'https://www.thedailystar.net/news/bangladesh/politics/news/activists-decry-charity-quota-women-js-3959146',
        image: 'assets/thumb_ds_quota.png'
    },
    {
        title: 'Forum calls for direct polls, 100 reserved seats',
        source: 'TBS News',
        date: '',
        link: 'https://www.tbsnews.net/bangladesh/politics/forum-calls-direct-polls-100-reserved-seats-33-women-candidates-parties-1224871',
        image: 'assets/thumb_tbs_direct_polls_fixed.png'
    },
    {
        title: 'Experts: Women\'s leadership crucial',
        source: 'Dhaka Tribune',
        date: '',
        link: 'https://www.dhakatribune.com/interviews-and-dialogue/376564/experts-women’s-leadership-crucial-to',
        image: 'assets/thumb_dt_leadership_fixed.png'
    }
];

// Data for Videos
const videosData = [
    { title: 'আন্দোলনে নারীর ভূমিকা তুলে ধরা হলেও...', id: 'KRlxvh_dHjs' },
    { title: 'জুলাই ঘোষণাপত্র কতটুকু প্রত্যাশার প্রতিফলন...', id: 'rVa90Q3YqRc' },
    { title: 'বৈষম্যবিরোধী ছাত্র আন্দোলনে কেন...', id: 'Nm2xy8Kmg74' },
    { title: 'আমরা ছাত্র-রাজনীতি নিষিদ্ধ চাইনা', id: 'XYlyvqpAnjk' },
    { title: 'ওই ফাইটটা আমি করতে চাই না', id: 'o0bQRQZ_nQM' },
    { title: 'Interview with Nazifa Jannat', id: 'eJlyhwUHcAw' }
];

// Populate Articles if container exists (for media.html or home previews)
const articlesContainer = document.getElementById('articles-grid');
if (articlesContainer) {
    articlesData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'article-card glass-card fade-in-up';

        let imageHtml = '';
        if (item.image) {
            imageHtml = `<div class="article-thumb" style="background-image: url('${item.image}')"></div>`;
        }

        div.innerHTML = `
            ${imageHtml}
            <div class="article-content">
                <span class="meta">${item.source} • ${item.date}</span>
                <h3>${item.title}</h3>
            </div>
            <a href="${item.link}" target="_blank" class="read-btn">Read Article <i class="fa-solid fa-arrow-right"></i></a>
        `;
        articlesContainer.appendChild(div);
    });
}

// Populate Videos if container exists
// Populate Videos if container exists (Media Page)
const videosContainer = document.getElementById('videos-grid');
// Populate Videos if container exists (Home Page)
const homeVideosContainer = document.getElementById('home-videos-grid');

const populateVideos = (container) => {
    if (!container) return;
    videosData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'video-card glass-card fade-in-up';

        let videoHtml = '';
        if (item.type === 'link') {
            videoHtml = `
             <div class="video-thumb-container">
                <div class="video-placeholder-thumb"><i class="fa-solid fa-play-circle"></i></div>
             </div>`;
        } else {
            const thumbUrl = `https://img.youtube.com/vi/${item.id}/hqdefault.jpg`;
            videoHtml = `
            <div class="video-thumb-container">
                <div class="video-thumb" style="background-image: url('${thumbUrl}')">
                    <div class="play-overlay"><i class="fa-solid fa-play"></i></div>
                </div>
            </div>`;
        }

        div.innerHTML = `
            ${videoHtml}
            <div class="video-content">
                <h3>${item.title}</h3>
                <a href="${item.type === 'link' ? 'https://www.google.com/search?q=' + encodeURIComponent(item.title) : 'https://www.youtube.com/watch?v=' + item.id}" target="_blank" class="read-btn">Watch Video <i class="fa-solid fa-arrow-right"></i></a>
            </div>
        `;
        container.appendChild(div);
    });
};

populateVideos(videosContainer);
populateVideos(homeVideosContainer);

// Custom Cursor Logic
const dot = document.querySelector('.cursor-dot');
const outline = document.querySelector('.cursor-outline');

if (dot && outline) {
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        dot.style.left = `${posX}px`;
        dot.style.top = `${posY}px`;

        outline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: 'forwards' });
    });
}

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.glass-card, .section-title, .timeline-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

const style = document.createElement('style');
style.innerHTML = `
    .visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// --- Particle System (Snow Effect) ---
function createParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    document.body.prepend(particleContainer);

    const particleCount = 60;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('span');
        particle.className = 'particle';

        // Random positioning
        const x = Math.random() * 100;
        const delay = Math.random() * 15;
        const duration = 15 + Math.random() * 15;
        const size = Math.random() * 3 + 1; // 1px to 4px

        particle.style.left = `${x}%`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.animationDelay = `-${delay}s`; // Start immediately at random offset
        particle.style.animationDuration = `${duration}s`;

        particleContainer.appendChild(particle);
    }
}

// Initialize particles on load
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
});

// --- Mouse Interaction (Parallax) ---
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    // Move Orbs
    document.querySelectorAll('.orb').forEach((orb, index) => {
        const speed = (index + 1) * 20; // Different speeds
        const xOffset = (x - 0.5) * speed;
        const yOffset = (y - 0.5) * speed;
        orb.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });

    // Move Floating Shapes (Opposite direction for depth)
    document.querySelectorAll('.shape').forEach((shape, index) => {
        const speed = (index + 1) * 30;
        const xOffset = (0.5 - x) * speed;
        const yOffset = (0.5 - y) * speed;
        shape.style.transform = `translate(${xOffset}px, ${yOffset}px) rotate(${x * 360}deg)`;
    });
});

// --- Mobile Navigation Logic ---
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}
