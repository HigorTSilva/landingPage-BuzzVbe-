const navbar = document.querySelector(".navbar");
const navMobile = document.querySelector("#nav__mobile");
const closeNavMobile = document.querySelector("#nav__mobile");
const body = document.querySelector("body");

window.addEventListener('scroll', function () {
    if (this.window.scrollY > 0) return navbar.classList.add('active');
    return navbar.classList.remove('active');
});

function openNav() {
    navMobile.style.width = "100%";
    body.style.overflow = "hidden"
}

function closeNav() {
    closeNavMobile.style.width = "0";
    body.style.overflow = "scroll"
}