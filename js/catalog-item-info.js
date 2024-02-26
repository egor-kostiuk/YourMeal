const catalogItem = document.getElementsByClassName('catalog__item')[0]

const catalogItemInfo = {
  catalogItemName: catalogItem.querySelector(".product__title button").textContent,
  catalogItemWeight: catalogItem.querySelector(".product__weight").textContent,
  catalogItemPrice: catalogItem.querySelector(".product__price span").textContent,
  catalogItemImageSrc: catalogItem.querySelector(".product__image").getAttribute("src"),
}

export {
  catalogItemInfo
}