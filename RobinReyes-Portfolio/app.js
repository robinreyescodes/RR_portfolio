'use strict';

const bounceElement = document.querySelector(".bounce-me");
const workPage = document.querySelector(".work");
// const heroGoodbye = document.getElementById("hero");
const heroGoodbye = document.querySelector(".hero");
const workBtn = document.querySelector(".bounce-work");
const aboutBtn = document.querySelector(".bounce-about");

bounceElement.addEventListener("click", () => {
    heroGoodbye.style.opacity = "0";
    workPage.style.opacity = "1";
    workPage.style.display = "block"
    workBtn.style.opacity = "0";
    workPage.classList.toggle("disappear");
})

aboutBtn.addEventListener("click", () => {
    workPage.style.opacity = "0";
    workPage.style.display = "none";
    workBtn.style.opacity = "1";
    heroGoodbye.style.opacity = "1";
    workPage.classList.toggle("reappear");
})