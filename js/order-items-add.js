const productAddBtn = document.querySelectorAll('.product__add')

productAddBtn.forEach(function (button, index) {
  button.addEventListener('click', function() {
    const orderList = document.getElementsByClassName('order__list')[0]
    const orderItem = document.createElement('li');

    // obtaining card information from the catalog
    const catalogItem = document.getElementsByClassName('catalog__item')[index]
    const catalogItemInfo = {
      catalogItemName: catalogItem.querySelector(".product__title button").textContent,
      catalogItemWeight: catalogItem.querySelector(".product__weight").textContent,
      catalogItemPrice: catalogItem.querySelector(".product__price span").textContent,
      catalogItemImageSrc: catalogItem.querySelector(".product__image").getAttribute("src"),
    }

    // filling created card with data
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
})


