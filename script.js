// ==============================
// Smooth Scroll for Navigation
// ==============================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});


// ==============================
// Active Navigation on Scroll
// ==============================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ==============================
// Reveal Animation on Scroll
// ==============================

const revealElements = document.querySelectorAll(
    ".heading, .card, .project, .about-container, form"
);

function reveal() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(50px)";
    element.style.transition = "0.8s";

});

window.addEventListener("scroll", reveal);

reveal();


// ==============================
// Contact Form
// ==============================

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Thank you! Your message has been received.");

    form.reset();

});


// ==============================
// Typing Effect
// ==============================

const text = [
    "Frontend Developer",
    "Web Designer",
    "Python Developer",
    "JavaScript Developer",
    "Data Analysis",
    "Computer Science Student"
];

let index = 0;
let charIndex = 0;

// const heading = document.querySelector(".content h3");
const heading = document.getElementById("typing");
function typeEffect() {

    if (charIndex < text[index].length) {

        heading.textContent += text[index].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 100);

    }

    else {

        setTimeout(eraseEffect, 1500);

    }

}

function eraseEffect() {

    if (charIndex > 0) {

        heading.textContent = text[index].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect, 50);

    }

    else {

        index++;

        if (index >= text.length) {

            index = 0;

        }

        setTimeout(typeEffect, 300);

    }

}

heading.textContent = "";

typeEffect();