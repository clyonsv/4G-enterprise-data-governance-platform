// =========================================
// SCROLL ANIMATIONS
// =========================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add('show-element');

        }

    });

}, {

    threshold:0.15

});


// =========================================
// ELEMENTS TO ANIMATE
// =========================================

const hiddenElements = document.querySelectorAll(

    '.info-card, .dashboard-card, .document-item, .area-card'

);


hiddenElements.forEach((el) => {

    el.classList.add('hidden-element');

    observer.observe(el);

});


// =========================================
// PREMIUM HOVER EFFECT
// =========================================

const cards = document.querySelectorAll(

    '.info-card, .dashboard-card'

);


cards.forEach(card => {

    card.addEventListener('mousemove', (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;


        card.style.background = `

            radial-gradient(

                circle at ${x}px ${y}px,

                rgba(29,161,255,0.18),

                rgba(255,255,255,0.05)

            )

        `;

    });


    card.addEventListener('mouseleave', () => {

        card.style.background = 'rgba(255,255,255,0.05)';

    });

});


// =========================================
// NAVBAR SCROLL EFFECT
// =========================================

window.addEventListener('scroll', () => {

    const navbar =
        document.querySelector('.navbar');

    if(!navbar) return;

    if(window.scrollY > 50){

        navbar.style.background =
            'rgba(5,10,20,0.92)';

        navbar.style.borderBottom =
            '1px solid rgba(29,161,255,0.2)';
    }

    else{

        navbar.style.background =
            'rgba(10,15,25,0.7)';

        navbar.style.borderBottom =
            '1px solid rgba(255,255,255,0.08)';
    }

});

// =========================================
// HERO BUTTON EFFECT
// =========================================

const primaryButton =
    document.querySelector('.btn-primary');

if(primaryButton){

    primaryButton.addEventListener('mouseenter', () => {

        primaryButton.style.boxShadow =
            '0 0 40px rgba(29,161,255,0.5)';

    });

    primaryButton.addEventListener('mouseleave', () => {

        primaryButton.style.boxShadow = 'none';

    });

}


// =========================================
// DOCUMENT SEARCH FILTER (with no-results placeholder)
// =========================================

const searchInput = document.querySelector('.document-search input');

if(searchInput){

    searchInput.addEventListener('keyup', () => {

        const value = (searchInput.value || '').toLowerCase().trim();

        const documents = document.querySelectorAll('.document-item');

        let anyVisible = false;

        documents.forEach((doc) => {

            const text = doc.innerText.toLowerCase();

            if(value === '' || text.includes(value)){

                doc.style.display = 'flex';
                anyVisible = true;

            } else {

                doc.style.display = 'none';

            }

        });

        const container = document.getElementById('documentsList') || document.querySelector('.documents-list');
        if(!container) return;

        const existing = container.querySelector('.no-results');
        if(existing) existing.remove();

        if(!anyVisible){
            const no = document.createElement('div');
            no.className = 'no-results';
            no.style.display = 'flex';
            no.style.flexDirection = 'column';
            no.style.alignItems = 'center';
            no.style.justifyContent = 'center';
            no.style.padding = '24px';
            no.style.color = 'rgba(255,255,255,0.9)';
            no.style.gap = '12px';

            const img = document.createElement('img');
            img.src = 'icons/no-result.svg';
            img.alt = 'no results';
            img.style.width = '64px';
            img.style.height = '64px';

            const msg = document.createElement('div');
            msg.innerText = value ? `No results found for "${value}"` : 'No results found';
            msg.style.fontSize = '16px';
            msg.style.opacity = '0.95';

            no.appendChild(img);
            no.appendChild(msg);

            container.appendChild(no);
        }

    });

}


// =========================================
// SMOOTH BUTTON CLICK EFFECT
// =========================================

const buttons =
    document.querySelectorAll('button');

buttons.forEach((button) => {

    button.addEventListener('click', () => {

        button.style.transform = 'scale(0.96)';

        setTimeout(() => {

            button.style.transform = 'scale(1)';

        }, 120);

    });

});

// =========================================
// PARALLAX EFFECT
// =========================================

document.addEventListener('mousemove', (e) => {

    const x =
        (window.innerWidth / 2 - e.clientX) / 40;

    const y =
        (window.innerHeight / 2 - e.clientY) / 40;

    const floatingCards =
        document.querySelectorAll('.floating-card');

    floatingCards.forEach((card, index) => {

        const speed = (index + 1) * 0.4;

        card.style.transform = `

            translate(
                ${x * speed}px,
                ${y * speed}px
            )

        `;

    });

});


// =========================================
// HERO TEXT REVEAL
// =========================================

window.addEventListener('load', () => {

    const heroTitle =
        document.querySelector('.hero h1');

    const heroText =
        document.querySelector('.hero p');

    const heroButtons =
        document.querySelector('.hero-buttons');

    if(heroTitle){

        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(40px)';

        setTimeout(() => {

            heroTitle.style.transition =
                '1.2s ease';

            heroTitle.style.opacity = '1';

            heroTitle.style.transform =
                'translateY(0px)';

        }, 300);

    }

    if(heroText){

        heroText.style.opacity = '0';

        setTimeout(() => {

            heroText.style.transition =
                '1.4s ease';

            heroText.style.opacity = '1';

        }, 900);

    }

    if(heroButtons){

        heroButtons.style.opacity = '0';

        setTimeout(() => {

            heroButtons.style.transition =
                '1.4s ease';

            heroButtons.style.opacity = '1';

        }, 1400);

    }

});


// =========================================
// FLOATING PARTICLES
// =========================================

function createParticle(){

    const particle =
        document.createElement('div');

    particle.classList.add('particle');

    document.body.appendChild(particle);

    const size =
        Math.random() * 6 + 2;

    particle.style.width =
        `${size}px`;

    particle.style.height =
        `${size}px`;

    particle.style.left =
        `${Math.random() * window.innerWidth}px`;

    particle.style.animationDuration =
        `${Math.random() * 12 + 8}s`;

    particle.style.opacity =
        Math.random();

    setTimeout(() => {

        particle.remove();

    }, 20000);

}

setInterval(createParticle, 50);


// =========================================
// COUNTER ANIMATION
// =========================================

const counters =
    document.querySelectorAll('.card-value');

counters.forEach(counter => {

    const target =
        parseFloat(counter.innerText);

    if(!isNaN(target)){

        let count = 0;

        const increment =
            target / 60;

        const updateCounter = () => {

            count += increment;

            if(count < target){

                counter.innerText =
                    count.toFixed(1);

                requestAnimationFrame(updateCounter);

            }

            else{

                counter.innerText = target;
            }

        };

        updateCounter();

    }

});


// =========================================
// SCROLL DEPTH EFFECT
// =========================================

window.addEventListener('scroll', () => {

    const scroll =
        window.scrollY;

    document.body.style.backgroundPositionY =
        `${scroll * 0.2}px`;

});


// =========================================
// DASHBOARD CARD GLOW
// =========================================

const dashboardCards =
    document.querySelectorAll('.dashboard-card');

dashboardCards.forEach(card => {

    card.addEventListener('mouseenter', () => {

        card.style.boxShadow = `

            0 20px 60px rgba(0,0,0,0.5),

            0 0 40px rgba(29,161,255,0.35)

        `;

    });

    card.addEventListener('mouseleave', () => {

        card.style.boxShadow = `

            0 10px 40px rgba(0,0,0,0.4)

        `;

    });

});

// =========================================
// CURSOR GLOW
// =========================================

const cursorGlow =
    document.querySelector('.cursor-glow');

if(cursorGlow){

    document.addEventListener('mousemove', (e) => {

        cursorGlow.style.left =
            `${e.clientX}px`;

        cursorGlow.style.top =
            `${e.clientY}px`;

    });

}


// =========================================
// DEPTH HOVER EFFECT
// =========================================

const premiumCards =
    document.querySelectorAll(

        '.info-card, .dashboard-card, .analytics-card'

    );

premiumCards.forEach(card => {

    card.addEventListener('mousemove', (e) => {

        const rect =
            card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((y - centerY) / 20);

        const rotateY =
            ((centerX - x) / 20);

        card.style.transform = `

            perspective(1000px)

            rotateX(${rotateX}deg)

            rotateY(${rotateY}deg)

            translateY(-8px)

        `;

    });

    card.addEventListener('mouseleave', () => {

        card.style.transform = `

            perspective(1000px)

            rotateX(0deg)

            rotateY(0deg)

            translateY(0px)

        `;

    });

});

// =========================================
// ACTIVE SIDEBAR SECTION
// =========================================

const sections =
    document.querySelectorAll('section');

const navItems =
    document.querySelectorAll('.sidebar-item');

window.addEventListener('scroll', () => {

    let current = '';

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop;

        if(window.scrollY >= sectionTop - 200){

            current =
                section.getAttribute('id');

        }

    });

    navItems.forEach(item => {

        item.classList.remove('active');

        if(

            item.getAttribute('href')
            .includes(current)

        ){

            item.classList.add('active');

        }

    });

});

// =========================================
// ACTIVE SECTION EFFECT
// =========================================

const animatedSections =
    document.querySelectorAll('.section');

const sectionObserver =
    new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList
                    .add('active-section');

            }

        });

    }, {

        threshold:0.2

    });

animatedSections.forEach(section => {

    sectionObserver.observe(section);

});


// =========================================
// MAGNETIC BUTTON EFFECT
// =========================================

const magneticButtons =
    document.querySelectorAll('button');

magneticButtons.forEach(button => {

    button.addEventListener('mousemove', (e) => {

        const rect =
            button.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const moveX =
            (x - rect.width / 2) / 8;

        const moveY =
            (y - rect.height / 2) / 8;

        button.style.transform = `

            translate(${moveX}px, ${moveY}px)

        `;

    });

    button.addEventListener('mouseleave', () => {

        button.style.transform =
            'translate(0px,0px)';

    });

});

// =========================================
// LIVE CLOCK
// =========================================

function updateClock(){

    const clock =
        document.querySelector('.live-clock');

    if(clock){

        const now =
            new Date();

        clock.innerText =
            now.toLocaleTimeString([], {

                hour:'2-digit',
                minute:'2-digit'

            });

    }

}

setInterval(updateClock, 1000);

updateClock();


// =========================================
// CLOSE DASHBOARD
// =========================================

function closeDashboard(){

    const overlay =
        document.getElementById(

            'dashboardOverlay'

        );

    if(overlay){
        overlay.style.display =
            'none';
    }

    document.body.style.overflow =
        'auto';
}

let pageData = null;

async function getPageData(){
    if(pageData) return pageData;
    try{
        const resp = await fetch('data.json');
        if(!resp.ok) return {};
        pageData = await resp.json();
    } catch(err){
        console.error('getPageData error', err);
        pageData = {};
    }
    return pageData;
}

function openDashboard(url, title){
    const overlay =
        document.getElementById(

            'dashboardOverlay'

        );
    const titleEl = document.querySelector('.overlay-title');
    const frame = document.querySelector('.powerbi-frame');

    if(titleEl){
        titleEl.innerText = title || 'Executive Analytics Dashboard';
    }

    if(frame && url){
        frame.src = url;
    }

    if(overlay){
        overlay.style.display =
            'flex';
    }

    document.body.style.overflow =
        'hidden';
}

function createBisCard(item){
    const card = document.createElement('div');
    card.className = 'dashboard-card';
    if(item.id){
        card.id = `bis-${item.id}`;
        card.dataset.id = item.id;
    }

    const heading = document.createElement('h3');
    heading.innerText = item.title || 'BI Report';

    const description = document.createElement('p');
    description.innerText = item.description || 'Power BI report';

    const btn = document.createElement('button');
    btn.innerText = 'Open Dashboard';
    if(item.id){
        btn.dataset.biId = item.id;
    }
    btn.addEventListener('click', () => {
        if(item['bi-url']){
            openDashboard(item['bi-url'], item.title || 'BI Dashboard');
        }
    });

    card.appendChild(heading);
    card.appendChild(description);
    card.appendChild(btn);

    return card;
}

async function showBusinessItems(areaId, areaName){
    const data = await getPageData();
    const items = (data.bis || []).filter(item => item['area-of-business'] === areaId);
    const areasGrid = document.getElementById('areasGrid');
    const bisGrid = document.getElementById('bisGrid');
    const backBtn = document.getElementById('areasBackButton');

    if(!areasGrid || !bisGrid || !backBtn) return;

    areasGrid.style.display = 'none';
    bisGrid.style.display = 'grid';
    bisGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(280px, 1fr))';
    bisGrid.style.gap = '30px';
    bisGrid.innerHTML = '';
    backBtn.style.display = 'inline-flex';

    if(items.length === 0){
        const no = document.createElement('div');
        no.className = 'no-results';
        no.style.display = 'flex';
        no.style.flexDirection = 'column';
        no.style.alignItems = 'center';
        no.style.justifyContent = 'center';
        no.style.padding = '24px';
        no.style.color = 'rgba(255,255,255,0.9)';
        no.style.gap = '12px';

        const img = document.createElement('img');
        img.src = 'icons/no-result.svg';
        img.alt = 'no results';
        img.style.width = '64px';
        img.style.height = '64px';

        const msg = document.createElement('div');
        msg.innerText = `No BI available for ${areaName}`;
        msg.style.fontSize = '16px';
        msg.style.opacity = '0.95';

        no.appendChild(img);
        no.appendChild(msg);
        bisGrid.appendChild(no);
        return;
    }

    items.forEach(item => bisGrid.appendChild(createBisCard(item)));
}

function resetAreaView(){
    const areasGrid = document.getElementById('areasGrid');
    const bisGrid = document.getElementById('bisGrid');
    const backBtn = document.getElementById('areasBackButton');

    if(areasGrid) areasGrid.style.display = 'grid';
    if(bisGrid){
        bisGrid.style.display = 'none';
        bisGrid.innerHTML = '';
    }
    if(backBtn) backBtn.style.display = 'none';
}

const areasBackButton = document.getElementById('areasBackButton');
if(areasBackButton){
    areasBackButton.addEventListener('click', resetAreaView);
}

// =========================================
// DASHBOARD OVERLAY
// =========================================

// =========================================
// RENDER GOVERNANCE DOCUMENTS FROM data.json
// =========================================

async function renderDocuments(){
    try{
        const resp = await fetch('data.json');
        if(!resp.ok) return;
        const data = await resp.json();
        const iconsMap = data.icons || {};
        const docs = data['governance-documents'] || [];
        const container = document.getElementById('documentsList') || document.querySelector('.documents-list');
        if(!container) return;
        container.innerHTML = '';

        docs.forEach(doc => {
            const item = document.createElement('div');
            item.className = 'document-item';
            if(doc.id){
                item.id = `document-${doc.id}`;
                item.dataset.id = doc.id;
            }

            const left = document.createElement('div');
            left.style.display = 'flex';
            left.style.alignItems = 'center';
            left.style.gap = '12px';

            const iconKey = doc.icon;
            const iconFile = iconsMap[iconKey] || '';
            const img = document.createElement('img');
            if(iconFile){
                img.src = `icons/${iconFile}`;
            }
            img.alt = iconKey || '';
            img.style.width = '28px';
            img.style.height = '28px';
            img.style.objectFit = 'contain';

            const text = document.createElement('div');
            const h4 = document.createElement('h4');
            h4.innerText = doc.title || '';
            const span = document.createElement('span');
            span.innerText = doc.description || '';
            text.appendChild(h4);
            text.appendChild(span);

            left.appendChild(img);
            left.appendChild(text);

            const btn = document.createElement('button');
            btn.innerText = 'Abrir';
            if(doc.id){
                btn.dataset.documentId = doc.id;
            }
            btn.addEventListener('click', () => {
                if(doc.url) window.open(doc.url, '_blank');
            });

            item.appendChild(left);
            item.appendChild(btn);

            container.appendChild(item);
        });

    } catch(err){
        console.error('renderDocuments error', err);
    }
}

async function renderAreas(){
    try{
        const resp = await fetch('data.json');
        if(!resp.ok) return;
        const data = await resp.json();
        const areas = data['areas-of-business'] || data['area-of-business'] || [];
        const container = document.getElementById('areasGrid') || document.querySelector('.areas-grid');
        if(!container) return;

        container.innerHTML = '';

        areas.forEach(area => {
            const item = document.createElement('div');
            item.className = 'area-card';
            item.style.backgroundImage = `url('${area['image-url'] || ''}')`;
            item.style.backgroundSize = 'cover';
            item.style.backgroundPosition = 'center';
            item.style.backgroundRepeat = 'no-repeat';
            item.style.minHeight = '260px';
            item.style.position = 'relative';
            item.style.cursor = 'pointer';

            const overlay = document.createElement('div');
            overlay.className = 'area-card-overlay';
            overlay.style.position = 'absolute';
            overlay.style.inset = '0';
            overlay.style.background = 'linear-gradient(180deg, rgba(0,0,0,0.16), rgba(0,0,0,0.72))';
            overlay.style.pointerEvents = 'none';

            const title = document.createElement('h3');
            title.innerText = area.name || area.title || '';
            title.style.position = 'relative';
            title.style.zIndex = '1';
            title.style.color = 'white';
            title.style.margin = '0';
            title.style.padding = '24px';
            title.style.fontSize = '26px';

            item.appendChild(overlay);
            item.appendChild(title);
            item.addEventListener('click', () => showBusinessItems(area.id, area.name || area.title || 'Business Area'));
            container.appendChild(item);
        });

    } catch(err){
        console.error('renderAreas error', err);
    }
}

// Ejecutar (script se carga con defer)
renderDocuments();
renderAreas();





