// menuzinho de config abrir quando clica no icone 
const menu = document.getElementById('menu-config');
const menuIcone = document.querySelector('.fa-gear')

function toggleMenu(event) { // abre e fecha o menu
    
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
 
}  

const pageContent = document.documentElement;  //aqui ta fechando se clica fora
pageContent.addEventListener('click', function (event) {
    if (event.target !== menu && event.target !== menuIcone) {
        menu.style.display = 'none';
    }
});

