let navclick = document.querySelector('.navbar_icon');
let backdrop = document.querySelector('.backdrop');
let navbar =document.querySelector(".navbar");
let closenav = document.querySelector(".closeicon");
let closelink1 = document.querySelector(".closelink1");
let closelink2 = document.querySelector(".closelink2");
let closelink3 = document.querySelector(".closelink3");

navclick.addEventListener("click", () => {
    backdrop.classList.add("open");
    navbar.classList.add("open");

});
backdrop.addEventListener("click", () => {
    backdrop.classList.remove("open");
    navbar.classList.remove("open");
});

closenav.addEventListener("click", () => {
    backdrop.classList.remove("open");
    navbar.classList.remove("open");
});
closelink1.addEventListener("click", () => {
    backdrop.classList.remove("open");
    navbar.classList.remove("open");
});
closelink2.addEventListener("click", () => {
    backdrop.classList.remove("open");
    navbar.classList.remove("open");
});
closelink3.addEventListener("click", () => {
    backdrop.classList.remove("open");
    navbar.classList.remove("open");
});
