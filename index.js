const menuRight = document.querySelector('.hero-header-right');
const menuButton = document.querySelector('.hero-header_button');

const sliderService = document.querySelector('.service-steps');
const sliderServiceItem = document.querySelectorAll('.service-steps_card');
const sliderLength = sliderServiceItem.length;
const sliderDot = document.querySelectorAll('.service-steps_pagination-item');
console.log(sliderDot.length);

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

const setTimeChangeSliderService = setInterval(() => {
    if (window.screen.width <= 393) {
        changeSliderService();
    } else {
        clearInterval(setTimeChangeSliderService);
    }
}, 1500);

window.onresize = () => {
    if (window.screen.width > 393) {
        clearInterval(setTimeChangeSliderService);
    } else {
        setTimeChangeSliderService = setInterval(() => {
            changeSliderService();
        })
    }
}






