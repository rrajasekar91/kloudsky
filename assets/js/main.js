/*=============================================================
    KloudSky Technologies
    Enterprise Website

    Main JavaScript
==============================================================*/


/*==============================================================
    Loader
==============================================================*/

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

        loader.style.transition = "0.8s";

    }

});


/*==============================================================
    Sticky Navigation
==============================================================*/

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 80) {

        navbar.style.background = "#071C3F";

        navbar.style.padding = "12px 0";

        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.15)";

    }

    else {

        navbar.style.background = "rgba(7,28,63,.95)";

        navbar.style.padding = "18px 0";

        navbar.style.boxShadow = "none";

    }

});


/*==============================================================
    Back To Top Button
==============================================================*/

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (!backToTop) return;

    if (window.scrollY > 500) {

        backToTop.style.display = "block";

    }

    else {

        backToTop.style.display = "none";

    }

});


if (backToTop) {

    backToTop.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/*==============================================================
    Active Navigation Highlight
==============================================================*/

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => {

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});


/*==============================================================
    Smooth Scroll
==============================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/*==============================================================
    Hero Card Hover Animation
==============================================================*/

const heroCard = document.querySelector(".hero-card");

if (heroCard) {

    heroCard.addEventListener("mouseenter", () => {

        heroCard.style.transform = "translateY(-10px)";

    });

    heroCard.addEventListener("mouseleave", () => {

        heroCard.style.transform = "translateY(0px)";

    });

}


/*==============================================================
    Card Hover Effect
==============================================================*/

const cards = document.querySelectorAll(

    ".feature-card, .service-card, .mini-card, .tech-card, .counter-box"

);

cards.forEach(card => {

    card.addEventListener("mouseenter", function () {

        this.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", function () {

        this.style.transform = "translateY(0px)";

    });

});


/*==============================================================
    Counter Animation
==============================================================*/

const counters = document.querySelectorAll(".counter-box h2");

let counterStarted = false;

function startCounter() {

    if (counterStarted) return;

    counterStarted = true;

    counters.forEach(counter => {

        const text = counter.innerText;

        const number = parseInt(text);

        if (isNaN(number)) return;

        let current = 0;

        const speed = Math.max(15, Math.floor(1500 / number));

        const timer = setInterval(() => {

            current++;

            counter.innerText = current + "+";

            if (current >= number) {

                clearInterval(timer);

                counter.innerText = text;

            }

        }, speed);

    });

}

window.addEventListener("scroll", () => {

    const section = document.querySelector(".counter-box");

    if (!section) return;

    const top = section.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

        startCounter();

    }

});


/*==============================================================
    Simple Fade-in Effect
==============================================================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {

    threshold: 0.15

});


document.querySelectorAll(

    ".feature-card, .service-card, .mini-card, .tech-card"

).forEach(item => {

    item.style.opacity = "0";

    item.style.transform = "translateY(40px)";

    item.style.transition = "0.8s ease";

    observer.observe(item);

});


/*==============================================================
    Footer Year (Future Ready)
==============================================================*/

const yearElement = document.getElementById("copyrightYear");

if (yearElement) {

    yearElement.innerText = new Date().getFullYear();

}


/*==============================================================
    Console Banner
==============================================================*/

console.log("%cKloudSky Technologies",

"color:#0066FF;font-size:20px;font-weight:bold;");

console.log("Enterprise Cloud & Infrastructure Consulting");

console.log("Website Version 1.0");


/*==============================================================
    End of File
==============================================================*/