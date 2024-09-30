// Темплейт карточки
const cardTemplate = document.querySelector('#card-template');

export const initialCards = [
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    }
];

// Функция создания карточки
export const createCard = (cardObject, deleteHandler, openModalHandler, likeCardHandler, imageModal) => {
  const clone = cardTemplate.content.cloneNode(true);
  
  clone.querySelector('.card__title').textContent = cardObject.name;
  clone.querySelector('.card__image').src = cardObject.link;

  const deleteButton = clone.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', deleteHandler);

  const imageCard = clone.querySelector('.card__image');
  imageCard.addEventListener('click', () => {
      imageModal.querySelector('.popup__image').src = cardObject.link;
      imageModal.querySelector('.popup__caption').textContent = cardObject.name;
      openModalHandler(imageModal);
  });

  const cardElement = clone.querySelector('.card');
  cardElement.addEventListener('click', function (evt) {
      if (evt.target.classList.contains('card__like-button')) {
          likeCardHandler(evt.target);
      }
  });

  return clone;
};

// Функция обработки лайка
export const likeCardHandler = (likeButton) => {
  likeButton.classList.toggle('card__like-button_is-active');
};

// Функция удаления карточки
export const deleteCard = event => {
  event.target.closest('.card').remove();
};

// Функция рендера карточки
export const renderCard = (element, cardList, prepend = false) => {
  if (prepend) {
      cardList.prepend(element);
      return;
  }

  cardList.append(element);
};
