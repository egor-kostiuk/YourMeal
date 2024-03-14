import { createOrderItem } from './create-order-basket-item.js';
import { emptyOrderBasket } from './utils.js'

// main order list const
const orderList = document.querySelector('.order__list');

// catalog item add button
const productAddBtn = document.querySelectorAll('.product__add');

// variables for calculating the price and quantity of items in order basket
const orderTotalInfo = document.querySelector('.order__total');
const orderSubmit = document.querySelector('.order__submit');
let orderTotalAmount = 0;
let orderItemsCount = 0;

// create text (basket is empty) if order basket is empty
  orderList.appendChild(emptyOrderBasket);

// calculates the total amount of the order
function updateTotalAmountDisplay() {
  document.querySelector('.order__total-amount').textContent = orderTotalAmount;
};
// calculates the total Items in the order basket
function updateTotalOrderItems() {
  document.querySelector('.order__count').textContent = orderItemsCount;
};

// When you click on the button on the catalog item card, all the functionality of the order basket works
productAddBtn.forEach((button, index) => {
  button.addEventListener('click', () => handleProductAddClick(index));
});

// main function
function handleProductAddClick(index) {
  const catalogItem = document.querySelector(`.catalog__item:nth-child(${index + 1})`); // Используем :nth-child() для получения нужного элемента
  const catalogItemInfo = {
    catalogItemName: catalogItem.querySelector(".product__detail-name").textContent,
    catalogItemWeight: catalogItem.querySelector(".product__weight").textContent,
    catalogItemPrice: +catalogItem.querySelector(".product__price span").textContent, // Преобразуем в число
    catalogItemImageSrc: catalogItem.querySelector(".product__image").getAttribute("src"),
  };
  
  // creates a new item at the end of the order basket
  const orderItem = createOrderItem(catalogItemInfo);
  orderList.appendChild(orderItem);

  // adding styles to the element and its visibility
  orderItem.style.display = 'flex';
  orderItem.classList.add('order__item');

  // call updateTotalOrderItems()
  orderItemsCount++
  updateTotalOrderItems();

  // call updateTotalAmountDisplay()
  orderTotalAmount += catalogItemInfo.catalogItemPrice;
  updateTotalAmountDisplay();

  // pdateOneItemCount()
  const countAmountElement = orderItem.querySelector('.count__amount');
  orderItem.querySelector('.count__plus').addEventListener('click', updateOneItemCount.bind(countAmountElement, 1));
  orderItem.querySelector('.count__minus').addEventListener('click', updateOneItemCount.bind(countAmountElement, -1));

  // add display style
  orderTotalInfo.style.display = orderItemsCount ? 'flex' : 'none';
  orderSubmit.style.display = orderItemsCount ? 'block' : 'none';
  emptyOrderBasket.style.display = orderItemsCount ? 'none' : 'flex';
};

// counts the quantity of each item in the order basket and deletes if there are 0 items
function updateOneItemCount(delta) {
  const orderItem = this.closest('.order__item');
  const countAmountElement = orderItem.querySelector('.count__amount');
  const productPriceElement = orderItem.querySelector('.order__product-price span');
  
  let currentAmount = parseInt(countAmountElement.textContent);
  currentAmount = Math.max(currentAmount + delta, 0);

  const priceChange = delta * parseFloat(productPriceElement.textContent);
  orderItemsCount += delta;
  updateTotalOrderItems();
  orderTotalAmount += priceChange;
  updateTotalAmountDisplay();

  if (currentAmount === 0 && delta === -1) {
    orderItem.remove();
    if (orderItemsCount === 0) {
      orderTotalInfo.style.display = 'none';
      orderSubmit.style.display = 'none';
      emptyOrderBasket.style.display = 'flex';
    };
  } else {
    countAmountElement.textContent = currentAmount;
  };
};
