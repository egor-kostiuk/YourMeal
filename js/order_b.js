// Получаем ссылку на div с классом "order__wrap-title"
let orderTitle = document.querySelector('.order__wrap-title');

// Получаем ссылку на кнопку с классом "order__close"
let closeBtn = document.querySelector('.order__close');

// Получаем ссылку на корзину
let order = document.querySelector('.order');

// Функция для открытия корзины
function openOrder() {
  order.classList.add('order_open');
}

// Функция для закрытия корзины
function closeOrder() {
  order.classList.remove('order_open');
}

// Добавляем обработчик события на клик по div "order__wrap-title"
orderTitle.addEventListener('click', openOrder);

// Добавляем обработчик события на клик по кнопке "order__close"
closeBtn.addEventListener('click', closeOrder);