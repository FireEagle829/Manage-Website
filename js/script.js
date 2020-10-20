// Resize Function
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        hideNavMenu();
    }
});

// Navigation Bar
let hamburgerMenu = document.querySelector(".hamburger");
let navMenu = document.querySelector(".mobile-nav");
let blackLayer = document.querySelector(".black-layer");

const showNavMenu = () => {
    hamburgerMenu.style.backgroundImage = "url(\"images/icon-close.svg\")";
    blackLayer.style.display = "block";
    setTimeout(() => {
        blackLayer.style.opacity = "1";
    }, 1)
    navMenu.style.top = "100px";
    navMenu.setAttribute("shown", "true");
}

const hideNavMenu = () => {
    hamburgerMenu.style.backgroundImage = "url(\"images/icon-hamburger.svg\")";
    blackLayer.style.opacity = "0";
    setTimeout(() => {
        blackLayer.style.display = "none"
    }, 400);
    navMenu.style.top = "-265px";
    navMenu.setAttribute("shown", "false");
}

hamburgerMenu.addEventListener('click', () => {
    if (navMenu.getAttribute("shown") === "false") {
        showNavMenu();
    } else {
        hideNavMenu();
    }
})

// Testimonials Slider

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
});

// Adjust Elements to the same height

(function () {
    equalHeight(true);
})();

window.onresize = function () {
    equalHeight(true)
}

function equalHeight(resize) {

    let elements = document.getElementsByClassName("equalHeight"),
        allHeights = [],
        i = 0;

    if (resize === true) {
        for (i = 0; i < elements.length; i++) {
            elements[i].style.height = 'auto';
        }
    }

    for (i = 0; i < elements.length; i++) {
        var elementHeight = elements[i].clientHeight;
        allHeights.push(elementHeight);
    }

    for (i = 0; i < elements.length; i++) {
        elements[i].style.height = Math.max.apply(Math, allHeights) + 'px';
        if (resize === false) {
            elements[i].className = elements[i].className + " show";
        }
    }
}

// Input On Blur

let input = document.getElementsByTagName("input")[0];

input.addEventListener("blur", () => {

    if (input.value.length == 0) {
        input.style.background = "#fccbcb";
        input.placeholder = "this field is required"
    }

});