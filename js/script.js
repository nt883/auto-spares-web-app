const hamburger = document.getElementById('hamburger-btn');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');
const logoContainer = document.getElementById("logo-container");

// open sidebar
hamburger.addEventListener('click', () => {
    sidebar.classList.remove('-translate-x-full');
});

// close sidebar
closeBtn.addEventListener('click', () => {
    sidebar.classList.add('-translate-x-full');
});

// click outside closes
window.addEventListener('click', (e) => {
    const isClickInsideSidebar = sidebar.contains(e.target);
    const isClickHamburger = hamburger.contains(e.target);

    if (!isClickInsideSidebar && !isClickHamburger) {
        sidebar.classList.add('-translate-x-full');
    }
});

const homeSection = document.getElementById("home-section");
const partsSection = document.getElementById("parts-section");
const contactSection = document.getElementById("contact-section");

const navHome = document.querySelectorAll("#nav-home");
const navParts = document.querySelectorAll("#nav-parts");
const navContact = document.querySelectorAll("#nav-contact");

function showSection(section) {
    homeSection.style.display = "none";
    partsSection.style.display = "none";
    contactSection.style.display = "none";

    section.style.display = "block";

    // show logo ONLY on home
    if (section === homeSection) {
        logoContainer.style.display = "flex";
    } else {
        logoContainer.style.display = "none";
    }

    sidebar.classList.remove("active");
}

// default view
showSection(homeSection);

navHome.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        showSection(homeSection);
    });
});

navParts.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        showSection(partsSection);
    });
});

navContact.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        showSection(contactSection);
    });
});