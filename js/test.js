import {
  catalogItemInfo
} from './catalog-item-info.js'




const productAddBtn = document.getElementsByClassName('product__add')[0]

productAddBtn.addEventListener('click', function() {
  const orderList = document.getElementsByClassName('order__list')[0]
  const orderItem = document.createElement('li');

  orderItem.innerHTML = 
  `<img class="order__image" src="${catalogItemInfo.catalogItemImageSrc}" alt="${catalogItemInfo.catalogItemName}">

  <div class="order__product">
      <h3 class="order__product-title">${catalogItemInfo.catalogItemName}</h3>

      <p class="order__product-weight"${catalogItemInfo.catalogItemWeight}г</p>

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

  </li>`;

  orderList.appendChild(orderItem)
  orderItem.style.display = 'flex'
  orderItem.classList.add('order__item')
})


