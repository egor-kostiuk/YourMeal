









/* const orderItem = document.getElementsByClassName('order__item')[0] */

const productAddBtn = document.getElementsByClassName('product__add')[0]
const orderList = document.getElementsByClassName('order__list')[0]

productAddBtn.addEventListener('click', function() {
  const orderItem = document.createElement('li');

  orderItem.innerHTML = 
  `<img class="order__image" src="img/burger_1.jpg" alt="Супер сырный">

  <div class="order__product">
      <h3 class="order__product-title">${1}</h3>

      <p class="order__product-weight"${1}г</p>

      <p class="order__product-price">
          <span>${1}</span>
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


