// Получаем ссылку на div с классом "order__wrap-title"
const orderTitle = document.querySelector('.order__wrap-title');

// Получаем ссылку на кнопку с классом "order__close"
const closeBtn = document.querySelector('.order__close');

// Получаем ссылку на корзину
const orderBasket = document.querySelector('.order__wrapper');

// Функция для открытия корзины
function openOrder() {
  orderBasket.classList.add('order_open');
}

// Функция для закрытия корзины
function closeOrder() {
  orderBasket.classList.remove('order_open');
}

// Добавляем обработчик события на клик по div "order__wrap-title"
orderTitle.addEventListener('click', openOrder);

// Добавляем обработчик события на клик по кнопке "order__close"
closeBtn.addEventListener('click', closeOrder);