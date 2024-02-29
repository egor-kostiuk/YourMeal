export function createCatalogItemInfoCard(catalogItemInfo) {
  const catalogItemInfoElement = document.createElement('li');
  catalogItemInfoElement.innerHTML = `
  <div class="modal modal_product">
  <div class="modal__main modal-product">
      <div class="modal-product__container">
          <h2 class="modal-product__title">${catalogItemInfo.catalogItemName}</h2>
          <div class="modal-product__content">
              <img src="${catalogItemInfo.catalogItemImageSrc}" class="modal-product__image">
              <p class="modal-product__descr">
                  Супер мясное наслаждение! 
                  Большая рубленая котлета из свежего говяжего мяса покорит вас своей сочностью, 
                  а хрустящие листья салата добавят свежести.
              </p>       
              <div class="modal-product__ingredients ingredients">
                  <h3 class="ingredients__title">Состав:</h3>
                  <ul class="ingredients__list">
                      <li class="ingredients__item">Пшеничная булочка</li>
                      <li class="ingredients__item">Котлета из говядины</li>
                      <li class="ingredients__item">Красный лук</li>
                      <li class="ingredients__item">Листья салата</li>
                      <li class="ingredients__item">Соус горчичный</li>
                  </ul>
                  <p class="ingredients__calories">${catalogItemInfo.catalogItemWeight}, ккал 430</p>
              </div>
          </div>
          <div class="modal-product__footer">
              <div class="modal-product__add">
                  <button class="modal-product__btn">Добавить</button>

                  <div class="modal-product__count count">
                      <button class="count__minus">-</button>

                      <p class="count__amount">1</p>

                      <button class="count__plus">+</button>
                  </div>
              </div>
              <p class="modal-product__price">
                  <span>${catalogItemInfo.catalogItemPrice}</span>
                  <span class="currency">₴</span>
              </p>
          </div>
      </div>
      <button class="modal__close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <rect x="5.07422" y="5.28247" width="1" height="20" transform="rotate(-45 5.07422 5.28247)"/>
              <rect x="5.78125" y="19.4246" width="1" height="20" transform="rotate(-135 5.78125 19.4246)"/>
          </svg>                        
      </button>
  </div>
</div>
  `;
  return catalogItemInfoElement
}