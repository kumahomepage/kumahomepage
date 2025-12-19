const menu = document.getElementById("menu");
const menuSection = document.getElementById("menu-section");

document.addEventListener("click", (e) => {
    if (e.target.closest("#menu")) {
        menu.classList.toggle("open");
        menuSection.classList.toggle("open");
        return;
    }

    if (e.target.closest("#menu-section")) return;

    menu.classList.remove("open");
    menuSection.classList.remove("open");
});