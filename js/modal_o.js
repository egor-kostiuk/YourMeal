// Получаем ссылку на кнопку с классом "order__submit"
const detailButton2 = document.querySelector('.order__submit');

// Получаем ссылку на кнопку с классом "modal__close"
const closeButton2 = document.querySelector('.modal__close2');

// Получаем ссылку на модальное окно
const modal2 = document.querySelector('.modal_delivery');

// Функция для открытия модального окна
function openModal2() {
    modal2.classList.add('modal_open');
}

// Функция для закрытия модального окна
function closeModal2() {
    modal2.classList.remove('modal_open');
}

// Добавляем обработчик события на клик по кнопке "product__detail"
detailButton2.addEventListener('click', openModal2);

// Добавляем обработчик события на клик по кнопке "modal__close"
closeButton2.addEventListener('click', closeModal2);