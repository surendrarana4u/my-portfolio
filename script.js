let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text' , {
    strings:['Genius','Entrepreneur','Billionaire' ,'MERN Developer','YouTuber'],
    typeSpeed:100,
    backSpeed:90,
    backDelay:1100,
    loop:true,
}) ;