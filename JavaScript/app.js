// external js: flickity.pkgd.js
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    pageDots: false,
    prevNextButtons: false,
    initialIndex: 2,
});

// Previous and Next Buttons
let nextButton = document.getElementById("previous");
let previousButton = document.getElementById("next");

// Previous Slide Function
previousButton.addEventListener('click', function () {
    flkty.previous();
});

// Next Slide Function
nextButton.addEventListener('click', function () {
    flkty.next();
});