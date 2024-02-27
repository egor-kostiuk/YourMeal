// creates a new item in the order basket using catalog item
export function createOrderItem(catalogItemInfo) {
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
