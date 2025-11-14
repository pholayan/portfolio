// SCROLL REVEAL ANIMATION
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
    revealElements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// PARALLAX EFFECT
window.addEventListener("scroll", function () {
    const hero = document.querySelector('.hero');
    let offset = window.pageYOffset;
    hero.style.backgroundPositionY = offset * 0.4 + "px";
});
