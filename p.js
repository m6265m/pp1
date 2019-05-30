$(document).ready(function () {

    var star_rating_width = $('.fill-ratings span').width();

    $('.star-ratings').width(star_rating_width);


    $(".sliderdiv").slideUp(0.1).delay(1000).fadeIn(3000);
});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});

window.addEventListener("scroll", () => {
    const top = document.getElementById("move");
   
   

    const ypos = window.pageYOffset;

    if (ypos > 100) {
        top.classList.add("nav-colored");
        top.classList.add("drop-shadow");
        top.classList.remove("nav-transparent");
    }
    else {
        top.classList.add("nav-transparent");
        top.classList.remove("nav-colored");
        top.classList.remove("drop-shadow");
    }
});


