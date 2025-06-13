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
const skillIcons = {
    'C#': 'c-sharp-c.svg',
    'Postman': 'postman.svg',
    'Sql Server': 'file-type-sql.svg',
    'Postgresql': 'postgresql.svg',
};
const skillsElem = document.getElementById('skills');
skillsElem.innerHTML = '';

// ایجاد لایه بلوری برای حالت فول‌اسکرین کارت مهارت
let blurOverlay = document.createElement('div');
blurOverlay.className = 'skill-card-blur-overlay hide';
document.body.appendChild(blurOverlay);

let openedSkillCard = null;

skills.forEach(function (skill, i) {
    var card = document.createElement('div');
    card.className = 'skill-card flex flex-col items-center justify-center';
    card.style.animationDelay = (i * 0.13) + 's';
    card.style.background = 'linear-gradient(135deg, #312e81cc 60%, #7c3aedcc 100%)';
    card.style.backdropFilter = 'blur(10px)';
    card.style.borderRadius = '1.5rem';
    card.style.boxShadow = '0 0 32px 8px #a78bfa33, 0 2px 16px #0008';

    // ساختار داخلی کارت برای flip
    var cardInner = document.createElement('div');
    cardInner.className = 'skill-card-inner';

    // سمت جلو کارت
    var cardFront = document.createElement('div');
    cardFront.className = 'skill-card-front';
    // آیکون
    var icon;
    if (skillIcons[skill.name]) {
        icon = document.createElement('img');
        icon.src = skillIcons[skill.name];
        icon.alt = skill.name + ' icon';
        icon.className = 'skill-icon';
        icon.style.background = 'none';
        icon.style.width = '4rem';
        icon.style.height = '4rem';
        icon.style.objectFit = 'contain';
        icon.style.marginBottom = '1.1rem';
        icon.style.filter = 'drop-shadow(0 0 16px #a78bfa88)';
    } else {
        icon = document.createElement('i');
        icon.className = 'skill-icon ' + skill.icon;
        icon.style.color = skill.color;
    }
    cardFront.appendChild(icon);
    // نام مهارت
    var label = document.createElement('span');
    label.className = 'mt-4 text-xl';
    label.textContent = skill.name;
    cardFront.appendChild(label);

    // سمت پشت کارت
    var cardBack = document.createElement('div');
    cardBack.className = 'skill-card-back';
    let backText = '';
    switch (skill.name) {
        case 'C#':
            backText = `
                <b>C#</b> زبان اصلی من برای توسعه بک‌اند است. با این زبان پروژه‌هایی مثل <a href="https://github.com/alipowerful7/TaskManager" target="_blank">مدیریت تسک</a>، <a href="https://github.com/alipowerful7/Blogify" target="_blank">وبلاگ با خرید اشتراک</a> و <a href="https://github.com/alipowerful7/Commentino" target="_blank">کامنتینو</a> را توسعه داده‌ام. عاشق قدرت و انعطاف این زبان هستم!
            `;
            break;
        case 'Asp.Net':
            backText = `
                <b>Asp.Net</b> فریم‌ورک محبوب من برای ساخت API و وب‌اپلیکیشن‌های مقیاس‌پذیر است. نمونه کارها: <a href="https://github.com/alipowerful7/TaskManager" target="_blank">TaskManager</a>، <a href="https://github.com/alipowerful7/Blogify" target="_blank">Blogify</a> و <a href="https://github.com/alipowerful7/Commentino" target="_blank">Commentino</a>.<br>با معماری تمیز و امنیت بالا، پروژه‌هایم را توسعه می‌دهم.
            `;
            break;
        case 'Git':
            backText = `
                <b>Git</b> ابزار جدانشدنی من برای کنترل نسخه است. هر پروژه‌ای را با گیت مدیریت می‌کنم و عاشق شاخه‌بندی و همکاری تیمی هستم. نمونه کار: <a href="https://github.com/alipowerful7/TaskManager" target="_blank">TaskManager</a>.
            `;
            break;
        case 'Github':
            backText = `
                <b>Github</b> خانه پروژه‌های من است! کدهایم را اینجا به اشتراک می‌گذارم و از Pull Request و Issue برای توسعه بهتر استفاده می‌کنم.
            `;
            break;
        case 'Gitlab':
            backText = `
                <b>Gitlab</b> را برای پروژه‌های خصوصی و CI/CD حرفه‌ای انتخاب می‌کنم. تجربه کار با Gitlab CI و مدیریت پروژه‌های گروهی را دارم.
            `;
            break;
        case 'Docker':
            backText = `
                <b>Docker</b> را برای دپلوی سریع و ایزوله‌سازی محیط پروژه‌هایم استفاده می‌کنم. عاشق ساخت ایمیج‌های سفارشی و اجرای سرویس‌ها در کانتینر هستم. نمونه: <a href="https://github.com/alipowerful7/Commentino" target="_blank">Commentino Dockerized</a>
            `;
            break;
        case 'Postman':
            backText = `
                <b>Postman</b> ابزار مورد علاقه من برای تست و مستندسازی APIهاست. هر API جدیدی را با پست‌من تست می‌کنم و کالکشن‌های حرفه‌ای می‌سازم تا تیمم راحت‌تر تست کند.
            `;
            break;
        case 'Sql Server':
            backText = `
                <b>SQL Server</b> پایگاه داده‌ای است که برای پروژه‌های سازمانی و بزرگ استفاده می‌کنم. با طراحی جداول، کوئری‌های پیچیده و بهینه‌سازی عملکرد آشنایی کامل دارم. نمونه: <a href="https://github.com/alipowerful7/TaskManager" target="_blank">TaskManager DB</a>
            `;
            break;
        case 'Postgresql':
            backText = `
                <b>PostgreSQL</b> را برای پروژه‌های متن‌باز و مقیاس‌پذیر انتخاب می‌کنم. تجربه کار با JSONB، توابع پیشرفته و توسعه APIهای سریع با این دیتابیس را دارم.
            `;
            break;
        default:
            backText = `تجربه و علاقه من به این مهارت باعث شده پروژه‌های جذابی بسازم!`;
    }
    cardBack.innerHTML = `<button class="skill-card-close" title="بستن">&times;</button><div style="margin-top:2.5rem;">${backText}</div>`;

    // اضافه کردن ساختار flip
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);

    // افکت هاور شبیه دکمه رزومه و کارت ارتباط
    card.addEventListener('mouseenter', function () {
        if (card.classList.contains('flipped')) return;
        card.style.background = 'linear-gradient(120deg, #7c3aed 0%, #312e81 100%)';
        card.style.boxShadow = '0 0 64px 24px #a78bfaee, 0 0 0 8px #fff2';
        card.style.transform = 'scale(1.13) rotate(-3deg) translateY(-10px)';
        card.style.filter = 'brightness(1.18) drop-shadow(0 0 32px #a78bfa)';
        icon.style.transform = 'scale(1.13) rotate(8deg)';
        icon.style.filter = 'drop-shadow(0 0 32px #fff) brightness(1.3)';
        label.style.color = '#fff';
        label.style.textShadow = '0 2px 16px #a78bfa, 0 0 8px #fff';
    });
    card.addEventListener('mouseleave', function () {
        if (card.classList.contains('flipped')) return;
        card.style.background = 'linear-gradient(135deg, #312e81cc 60%, #7c3aedcc 100%)';
        card.style.boxShadow = '0 0 32px 8px #a78bfa33, 0 2px 16px #0008';
        card.style.transform = '';
        card.style.filter = '';
        icon.style.transform = '';
        icon.style.filter = 'drop-shadow(0 0 16px #a78bfa88)';
        label.style.color = '';
        label.style.textShadow = '';
    });

    // کلیک برای flip و فول‌اسکرین
    card.addEventListener('click', function (e) {
        if (card.classList.contains('flipped')) return;
        if (openedSkillCard) return;
        card.classList.add('flipped');
        blurOverlay.classList.remove('hide');
        openedSkillCard = card;
        document.body.style.overflow = 'hidden';
    });

    // دکمه بستن پشت کارت
    cardBack.querySelector('.skill-card-close').addEventListener('click', function (e) {
        e.stopPropagation();
        card.classList.remove('flipped');
        // تا پایان انیمیشن flip، محتوای کارت جلو را مخفی کن
        cardInner.style.visibility = 'hidden';
        blurOverlay.classList.add('hide');
        openedSkillCard = null;
        document.body.style.overflow = '';
        setTimeout(function () {
            cardInner.style.visibility = '';
        }, 700); // مدت زمان flip در CSS
    });

    skillsElem.appendChild(card);
});

// کلیک روی لایه بلوری برای بستن کارت
// این بخش حذف یا غیرفعال می‌شود تا فقط با ضربدر کارت بسته شود
// blurOverlay.addEventListener('click', function () {
//     if (openedSkillCard) {
//         openedSkillCard.classList.remove('flipped');
//         // تا پایان انیمیشن flip، محتوای کارت جلو را مخفی کن (مثل ضربدر)
//         var cardInner = openedSkillCard.querySelector('.skill-card-inner');
//         if (cardInner) cardInner.style.visibility = 'hidden';
//         blurOverlay.classList.add('hide');
//         document.body.style.overflow = '';
//         setTimeout(function () {
//             if (cardInner) cardInner.style.visibility = '';
//             openedSkillCard = null;
//         }, 700); // مدت زمان flip در CSS
//     }
// });

// ستاره‌های پس‌زمینه کهکشانی متحرک با حرکت بسیار نرم و روان و بدون لگ
let lastStarFrame = 0;
let starAnimationFrameId = null;
let galaxyStars = [];
function animateStars(now) {
    if (!lastStarFrame) lastStarFrame = now;
    var delta = (now - lastStarFrame) / 1000;
    lastStarFrame = now;
    for (let i = 0; i < galaxyStars.length; i++) {
        const star = galaxyStars[i];
        var baseSpeed = 0.08 + (i % 7) * 0.12;
        var angle = star.angle;
        angle += baseSpeed * delta;
        if (angle > 360) angle -= 360;
        var radius = star.radius;
        var cx = star.cx;
        var cy = star.cy;
        var x = cx + Math.cos(angle * Math.PI / 180) * radius;
        var y = cy + Math.sin(angle * Math.PI / 180) * radius;
        star.el.style.left = (x % 100) + '%';
        star.el.style.top = (y % 100) + '%';
        star.angle = angle;
    }
    starAnimationFrameId = requestAnimationFrame(animateStars);
}
function createStars(num) {
    var galaxy = document.getElementById('galaxy-bg');
    galaxyStars = [];
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
        galaxy.appendChild(star);
        galaxyStars.push({el: star, angle, radius, cx, cy});
    }
}
// تعداد ستاره‌ها را کاهش می‌دهیم تا سایت سریع‌تر شود
createStars(50);
if (starAnimationFrameId) cancelAnimationFrame(starAnimationFrameId);
starAnimationFrameId = requestAnimationFrame(animateStars);

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

// انیمیشن fade-in بخش‌ها هنگام اسکرول
function revealSectionsOnScroll() {
    const sections = document.querySelectorAll('.section-fade');
    const trigger = window.innerHeight * 0.92;
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < trigger) {
            section.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', revealSectionsOnScroll);
window.addEventListener('DOMContentLoaded', revealSectionsOnScroll);