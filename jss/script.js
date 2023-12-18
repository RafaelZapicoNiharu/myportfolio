// menuzinho de config abrir quando clica no icone 
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



//swiper 

const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: true,
  

    pagination: {
      el: '.swiper-pagination',
      clickable:'true'
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
 
  });


//alertinhas

document.addEventListener('DOMContentLoaded', function () {
    var alertDiv = document.getElementById('alerta-do-dev');
    var alertDiv1 = document.getElementById('alerta-do-dev1');
    
    var closeButton = document.querySelector('.close-button');
    var closeButton1 = document.querySelector('.dois');
    console.log(closeButton1);

    closeButton.addEventListener('click', function () {
        alertDiv.style.display = 'none'; 
    });

    closeButton1.addEventListener('click', function () {
        alertDiv1.style.display = 'none';
     
    });


    setTimeout(function () {
        alertDiv.style.display = 'none';
    }, 6000); 

    setTimeout(function () {
        alertDiv1.style.display = 'none';
    }, 10000); 

});

//




