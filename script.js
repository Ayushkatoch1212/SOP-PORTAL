/* ===============================
   SCROLL PROGRESS BAR
================================= */
window.addEventListener("scroll", () => {
    const progressBar = document.getElementById("progressBar");

    const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrollPercent = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = scrollPercent + "%";
});


/* ===============================
   TIMELINE ACCORDION
================================= */
const accordionItems = document.querySelectorAll(".accordion");

accordionItems.forEach((item) => {
    const paragraph = item.querySelector("p");

    // Hide all content initially except first
    if (item !== accordionItems[0]) {
        paragraph.style.display = "none";
    }

    item.style.cursor = "pointer";

    item.addEventListener("click", () => {
        const isVisible = paragraph.style.display === "block";

        // Close all
        accordionItems.forEach((acc) => {
            const p = acc.querySelector("p");
            p.style.display = "none";
        });

        // Open clicked if closed
        if (!isVisible) {
            paragraph.style.display = "block";
        }
    });
});


/* ===============================
   LIVE SEARCH FILTER
================================= */
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {
    const searchValue = searchInput.value.toLowerCase();

    // Search cards
    const searchableSections = document.querySelectorAll(".searchable");

    searchableSections.forEach((section) => {
        const children = section.children;

        Array.from(children).forEach((child) => {
            const text = child.textContent.toLowerCase();

            if (text.includes(searchValue)) {
                child.classList.remove("hidden");
            } else {
                child.classList.add("hidden");
            }
        });
    });
});


/* ===============================
   SCROLL REVEAL ANIMATION
================================= */
const revealElements = document.querySelectorAll(
    ".glass-card, .timeline-item, .progress-card, .check-item, .table-wrapper"
);

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach((element) => {
        const top = element.getBoundingClientRect().top;

        if (top < windowHeight - 100) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }
    });
};

// Initial hidden state
revealElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "all 0.7s ease";
});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


/* ===============================
   ACTIVE NAV LINK ON SCROLL
================================= */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});


/* ===============================
   ANNEXURE CARD CLICK EFFECT
================================= */
const annexCards = document.querySelectorAll(".annex-card");

annexCards.forEach((card) => {
    card.addEventListener("click", () => {
        card.style.transform = "scale(0.96)";

        setTimeout(() => {
            card.style.transform = "scale(1)";
        }, 150);
    });
});


/* ===============================
   SMOOTH HOVER GLOW (CARDS)
================================= */
const cards = document.querySelectorAll(".glass-card");

cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background = `
            radial-gradient(circle at ${x}px ${y}px,
            rgba(255,255,255,0.16),
            rgba(255,255,255,0.08))
        `;
    });

    card.addEventListener("mouseleave", () => {
        card.style.background = "rgba(255,255,255,0.08)";
    });
});


/* ===============================
   HERO BUTTON FLOAT EFFECT
================================= */
const heroButtons = document.querySelectorAll(".btn");

heroButtons.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "translateY(-4px)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "translateY(0)";
    });
});