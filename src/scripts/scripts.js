const navbar = document.querySelector(".navbar");
const button = document.querySelector(".burguer");
const mobileNavbar = document.querySelector(".navbar__mobile");

button.addEventListener("click", function() {
    mobileNavbar.classList.toggle("active");
})


window.addEventListener('scroll', function () {
    if (this.window.scrollY > 0) return navbar.classList.add('active');
    return navbar.classList.remove('active');
});