import { createOrderItem } from './createOrderItem.js'

const productAddBtn = document.querySelectorAll('.product__add');
let orderTotalAmount = 0;
let orderItemsCount = 0;

// calculates the total amount of the order
function updateTotalAmountDisplay() {
  const orderTotalAmountElement = document.querySelector('.order__total-amount');
  orderTotalAmountElement.textContent = orderTotalAmount;
}
// calculates the total Items in the order basket
function updateTotalOrderItems() {
  const orderTotalCountElement = document.querySelector('.order__count');
  orderTotalCountElement.textContent = orderItemsCount;
}

productAddBtn.forEach(function (button, index) {
  button.addEventListener('click', function() {
    const orderList = document.querySelector('.order__list');
    const catalogItem = document.querySelector(`.catalog__item:nth-child(${index + 1})`); // Используем :nth-child() для получения нужного элемента
    const catalogItemInfo = {
      catalogItemName: catalogItem.querySelector(".product__title button").textContent,
      catalogItemWeight: catalogItem.querySelector(".product__weight").textContent,
      catalogItemPrice: +catalogItem.querySelector(".product__price span").textContent, // Преобразуем в число
      catalogItemImageSrc: catalogItem.querySelector(".product__image").getAttribute("src"),
    }

    const orderItem = createOrderItem(catalogItemInfo);
    orderList.appendChild(orderItem);

    orderItem.style.display = 'flex';
    orderItem.classList.add('order__item');

    orderItemsCount++
    updateTotalOrderItems();

    orderTotalAmount += catalogItemInfo.catalogItemPrice;
    updateTotalAmountDisplay();
  })
});


