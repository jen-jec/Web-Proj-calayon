// Menu Bar
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Toggler 
const themesToggle = document.querySelector(".themes-toggler");
themesToggle.addEventListener("click", () => {
    document.querySelector(".themes").classList.toggle("open");
})

document.getElementById('toggleImage').addEventListener('click', function() {
    var text = document.getElementById('toggleText');
    if (text.style.display === 'none' || text.style.display === '') {
        text.style.display = 'block';
    } else {
        text.style.display = 'none';
    }
});
document.getElementById('toggleImage1').addEventListener('click', function() {
    var text = document.getElementById('toggleText1');
    if (text.style.display === 'none' || text.style.display === '') {
        text.style.display = 'block';
    } else {
        text.style.display = 'none';
    }
});


// Hiding icons
window.addEventListener("scroll", () => {
    if(document.querySelector(".themes").classList.contains("open")) {
        document.querySelector(".themes").classList.remove("open");
    }
})
/*Themes*/
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyles.forEach(style => {
        if(color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        }
        else {
            style.setAttribute("disabled","true");
        }
    })
}
/*Light & Dark mode*/
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})
