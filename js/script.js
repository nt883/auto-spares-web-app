
const hamburger = document.getElementById('hamburger-btn');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');

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

function showSection(section,sectionName) {
   homeSection.classList.add("hidden");
   partsSection.classList.add("hidden");
   contactSection.classList.add("hidden");
   
   section.classList.remove("hidden");

   sidebar.classList.add('-translate-x-full');

   window.scrollTo(0, 0);

   localStorage.setItem("currentSection", sectionName);
}

const saved = localStorage.getItem("currentSection");

if (saved === "parts") {
    showSection(partsSection, "parts");
} else if (saved === "contact") {
    showSection(contactSection, "contact");
} else {
    showSection(homeSection, "home");
}

navHome.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        showSection(homeSection, "home");
    });
});

navParts.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        showSection(partsSection, "parts");
    });
});

navContact.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        showSection(contactSection, "contact");
    });
});

const browseBtn = document.getElementById("browse-btn");

if (browseBtn) {
    browseBtn.addEventListener("click", () => {
    showSection(partsSection, "parts");
});
}

console.log("Browse button:", browseBtn);
console.log("Home:", homeSection);
console.log("Parts:", partsSection);
console.log("Contact:", contactSection);


const products = document.querySelectorAll(".product");

function filterProducts(category) {
    products.forEach(product => {
        if (category === "all") {
            product.style.display = "block";
        } else {
            if (product.dataset.category === category) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        }
    });
}

// buttons
document.getElementById("filter-engine").addEventListener("click", (e) => {
    filterProducts("engine");
    setActiveButton(e.target);
});

document.getElementById("filter-brakes").addEventListener("click", (e) => {
    filterProducts("brakes");
    setActiveButton(e.target);
});

document.getElementById("filter-suspension").addEventListener("click", (e) => {
    filterProducts("suspension");
    setActiveButton(e.target);
});

document.getElementById("filter-all").addEventListener("click", (e) => {
    filterProducts("all");
    setActiveButton(e.target);
});

document.getElementById("filter-all").click();

const filterButtons = document.querySelectorAll(".filter-btn");

function setActiveButton(activeBtn) {
    filterButtons.forEach(btn => {
        btn.classList.remove("bg-orange-500");
        btn.classList.add("bg-black");
    });

    activeBtn.classList.remove("bg-black");
    activeBtn.classList.add("bg-orange-500");
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const form = document.getElementById("whatsapp-form");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const lastName = document.getElementById("last-name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        const phone = document.getElementById("phone").value;
        

        if (!isValidEmail(email)) {
            alert("Please enter a valid email address");
            return;
        }

        const phoneNumber = "27794288086";

        const whatsappMessage =
`Hello, I need a car part:

Name: ${name}
Last Name: ${lastName}
Email: ${email}
Phone: ${phone}
Message: ${message}
        
📌 Please attach a photo of the part in WhatsApp before sending.`;

        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(url, "_blank");
    });
}





