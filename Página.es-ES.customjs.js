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

    '.info-card, .dashboard-card, .area-card'

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
// DOCUMENT SEARCH FILTER
// =========================================

const searchInput =
    document.querySelector('.document-search input');

if(searchInput){

    searchInput.addEventListener('keyup', () => {

        const value =
            searchInput.value.toLowerCase();

        const documents =
            document.querySelectorAll('.document-item');

        documents.forEach((doc) => {

            const text =
                doc.innerText.toLowerCase();

            if(text.includes(value)){

                doc.style.display = 'flex';

            }

            else{

                doc.style.display = 'none';

            }

        });

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
// OPEN DASHBOARD
// =========================================

function openDashboard(){

    const overlay =
        document.getElementById(

            'dashboardOverlay'

        );

    if(overlay){
        overlay.style.display =
            'flex';
    }

    document.body.style.overflow =
        'hidden';
}

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

// Ejecutar (script se carga con defer)
renderDocuments();

function openDashboard(){

    const overlay =
        document.getElementById(

            'dashboardOverlay'

        );

    overlay.style.display =
        'flex';

    document.body.style.overflow =
        'hidden';
}

function closeDashboard(){

    const overlay =
        document.getElementById(

            'dashboardOverlay'

        );

    overlay.style.display =
        'none';

    document.body.style.overflow =
        'auto';
}

console.log("JS RUNNING");





