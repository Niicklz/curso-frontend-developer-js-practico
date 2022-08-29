const emailMenu = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuMobile = document.querySelector(".mobile-menu");
const menuIcon = document.querySelector(".menu");
const carritoCompra = document.querySelector(".navbar-shopping-cart");
const detallesCompra = document.querySelector(".product-detail");
const flechita = document.querySelector(".flecha");


emailMenu.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
    detallesCompra.classList.add("inactive");


}


menuIcon.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
    menuMobile.classList.toggle("inactive");
    detallesCompra.classList.add("inactive"); 
    
    console.log("click");
}

carritoCompra.addEventListener("click", toggleCompras);

function toggleCompras() {
    detallesCompra.classList.toggle("inactive");
    menuMobile.classList.add("inactive"); 
    desktopMenu.classList.add("inactive");  
}

flechita.addEventListener("click", toggleR);

function toggleR() {
   
    detallesCompra.classList.toggle("inactive");
    
    console.log("clickazo");
}