const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelector(".links");
const nav = document.querySelector(".navigation");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
    links.classList.toggle("active");
    nav.classList.toggle("active");
})
