const hamburgerMenu = document.querySelector(".hamburger-menu");
const overlay = document.querySelector(".overlay-1");
const body = document.querySelector("body");
const toggleMenu = document.querySelector(".toggle-menu");
const toggleMenuLinks = document.querySelectorAll(".toggle-menu a");
// const text_overlay = document.querySelector("#cretion-heading");

function openNav() {


    
    if (hamburgerMenu.classList.contains("open")) {
        hamburgerMenu.classList.remove("open");
        overlay.style.width = "0px";
        body.style.overflow = null;
        toggleMenu.style.opacity = null;
        toggleMenu.style.transition = null;
        
        
    } else {
        hamburgerMenu.classList.add("open");
        overlay.style.width = "100%";
        body.style.overflow = "hidden";
        toggleMenu.style.opacity = "1";
        toggleMenu.style.transition = "1s ease-in-out";

    
        
    }
    

}

// when we click the menu links we close the menu

toggleMenuLinks.forEach(l => l.addEventListener("click", function (e) {
    hamburgerMenu.classList.remove("open");
    overlay.style.width = "0px";
    body.style.overflow = null;
    toggleMenu.style.opacity = null;
    toggleMenu.style.opacity = null;
        toggleMenu.style.transition = null;

}))





