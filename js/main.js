let swiper; // Объявляем переменную для хранения экземпляра Swiper

function initSwiper() {
    swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}

function destroySwiper() {
    if (swiper !== undefined) {
        swiper.destroy();
        swiper = undefined; // Сбрасываем переменную
    }
}

function handleResize() {
    if (window.matchMedia("(min-width: 768px)").matches) {
        destroySwiper();
    } else {
        initSwiper();
    }
}

window.addEventListener('resize', handleResize);

// Инициализируем Swiper при загрузке страницы
window.addEventListener('DOMContentLoaded', function() {
    handleResize(); // Вызываем обработчик при загрузке страницы
});




let brandItem = document.querySelectorAll('.brand__item');

if (window.innerWidth > 1119) {                         //Скрываем ссылки с логотипами
  for (let i = 8; i < brandItem.length; i++) {         //т.о., чтоб при типовом расширении
    brandItem[i].classList.add('invisible');           //экрана были видны первые 2 строки
  }                                                     //сетки
} else if(window.innerWidth > 767) {
  for (let i = 6; i < brandItem.length; i++) {
    brandItem[i].classList.add('invisible');
  }
}

let brandsButtonShow = document.querySelector('.brands__button-show');

brandsButtonShow.addEventListener('click', function () {                 //по клику мышкой (или пальцем) запускаем цепь событий
  if (brandsButtonShow.classList[1] == 'brands__button_hiden') {         // которые заключаются в проверке в каком состоянии сейчас сетка
  
    brandsButtonShow.classList.remove('brands__button_hiden');           //если сетка закрыта, тогда у кнопки удаляется класс
    brandsButtonShow.querySelector('span').textContent = 'Показать все'; //в стилях которых содержался display:none и меняется текст кнопки. 

    if (window.innerWidth > 1119) {
      for (let i = 8; i < brandItem.length; i++) {                       //
        brandItem[i].classList.add('invisible');
      }
    } else if(window.innerWidth > 767) {
      for (let i = 6; i < brandItem.length; i++) {
        brandItem[i].classList.add('invisible');
      }
    }

  }else {

    brandsButtonShow.classList.add('brands__button_hiden');            //иначе (сетка открыта) кнопке присваевается класс с dispplay:none
    brandsButtonShow.querySelector('span').textContent = 'Скрыть';     //и меняется текст на "скрыть".

    if (window.innerWidth > 1119) {
      for (let i = 8; i < brandItem.length; i++) {
        brandItem[i].classList.remove('invisible');
      }
    } else if(window.innerWidth > 767) {
      for (let i = 6; i < brandItem.length; i++) {
        brandItem[i].classList.remove('invisible');
      }
    }
  }

});