// // Темплейт карточки
// const cardTemplate = document.querySelector('#card-template');

// // Функция создания карточки
// const createCard = (cardObject, deleteHandler, openModalHandler, likeCardHandler, imageModal) => {
//   const clone = cardTemplate.content.cloneNode(true);

//   clone.querySelector('.card__title').textContent = cardObject.name;
//   clone.querySelector('.card__image').src = cardObject.link;
//   clone.querySelector('.card__image').alt = cardObject.name;

//   const deleteButton = clone.querySelector('.card__delete-button');
//   deleteButton.addEventListener('click', deleteHandler);

//   const imageCard = clone.querySelector('.card__image');
//   imageCard.addEventListener('click', () => {
//       imageModal.querySelector('.popup__caption').textContent = cardObject.name;
//       imageModal.querySelector('.popup__image').src = cardObject.link;
//       imageModal.querySelector('.popup__image').alt = cardObject.name;
//       openModalHandler(imageModal);
//   });

//   const cardElement = clone.querySelector('.card');
//   cardElement.addEventListener('click', function (evt) {
//       if (evt.target.classList.contains('card__like-button')) {
//           likeCardHandler(evt.target);
//       }
//   });

//   return clone;
// };

// // Функция обработки лайка
// const likeCardHandler = (likeButton) => {
//   likeButton.classList.toggle('card__like-button_is-active');
// };

// // Функция удаления карточки
// const deleteCard = event => {
//   event.target.closest('.card').remove();
// };

// export { createCard, likeCardHandler, deleteCard };


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

  imageCard.addEventListener('click', () => {
    openModalHandler(cardObject);
  });
  deleteButton.addEventListener('click', deleteHandler);
  likeButton.addEventListener('click', likeCardHandler);

  return cloneCard;
};

// Функция обработки лайка
const likeCardHandler = (evt) => {
  evt.target.classList.toggle('card__like-button_is-active');
};

// Функция удаления карточки
const deleteCard = event => {
  event.target.closest('.card').remove();
};

export { createCard, likeCardHandler, deleteCard };