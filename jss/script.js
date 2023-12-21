// menu de config abrir quando clica no icone 
const menu = document.getElementById('menu-config');
const menuIcone = document.querySelector('.fa-gear')

function toggleMenu() { // abre e fecha o menu
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

//menu superior


menuSuperior = document.querySelectorAll('.item-menu');

menuSuperior.forEach(element => {
   element.addEventListener('click',()=>{
    element.classList.add('ativo');
    menuSuperior.forEach(e=>{
        if(e!==element){
          e.classList.remove('ativo');
        }
    });
   });
});
