// انیمیشن تایپ
const typewriterTexts = [
    'برنامه‌نویس بک‌اند',
    'علاقه‌مند به تکنولوژی',
    'توسعه‌دهنده Asp.net',
    'عاشق یادگیری',
    'علاقه‌مند به حل چالش‌ها',
];
let typeIndex = 0, charIndex = 0, isDeleting = false;
const typewriterElem = document.getElementById('typewriter');
function typeWriter() {
    const current = typewriterTexts[typeIndex];
    if (isDeleting) {
        charIndex--;
        if (charIndex <= 0) {
            isDeleting = false;
            typeIndex = (typeIndex + 1) % typewriterTexts.length;
        }
    } else {
        charIndex++;
        if (charIndex === current.length) {
            isDeleting = true;
            setTimeout(typeWriter, 1200);
            typewriterElem.textContent = current;
            return;
        }
    }
    typewriterElem.textContent = current.substring(0, charIndex);
    setTimeout(typeWriter, isDeleting ? 40 : 90);
}
typeWriter();

// مهارت‌ها با آیکون و انیمیشن الهام‌گرفته از کارت‌های ارتباط و دکمه رزومه
const skills = [
    { name: 'C#', icon: 'fa-solid fa-code', color: '#9b4f96' },
    { name: 'Asp.Net', icon: 'fa-brands fa-microsoft', color: '#512bd4' },
    { name: 'Git', icon: 'fa-brands fa-git-alt', color: '#f34f29' },
    { name: 'Github', icon: 'fa-brands fa-github', color: '#fff' },
    { name: 'Gitlab', icon: 'fa-brands fa-gitlab', color: '#fc6d26' },
    { name: 'Docker', icon: 'fa-brands fa-docker', color: '#2496ed' },
    { name: 'Postman', icon: 'fa-solid fa-flask', color: '#ff6c37' },
    { name: 'Sql Server', icon: 'fa-solid fa-database', color: '#FFD700' },
    { name: 'Postgresql', icon: 'fa-solid fa-database', color: '#336791' },
];
const skillsElem = document.getElementById('skills');
skillsElem.innerHTML = '';

skills.forEach(function (skill, i) {
    var card = document.createElement('div');
    card.className = 'skill-card flex flex-col items-center justify-center';
    card.style.animationDelay = (i * 0.13) + 's';
    // گرادینت و شیشه‌ای شبیه کارت ارتباط
    card.style.background = 'linear-gradient(135deg, #312e81cc 60%, #7c3aedcc 100%)';
    card.style.backdropFilter = 'blur(10px)';
    card.style.borderRadius = '1.5rem';
    card.style.boxShadow = '0 0 32px 8px #a78bfa33, 0 2px 16px #0008';
    // آیکون
    var icon = document.createElement('i');
    icon.className = 'skill-icon ' + skill.icon;
    icon.style.color = skill.color;
    card.appendChild(icon);
    // نام مهارت
    var label = document.createElement('span');
    label.className = 'mt-4 text-xl';
    label.textContent = skill.name;
    card.appendChild(label);
    // افکت هاور شبیه دکمه رزومه و کارت ارتباط
    card.addEventListener('mouseenter', function () {
        card.style.background = 'linear-gradient(120deg, #7c3aed 0%, #312e81 100%)';
        card.style.boxShadow = '0 0 64px 24px #a78bfaee, 0 0 0 8px #fff2';
        card.style.transform = 'scale(1.13) rotate(-3deg) translateY(-10px)';
        card.style.filter = 'brightness(1.18) drop-shadow(0 0 32px #a78bfa)';
        icon.style.transform = 'scale(1.25) rotate(8deg)';
        icon.style.filter = 'drop-shadow(0 0 32px #fff) brightness(1.3)';
        label.style.color = '#fff';
        label.style.textShadow = '0 2px 16px #a78bfa, 0 0 8px #fff';
    });
    card.addEventListener('mouseleave', function () {
        card.style.background = 'linear-gradient(135deg, #312e81cc 60%, #7c3aedcc 100%)';
        card.style.boxShadow = '0 0 32px 8px #a78bfa33, 0 2px 16px #0008';
        card.style.transform = '';
        card.style.filter = '';
        icon.style.transform = '';
        icon.style.filter = '';
        label.style.color = '';
        label.style.textShadow = '';
    });
    skillsElem.appendChild(card);
});

// ستاره‌های پس‌زمینه کهکشانی متحرک با حرکت بسیار نرم و روان و بدون لگ
let lastStarFrame = 0;
function animateStars(now) {
    if (!lastStarFrame) lastStarFrame = now;
    var delta = (now - lastStarFrame) / 1000; // ثانیه
    lastStarFrame = now;
    var stars = document.querySelectorAll('.star');
    stars.forEach(function (star, i) {
        // سرعت هر ستاره ثابت و بسیار کم برای روانی بیشتر
        var baseSpeed = 0.08 + (i % 7) * 0.12; // درجه بر ثانیه
        var angle = parseFloat(star.getAttribute('data-angle')) || Math.random() * 360;
        angle += baseSpeed * delta;
        if (angle > 360) angle -= 360;
        var radius = parseFloat(star.getAttribute('data-radius')) || (Math.random() * 40 + 10);
        var cx = parseFloat(star.getAttribute('data-cx')) || (Math.random() * 100);
        var cy = parseFloat(star.getAttribute('data-cy')) || (Math.random() * 100);
        var x = cx + Math.cos(angle * Math.PI / 180) * radius;
        var y = cy + Math.sin(angle * Math.PI / 180) * radius;
        star.style.left = (x % 100) + '%';
        star.style.top = (y % 100) + '%';
        star.setAttribute('data-angle', angle);
        star.setAttribute('data-radius', radius);
        star.setAttribute('data-cx', cx);
        star.setAttribute('data-cy', cy);
    });
    requestAnimationFrame(animateStars);
}

function createStars(num) {
    var galaxy = document.getElementById('galaxy-bg');
    for (var i = 0; i < num; i++) {
        var star = document.createElement('div');
        star.className = 'star';
        var size = Math.random() * 2 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        var cx = Math.random() * 100;
        var cy = Math.random() * 100;
        var radius = Math.random() * 40 + 10;
        var angle = Math.random() * 360;
        var x = cx + Math.cos(angle) * radius;
        var y = cy + Math.sin(angle) * radius;
        star.style.left = (x % 100) + '%';
        star.style.top = (y % 100) + '%';
        star.style.opacity = (Math.random() * 0.7 + 0.3);
        star.style.boxShadow = '0 0 ' + (Math.random() * 12 + 4) + 'px ' + (Math.random() * 2) + 'px #fff8';
        star.setAttribute('data-angle', angle);
        star.setAttribute('data-radius', radius);
        star.setAttribute('data-cx', cx);
        star.setAttribute('data-cy', cy);
        galaxy.appendChild(star);
    }
}
createStars(120);
requestAnimationFrame(animateStars);

// کارت‌های ارتباطی
(function () {
    const contactCards = [
        {
            label: 'گیت‌هاب',
            icon: 'fa-brands fa-github',
            link: 'https://github.com/alipowerful7',
            text: 'github.com/alipowerful7',
            color: '#fff',
        },
        {
            label: 'گیت‌لب',
            icon: 'fa-brands fa-gitlab',
            link: 'https://gitlab.com/alipowerful7',
            text: 'gitlab.com/alipowerful7',
            color: '#fc6d26',
        },
        {
            label: 'تلگرام',
            icon: 'fa-brands fa-telegram',
            link: 'https://t.me/ali_powerful7',
            text: '@ali_powerful7',
            color: '#229ed9',
        },
        {
            label: 'جیمیل',
            icon: 'fa-solid fa-envelope',
            link: 'https://mail.google.com/mail/?view=cm&fs=1&to=ali7.khosrojerdi@gmail.com',
            text: 'ali7.khosrojerdi@gmail.com',
            color: '#ea4335',
        },
    ];
    window.addEventListener('DOMContentLoaded', function () {
        const contactCardsElem = document.getElementById('contact-cards');
        if (contactCardsElem) {
            contactCards.forEach(function (card, i) {
                var el = document.createElement('div');
                el.className = 'contact-card flex flex-col items-center justify-center';
                el.style.animationDelay = (i * 0.18) + 's';
                var icon = document.createElement('i');
                icon.className = 'contact-icon ' + card.icon;
                icon.style.color = card.color;
                el.appendChild(icon);
                var label = document.createElement('div');
                label.className = 'contact-label';
                label.textContent = card.label;
                el.appendChild(label);
                var link = document.createElement('a');
                link.className = 'contact-link';
                link.href = card.link;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                link.textContent = card.text;
                el.appendChild(link);
                contactCardsElem.appendChild(el);
            });
        }
    });
})();