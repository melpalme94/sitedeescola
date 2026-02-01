const btn = document.getElementById('js-menu-mobile');
const nav = document.querySelector('js-nav__list');

btn.onclick = () => {
    nav.classList.toggle('is-active');
}