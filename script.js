
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-item");

window.addEventListener("scroll", () => {
    let currentSectionId = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSectionId = section.getAttribute("id");
        }
    });

    navItems.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSectionId}`) {
            link.classList.add("active");
        }
    });
});

// TypeWriter
const words = [
    "Machine Learning Engineer",
    "Deep Learning Engineer",
    "Data Analyst",
    "Software Developer",
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing-text");

function typeEffect() {
    const currentWord = words[wordIndex];
    let displayText = currentWord.substring(0, charIndex);

    typingElement.textContent = displayText;

    if (!isDeleting) {
        if (charIndex < currentWord.length) {
            charIndex++;
            setTimeout(typeEffect, 100);
        } else {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
        }
    } else {
        if (charIndex > 0) {
            charIndex--;
            setTimeout(typeEffect, 50);
        } else {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeEffect, 500);
        }
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);


// Portfolio Filter
// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Portfolio Filter
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Update copyright year
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

// side bar 
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const navLinks = document.querySelectorAll(".sidebar-list .nav-item");

function toggleSidebar() {
    sidebar.classList.toggle("active");

    if (sidebar.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
}

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

