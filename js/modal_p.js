// Получаем ссылку на кнопку с классом "product__detail"
const detailButton = document.querySelector('.product__detail');

// Получаем ссылку на кнопку с классом "modal__close"
const closeButton = document.querySelector('.modal__close');

// Получаем ссылку на модальное окно
const modal = document.querySelector('.modal');

// Функция для открытия модального окна
function openModal() {
  modal.classList.add('modal_open');
}

// Функция для закрытия модального окна
function closeModal() {
  modal.classList.remove('modal_open');
}

// Добавляем обработчик события на клик по кнопке "product__detail"
detailButton.addEventListener('click', openModal);

// Добавляем обработчик события на клик по кнопке "modal__close"
closeButton.addEventListener('click', closeModal);

