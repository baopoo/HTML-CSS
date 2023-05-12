const menuRight = document.querySelector('.hero-header-right');
const menuButton = document.querySelector('.hero-header_button');

let flag = false;


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