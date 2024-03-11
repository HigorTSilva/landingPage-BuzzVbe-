const navbar = document.querySelector(".navbar");
const navMobile = document.querySelector("#nav__mobile");
const closeNavMobile = document.querySelector("#nav__mobile");

window.addEventListener('scroll', function () {
    if (this.window.scrollY > 0) return navbar.classList.add('active');
    return navbar.classList.remove('active');
});

function openNav() {
    navMobile.style.width = "100%";
}

function closeNav() {
    closeNavMobile.style.width = "0";
}