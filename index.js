const mobileWidth = 393;
const menuRight = document.querySelector('.hero-header-right');
const menuButton = document.querySelector('.hero-header_button');
const sliderService = document.querySelector('.service-steps');
const sliderServiceItem = document.querySelectorAll('.service-steps_card');
const sliderLength = sliderServiceItem.length;
const sliderDot = document.querySelectorAll('.service-steps_pagination-item');
let intervalSliderService;

let flag = false;
let checkSliderLength = 0;
let positionX = 0;


const onClickToggleMenu = () => {
    flag = !flag;
    if (flag) {
        menuButton.classList.remove('fa-bars');
        menuRight.classList.remove('d-none');
        menuButton.classList.add('fa-xmark');
    } else {
        menuButton.classList.remove('fa-xmark');
        menuRight.classList.add('d-none');
        menuButton.classList.add('fa-bars');
    }
}

const changeSliderService = () => {
    let sliderItemWidth = 385;
    sliderDot[checkSliderLength].classList.remove('gradient-color');
    checkSliderLength++;
    if (checkSliderLength > sliderLength - 1) {
        checkSliderLength = 0;
        positionX = 0;
    } else {
        positionX = positionX - sliderItemWidth;
    }
    sliderDot[checkSliderLength].classList.add('gradient-color');
    sliderService.style = `transform: translateX(${positionX}px)`
}

const startInterval = () => {
    intervalSliderService = setInterval(() => {
        changeSliderService();
    }, 1500);
}

const stopInterval = () => {
    clearInterval(intervalSliderService);
    sliderService.style = `transform: translateX(0px)`
}

window.onload = ()  => {
    if (window.screen.width <= mobileWidth) {
        startInterval();
    } 
}

window.onresize = () => {
    stopInterval();
    if (window.screen.width <= mobileWidth) {
        startInterval();
    }
}










