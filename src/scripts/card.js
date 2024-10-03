// Функция клонирования карточки
const getCardTemplate = () => document.querySelector('#card-template').content.cloneNode(true);

// Функция создания карточки
const createCard = (cardObject, deleteHandler, openModalHandler, likeCardHandler) => {
  const cloneCard = getCardTemplate();

  const cardTitle = cloneCard.querySelector('.card__title');
  const imageCard = cloneCard.querySelector('.card__image');
  const deleteButton = cloneCard.querySelector('.card__delete-button');
  const likeButton = cloneCard.querySelector('.card__like-button');

  cardTitle.textContent = cardObject.name;
  imageCard.src = cardObject.link;
  imageCard.alt = cardObject.name;

  imageCard.addEventListener('click', () => openModalHandler(cardObject));
  deleteButton.addEventListener('click', deleteHandler);
  likeButton.addEventListener('click', likeCardHandler);

  return cloneCard;
};

// Функция обработки лайка
const likeCardHandler = evt => {
  evt.target.classList.toggle('card__like-button_is-active');
};

// Функция удаления карточки
const deleteCard = event => {
  event.target.closest('.card').remove();
};

export { createCard, likeCardHandler, deleteCard };
