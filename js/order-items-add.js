const productAddBtn = document.querySelectorAll('.product__add');
let orderTotalAmount = 0;

// creates a new item in the order basket using catalog item
function createOrderItem(catalogItemInfo) {
  const orderItem = document.createElement('li');
  orderItem.innerHTML = `
    <img class="order__image" src="${catalogItemInfo.catalogItemImageSrc}" alt="${catalogItemInfo.catalogItemName}">
    <div class="order__product">
        <h3 class="order__product-title">${catalogItemInfo.catalogItemName}</h3>
        <p class="order__product-weight">${catalogItemInfo.catalogItemWeight}г</p>
        <p class="order__product-price">
            <span>${catalogItemInfo.catalogItemPrice}</span>
            <span class="currency">₴</span>
        </p>
    </div>
    <div class="order__product-count count">
        <button class="count__minus">-</button>
        <p class="count__amount">1</p>
        <button class="count__plus">+</button>
    </div>
  `;
  return orderItem;
}

// calculates the total amount of the order
function updateTotalAmountDisplay() {
  const orderTotalAmountElement = document.querySelector('.order__total-amount');
  orderTotalAmountElement.textContent = orderTotalAmount;
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

    orderTotalAmount += catalogItemInfo.catalogItemPrice;
    updateTotalAmountDisplay();
  })
});


