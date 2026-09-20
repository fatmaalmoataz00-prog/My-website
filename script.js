let homeLink = document.querySelector("#homeLink");

homeLink.addEventListener("click", () => {
    homeLink.style.textDecoration = "underline";
});


let shopLink = document.querySelector("#shopLink");

shopLink.addEventListener("click", () => {
    shopLink.style.textDecoration = "underline";
});


let saleLink = document.querySelector("#saleLink");

saleLink.addEventListener("click", () => {
    saleLink.style.textDecoration = "underline";
});


let newArrivalsLink = document.querySelector("#newArrivalsLink");

newArrivalsLink.addEventListener("click", () => {
    newArrivalsLink.style.textDecoration = "underline";
});


let contactLink = document.querySelector("#contactLink");

contactLink.addEventListener("click", () => {
    contactLink.style.textDecoration = "underline";
});


let aboutLink = document.querySelector("#aboutLink");

aboutLink.addEventListener("click", () => {
    aboutLink.style.textDecoration = "underline";
});


let logo = document.querySelector("#logo");

logo.addEventListener("click", () => {
    logo.style.textDecoration = "underline";
});
let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    console.log("Form submitted!");
});