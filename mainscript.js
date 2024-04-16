const menu_email = document.querySelector('.navbar-email');
const menu_escritorio = document.querySelector('.desktop-menu');

menu_email.addEventListener('click',show_pop );

function show_pop() {
    menu_escritorio.classList.toggle('inactive');
}