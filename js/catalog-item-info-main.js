import { createCatalogItemInfoCard } from './create-catalog-item-info-card.js'

// catalog item info button 
const detailButton = document.querySelectorAll('.product__detail');

detailButton.forEach((button, index) => {
  button.addEventListener('click', () => handleOfCatalogItemInfoClick (index));
});

// main function
function handleOfCatalogItemInfoClick(index) {

  // create catalogItemInfoList
  const catalogItemInfoList = document.createElement('ul');

  // create a modal window after footer
  const footer = document.querySelector('.footer');
  footer.after(catalogItemInfoList);

  const catalogItem = document.querySelector(`.catalog__item:nth-child(${index + 1})`); // Используем :nth-child() для получения нужного элемента
  const catalogItemInfo = {
    catalogItemName: catalogItem.querySelector(".product__detail-name").textContent,
    catalogItemWeight: catalogItem.querySelector(".product__weight").textContent,
    catalogItemPrice: +catalogItem.querySelector(".product__price span").textContent, // Преобразуем в число
    catalogItemImageSrc: catalogItem.querySelector(".product__image").getAttribute("src"),
  };

  // create info modal info
  const infoItem = createCatalogItemInfoCard(catalogItemInfo);
  catalogItemInfoList.append(infoItem);

  // open info modal window
  const modal = document.querySelector('.modal');
  modal.classList.add('modal_open');

  // close info modal window
  const closeButton = document.querySelector('.modal__close');
  closeButton.addEventListener('click', closeModal); 
  
  // function to close an info modal window
  function closeModal() {
    modal.classList.remove('modal_open');
    catalogItemInfoList.remove();
  };
};

