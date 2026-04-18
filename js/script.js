const hamburger = document.getElementById('hamburger-btn');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');
const logoContainer = document.getElementById("logo-container");
// open sidebar
hamburger.addEventListener('click', () => {
    sidebar.classList.add('active');
});

// close sidebar
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
});

// click outside closes
window.addEventListener('click', (e) => {
    const isClickInsideSidebar = sidebar.contains(e.target);
    const isClickHamburger = hamburger.contains(e.target);

    if (!isClickInsideSidebar && !isClickHamburger) {
        sidebar.classList.remove('active');
    }
});

const homeSection = document.getElementById("home-section");
const partsSection = document.getElementById("parts-section");
const contactSection = document.getElementById("contact-section");


const navHome = document.getElementById("nav-home");
const navParts = document.getElementById("nav-parts");
const navContact = document.getElementById("nav-contact");

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

// navigation clicks
navHome.addEventListener("click", (e) => {
    e.preventDefault();
    showSection(homeSection);
});

navParts.addEventListener("click", (e) => {
    e.preventDefault();
    showSection(partsSection);
});

navContact.addEventListener("click", (e) => {
    e.preventDefault();
    showSection(contactSection);
});