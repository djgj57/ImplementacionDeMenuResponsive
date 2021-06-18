import noticias from './elArray.js';

window.addEventListener('load', function () {

    let btnMenu = document.querySelector('#btnMenu');
    let menu = document.querySelector('#menu');

    btnMenu.addEventListener('click', function () {
        menu.classList.toggle('mostrar');
    });

    let subMenuBtn = document.querySelectorAll('.submenu-btn');

    for (let i = 0; i < subMenuBtn.length; i++) {
        subMenuBtn[i].addEventListener('click', function () {
            if (window.innerWidth < 1024) {
                let subMenu = this.nextElementSibling;
                let height = subMenu.scrollHeight;

                if (subMenu.classList.contains('desplegar')) {
                    subMenu.classList.remove('desplegar');
                    subMenu.removeAttribute('style');
                } else {
                    subMenu.classList.add('desplegar');
                    subMenu.style.height = height + 'px';
                }
            }
        })
    }

    let template, contenedorNoticias = document.querySelector('.contenedor-noticias');

    for (let i = 0; i < noticias.length; i++) {

        template =
            `${noticias[i].tipoNacional ? '<article class="card card-nacional">' : '<article class="card card-internacional">'}
            <div class="titulo">
                <h4>${noticias[i].titulo}${noticias[i].tipoNacional ? '<i class="fas fa-globe-americas">' : ''}</i></h4>
            </div>
            <h4 class="fecha">${noticias[i].fecha}</h4>
                <p class="texto-noticia">${noticias[i].descripcion}</p>
            <img src="${noticias[i].imgUrl}"
            alt="imagen noticia" class="imagen-noticia">
        </article>`
        contenedorNoticias.innerHTML += template;

    }

    let cardsNacional = document.querySelectorAll('.card-nacional')
    console.log(cardsNacional);

    let cardsInternacional = document.querySelectorAll('.card-internacional')
    console.log(cardsInternacional);

    let nacionales = document.querySelector('.nacionales');
    nacionales.addEventListener('click', function () {
        cardsNacional.forEach(element => {
            element.style.display='none'
        });
        cardsInternacional.forEach(element => {
            element.style.display='inline'
        });
        
    })

    let internacionales = document.querySelector('.internacionales');
    internacionales.addEventListener('click', function () {
        cardsInternacional.forEach(element => {
            element.style.display='none'
        });
        cardsNacional.forEach(element => {
            element.style.display='inline'
        });
    })

    let noticiasTodas = document.querySelector('.noticias-todas');
    noticiasTodas.addEventListener('click', function () {
        cardsInternacional.forEach(element => {
            element.style.display='inline'
        });
        cardsNacional.forEach(element => {
            element.style.display='inline'
        });
    })
})
