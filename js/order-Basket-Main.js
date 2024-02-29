import { createOrderItem } from './create-order-basket-item,js';

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
const emptyOrderBasket = document.createElement('li');
  emptyOrderBasket.classList.add('order__item');
  emptyOrderBasket.innerHTML =  `<span>Корзина пустая</span>`;
  emptyOrderBasket.style.display = 'flex';
  emptyOrderBasket.style.justifyContent = 'center';
  orderList.appendChild(emptyOrderBasket);

// calculates the total amount of the order
function updateTotalAmountDisplay() {
  const orderTotalAmountElement = document.querySelector('.order__total-amount');
  orderTotalAmountElement.textContent = orderTotalAmount;
};
// calculates the total Items in the order basket
function updateTotalOrderItems() {
  const orderTotalCountElement = document.querySelector('.order__count');
  orderTotalCountElement.textContent = orderItemsCount;
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

  // consts for updateOneItemCount()
  const countPlusBtn = orderItem.querySelector('.count__plus');
  const countMinusBtn = orderItem.querySelector('.count__minus');
  const countAmountElement = orderItem.querySelector('.count__amount');

  countPlusBtn.addEventListener('click', updateOneItemCount.bind(countAmountElement, 1));
  countMinusBtn.addEventListener('click', updateOneItemCount.bind(countAmountElement, -1));

  // add display style
  orderTotalInfo.style.display = orderItemsCount ? 'flex' : 'none';
  orderSubmit.style.display = orderItemsCount ? 'block' : 'none';
  emptyOrderBasket.style.display = orderItemsCount ? 'none' : 'flex';
};

// counts the quantity of each item in the order basket and deletes if there are 0 items
function updateOneItemCount(delta) {
  let countAmountElement = this.closest('.count__amount');
  let currentAmount = parseInt(countAmountElement.textContent);
  currentAmount = Math.max(currentAmount + delta, 0);
  let orderItem = this.closest('.order__item');
  let productPriceElement = orderItem.querySelector('.order__product-price span');

  if (currentAmount === 0 && delta === -1) {
    // If the quantity is 0 and the "count__minus" button is pressed, remove the item from the order basket
    orderItemsCount--;
    updateTotalOrderItems();
    orderTotalAmount -= parseFloat(productPriceElement.textContent);
    updateTotalAmountDisplay();
    orderItem.remove();
    // if orderItemsCount is 0 remove 2 elements and add text (basket is empty)
    if (orderItemsCount === 0) {
      orderTotalInfo.style.display = 'none';
      orderSubmit.style.display = 'none';
      emptyOrderBasket.style.display = 'flex';
    };
  } else { // counts the quantity of each item
    orderItemsCount += delta;
    updateTotalOrderItems();
    orderTotalAmount += delta * parseFloat(productPriceElement.textContent);
    updateTotalAmountDisplay();
    countAmountElement.textContent = currentAmount;
  };
};
