// JavaScript code to toggle the navigation menu
function menuOnClick() {
    var nav = document.getElementById('nav');
    var menuBg = document.getElementById('menu-bg');
    var body = document.body;

    nav.classList.toggle('change');
    menuBg.classList.toggle('change-bg');
    body.classList.toggle('noscroll');
}
