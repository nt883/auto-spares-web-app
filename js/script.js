const hamburger = document.getElementById('hamburger-btn');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');



// close sidebar
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
});

window.addEventListener('click', (e) => {
    if (e.target !== sidebar && !sidebar.contains(e.target) && e.target !== hamburger) {
        sidebar.classList.remove('active');
    }
});