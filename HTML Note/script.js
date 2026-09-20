/* =====================================================
   FAHAD HTML NOTES - JAVASCRIPT
===================================================== */


/* =====================================================
   THEME TOGGLE
===================================================== */

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const icon = themeToggle.querySelector("i");

    if (document.body.classList.contains("light-mode")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

        localStorage.setItem("theme", "light");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

        localStorage.setItem("theme", "dark");

    }

});


/* LOAD SAVED THEME */

if (localStorage.getItem("theme") === "light") {

    document.body.classList.add("light-mode");

    const icon = themeToggle.querySelector("i");

    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");

}


/* =====================================================
   MOBILE SIDEBAR
===================================================== */

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.querySelector(".sidebar");

menuBtn.addEventListener("click", () => {

    sidebar.classList.toggle("open");

});


/* CLOSE SIDEBAR WHEN CLICKING LINK */

document.querySelectorAll(".side-nav a").forEach(link => {

    link.addEventListener("click", () => {

        sidebar.classList.remove("open");

    });

});


/* =====================================================
   ACTIVE NAVIGATION ON SCROLL
===================================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".side-nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

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


/* =====================================================
   SEARCH SYLLABUS
===================================================== */

const searchInput = document.getElementById("searchInput");
const moduleCards = document.querySelectorAll(".module-card");

searchInput.addEventListener("input", () => {

    const searchTerm = searchInput.value.toLowerCase();

    moduleCards.forEach(card => {

        const title = card.dataset.title.toLowerCase();

        if (title.includes(searchTerm)) {

            card.style.display = "flex";

        } else {

            card.style.display = "none";

        }

    });

});


/* =====================================================
   NOTES TABS
===================================================== */

function showNote(noteId, button) {

    document.querySelectorAll(".note-content").forEach(note => {

        note.classList.remove("active");

    });

    document.querySelectorAll(".note-tab").forEach(tab => {

        tab.classList.remove("active");

    });

    document.getElementById(noteId).classList.add("active");

    button.classList.add("active");

}


/* =====================================================
   LIVE CODE PLAYGROUND
===================================================== */

const codeEditor = document.getElementById("codeEditor");
const previewFrame = document.getElementById("previewFrame");
const runCode = document.getElementById("runCode");

function updatePreview() {

    const code = codeEditor.value;

    previewFrame.srcdoc = code;

}

runCode.addEventListener("click", updatePreview);


/* AUTO RUN ON PAGE LOAD */

updatePreview();


/* =====================================================
   COPY CODE BUTTON
===================================================== */

const copyCode = document.getElementById("copyCode");

copyCode.addEventListener("click", async () => {

    try {

        await navigator.clipboard.writeText(codeEditor.value);

        copyCode.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';

        setTimeout(() => {

            copyCode.innerHTML = '<i class="fa-solid fa-copy"></i> Copy';

        }, 2000);

    } catch (error) {

        alert("Unable to copy code.");

    }

});


/* =====================================================
   PRACTICE ANSWERS
===================================================== */

function toggleAnswer(button) {

    const answer = button.nextElementSibling;

    answer.classList.toggle("show");

    if (answer.classList.contains("show")) {

        button.innerHTML = 'Hide Answer <i class="fa-solid fa-chevron-up"></i>';

    } else {

        button.innerHTML = 'Show Answer <i class="fa-solid fa-chevron-down"></i>';

    }

}


/* =====================================================
   MODULE DATA
===================================================== */

const modules = {

    1: {
        title: "HTML Fundamentals",
        level: "Beginner Level",
        description: "HTML ke basic concepts se shuruaat kijiye. Is module mein aap webpage structure aur basic HTML tags seekhenge.",
        topics: [
            "Introduction to HTML",
            "History of HTML",
            "HTML5 Features",
            "Document Structure",
            "Basic Tags",
            "Text Formatting"
        ]
    },

    2: {
        title: "HTML Attributes & Elements",
        level: "Beginner Level",
        description: "HTML elements aur attributes ka use karke webpage ko properly structure karna seekhiye.",
        topics: [
            "HTML Elements",
            "Global Attributes",
            "ID and Class",
            "Block and Inline Elements",
            "Div vs Span",
            "HTML Entities"
        ]
    },

    3: {
        title: "Links & Navigation",
        level: "Beginner Level",
        description: "Website ke different pages aur external websites ko connect karna seekhiye.",
        topics: [
            "Anchor Tag",
            "Internal Links",
            "External Links",
            "Email Links",
            "Telephone Links",
            "Navigation Menus"
        ]
    },

    4: {
        title: "Images & Multimedia",
        level: "Beginner Level",
        description: "Webpages mein images, audio, videos aur external content add karna seekhiye.",
        topics: [
            "Image Tag",
            "Alt Attribute",
            "Responsive Images",
            "Audio Element",
            "Video Element",
            "Iframe"
        ]
    },

    5: {
        title: "Lists & Tables",
        level: "Beginner Level",
        description: "Data ko organized aur readable format mein display karna seekhiye.",
        topics: [
            "Ordered Lists",
            "Unordered Lists",
            "Description Lists",
            "HTML Tables",
            "Colspan",
            "Rowspan"
        ]
    },

    6: {
        title: "Forms & User Input",
        level: "Intermediate Level",
        description: "Registration, login aur contact forms banana seekhiye.",
        topics: [
            "Form Element",
            "Input Types",
            "Textarea",
            "Select and Option",
            "Buttons",
            "HTML5 Validation"
        ]
    },

    7: {
        title: "Semantic HTML5",
        level: "Intermediate Level",
        description: "Professional aur SEO-friendly webpage structure banana seekhiye.",
        topics: [
            "Header",
            "Nav",
            "Main",
            "Section",
            "Article",
            "Footer"
        ]
    },

    8: {
        title: "Advanced HTML5 Features",
        level: "Advanced Level",
        description: "Modern HTML ke advanced interactive elements aur features explore kijiye.",
        topics: [
            "Canvas",
            "SVG",
            "Dialog",
            "Template",
            "Web Components",
            "Custom Elements"
        ]
    },

    9: {
        title: "Accessibility",
        level: "Advanced Level",
        description: "Har user ke liye accessible aur inclusive websites banana seekhiye.",
        topics: [
            "Web Accessibility",
            "WCAG Basics",
            "ARIA Attributes",
            "Screen Readers",
            "Keyboard Navigation",
            "Accessible Forms"
        ]
    },

    10: {
        title: "SEO-Friendly HTML",
        level: "Advanced Level",
        description: "Search engines ke liye optimized HTML structure banana seekhiye.",
        topics: [
            "Meta Tags",
            "Title Tag",
            "Description",
            "Heading Hierarchy",
            "Open Graph",
            "Structured Data"
        ]
    },

    11: {
        title: "HTML Performance",
        level: "Advanced Level",
        description: "Website ki loading speed aur performance optimize karna seekhiye.",
        topics: [
            "Page Speed",
            "Lazy Loading",
            "Async",
            "Defer",
            "Preload",
            "Prefetch"
        ]
    },

    12: {
        title: "HTML with CSS & JavaScript",
        level: "Advanced Level",
        description: "HTML ko CSS aur JavaScript ke saath integrate karke dynamic websites banana seekhiye.",
        topics: [
            "External CSS",
            "JavaScript Integration",
            "DOM Basics",
            "Data Attributes",
            "Frontend Integration"
        ]
    },

    13: {
        title: "Advanced HTML Concepts",
        level: "Advanced Level",
        description: "Professional HTML coding standards aur best practices samajhiye.",
        topics: [
            "Metadata",
            "HTML Validation",
            "Browser Compatibility",
            "Deprecated Tags",
            "Clean Code"
        ]
    },

    14: {
        title: "Professional HTML Development",
        level: "Advanced Level",
        description: "Industry-level HTML development workflow aur architecture seekhiye.",
        topics: [
            "Responsive Structure",
            "Component-Based HTML",
            "Website Architecture",
            "Coding Standards",
            "Professional Workflow"
        ]
    },

    15: {
        title: "HTML Projects",
        level: "Project Level",
        description: "Practical projects ke through apni HTML skills ko strong banaiye.",
        topics: [
            "Portfolio Website",
            "Restaurant Website",
            "E-Commerce Page",
            "Dashboard",
            "Educational Website",
            "Business Website"
        ]
    }

};


/* =====================================================
   MODULE MODAL
===================================================== */

function openModule(moduleNumber) {

    const module = modules[moduleNumber];

    const modal = document.getElementById("moduleModal");
    const modalBody = document.getElementById("modalBody");

    let topicsHTML = "";

    module.topics.forEach(topic => {

        topicsHTML += `<li>${topic}</li>`;

    });

    modalBody.innerHTML = `

        <span class="section-label">${module.level}</span>

        <h2>${module.title}</h2>

        <p>${module.description}</p>

        <h3>Topics Covered:</h3>

        <ul>
            ${topicsHTML}
        </ul>

        <button class="run-btn" onclick="markModuleComplete(${moduleNumber})">
            <i class="fa-solid fa-check"></i>
            Mark as Completed
        </button>

    `;

    modal.classList.add("show");

}


/* CLOSE MODAL */

function closeModule() {

    document.getElementById("moduleModal").classList.remove("show");

}

window.addEventListener("click", (event) => {

    const modal = document.getElementById("moduleModal");

    if (event.target === modal) {

        closeModule();

    }

});


/* =====================================================
   PROGRESS TRACKER
===================================================== */

let completedModules = JSON.parse(
    localStorage.getItem("completedModules") || "[]"
);

function markModuleComplete(moduleNumber) {

    if (!completedModules.includes(moduleNumber)) {

        completedModules.push(moduleNumber);

        localStorage.setItem(
            "completedModules",
            JSON.stringify(completedModules)
        );

    }

    updateProgress();

    closeModule();

}


/* UPDATE PROGRESS */

function updateProgress() {

    const totalModules = 15;

    const completed = completedModules.length;

    const percentage = Math.round(
        (completed / totalModules) * 100
    );

    document.getElementById("progressPercent").textContent =
        percentage + "%";

    document.getElementById("miniProgress").textContent =
        percentage + "%";

    document.getElementById("miniProgressBar").style.width =
        percentage + "%";

}


/* INITIALIZE PROGRESS */

updateProgress();


/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

}, {
    threshold: 0.1
});

document.querySelectorAll(
    ".module-card, .stat-card, .project-card, .question-card"
).forEach(element => {

    observer.observe(element);

});