let swiper = new Swiper('.mySwiper', {
    spaceBetween: 30, centeredSlides: true, 
    autoplay: { delay: 3500, disableOnInteraction: false, }
});

// Increasing numbers

let speed = 5;
function incEltNbr(id){
    elt = document.getElementById(id);
    endNbr = Number(document.getElementById(id).innerHTML);
    incNbrRec(0, endNbr, elt);
}

function incNbrRec(i, endNbr, elt) {
    if(i <= endNbr){
        elt.innerHTML = i;
        setTimeout(function(){ incNbrRec(i + 1, endNbr, elt); }, speed);
    }
}

incEltNbr('nbr');
incEltNbr('nbr2');
incEltNbr('nbr3');

// Changing Background Navbar when start scrolling

function changeBg(){
    let menu = document.querySelector('.navBar');
    let scrollValue = window.scrollY;

    if(scrollValue < 150) {
        menu.classList.remove('menuBg');
        menu.style.top='3rem';
    } else {
        menu.classList.add('menuBg');
        menu.style.top='0';
    }
}
window.addEventListener('scroll', changeBg);

// Changing text in container 4

let index = 0;
show_image(index);

function show_image(i){
    index +=1;
    let images = document.getElementsByClassName("image");

    for(i = 0; i < images.length; i++) { images[i].style.display = "none"; }
    if(index > images.length - 1) { index = 0; }
    if(index < 0) { index = images.length - 1; }

    images[index].style.display = "block";
}

// Mobile Menu

const nav = document.getElementById('list');
const openMenu = document.querySelector('.open');
const closeMenu = document.querySelector('.close');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show(){
    nav.style.display = "flex";
    nav.style.top = "0";
}

function close(){
    nav.style.top = "-110%";
}