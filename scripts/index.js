// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template');

// @todo: DOM узлы
const cardList = document.querySelector('.places__list');

// @todo: Функция создания карточки
const createCard = (cardObject, deleteHandler) => {
    const clone = cardTemplate.content.cloneNode(true);
    clone.querySelector('.card__title').textContent = cardObject.name;
    clone.querySelector('.card__image').src = cardObject.link;
   
    const deleteButton = clone.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', deleteHandler);

    return clone;
};

const renderCard = (element) => {
    cardList.append(element);
};

// @todo: Функция удаления карточки
const deleteCard = event => {
    event.target.closest('.card').remove();
};

// @todo: Вывести карточки на страницу
initialCards.forEach(card => {
    renderCard(createCard(card, deleteCard));
});