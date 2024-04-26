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




const brandItem = document.querySelectorAll('.brand__item');

if (window.innerWidth > 1119) {                         //Скрываем ссылки с логотипами
  for (let i = 8; i < brandItem.length; i++) {         //т.о., чтоб при типовом расширении
    brandItem[i].classList.add('invisible');           //экрана были видны первые 2 строки
  }                                                     //сетки
} else if(window.innerWidth > 767) {
  for (let i = 6; i < brandItem.length; i++) {
    brandItem[i].classList.add('invisible');
  }
}



const brandsButtonShow = document.querySelector('.brands__button-show');

brandsButtonShow.addEventListener('click', function () {
  brandsButtonShow.classList.toggle('brands__button_hiden');

  if (brandsButtonShow.classList.contains('brands__button_hiden')) {
    brandsButtonShow.querySelector('span').textContent = 'Показать все';

    if (window.innerWidth > 1119) {
      for (let i = 8; i < brandItem.length; i++) {
        brandItem[i].classList.add('invisible');
      }
    } else if (window.innerWidth > 767) {
      for (let i = 6; i < brandItem.length; i++) {
        brandItem[i].classList.add('invisible');
      }
    }
  } else {
    brandsButtonShow.querySelector('span').textContent = 'Скрыть';

    if (window.innerWidth > 1119) {
      for (let i = 8; i < brandItem.length; i++) {
        brandItem[i].classList.remove('invisible');
      }
    } else if (window.innerWidth > 767) {
      for (let i = 6; i < brandItem.length; i++) {
        brandItem[i].classList.remove('invisible');
      }
    }
  }
});