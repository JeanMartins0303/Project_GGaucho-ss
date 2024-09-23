const menu = document.querySelector('header');

function activeScroll(){
    menu.classList.loggle('ativo', scrollY > 0)

}

window.addEventListener('scroll', activeScroll);