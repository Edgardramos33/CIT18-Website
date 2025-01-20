document.querySelectorAll('.progress-bar').forEach(function(bar) {
    let progress = bar.getAttribute('data-progress');
    bar.style.width = progress;
});

const titleElement = document.querySelector('.main-title h1');
const titleText = "CIT18 Portfolio";
let index = 0;

function typeEffect() {
    if (index < titleText.length) {
        titleElement.textContent += titleText.charAt(index);
        index++;
        setTimeout(typeEffect, 200);
    }
}

typeEffect();

const sections = document.querySelectorAll('.about-me, .education, .experience, .skills, .projects, .contact');

function revealOnScroll() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 150) {
            section.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);


revealOnScroll();
