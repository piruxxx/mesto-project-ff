import '../styles/index.css';
import { initialCards, createCard, likeCardHandler, deleteCard, renderCard } from './card.js';
import { openModal, closeModal } from '../scripts/modal.js';

// DOM-узлы
const cardList = document.querySelector('.places__list');
const imageModal = document.querySelector('.popup_type_image');

// Форма редактирования профиля
const formElement = document.querySelector('[name="edit-profile"]');
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_description');

// Модальные окна
const editModal = document.querySelector('.popup_type_edit');
const editButton = document.querySelector('.profile__edit-button');
const addModal = document.querySelector('.popup_type_new-card');
const addButton = document.querySelector('.profile__add-button');
const allModal = document.querySelectorAll('.popup');

// Вывод карточки на страницу
initialCards.forEach(card => {
    renderCard(createCard(card, deleteCard, openModal, likeCardHandler, imageModal), cardList);
});

allModal.forEach(element => element.classList.add('popup_is-animated'));

// Обработчики открытия модальных окон
editButton.addEventListener('click', () => {
    openModal(editModal, nameInput, jobInput)
});

addButton.addEventListener('click', () => {
    openModal(addModal)
});

const addModalForm = document.forms['new-place'];

addModalForm.addEventListener('submit', function (evt){
    evt.preventDefault();

    const cardName = addModalForm.querySelector('input[name="place-name"]').value;
    const cardLink = addModalForm.querySelector('input[name="link"]').value;

    evt.target.reset();
    
    closeModal(addModal);

    const newCardData = { name: cardName, link: cardLink };

    const newCard = createCard(newCardData, deleteCard, openModal, likeCardHandler);

    renderCard(newCard, cardList, true);
})

// Обработчик «отправки» формы
function handleFormSubmit(evt) {
    evt.preventDefault();

    const nameValue = nameInput.value;
    const jobValue = jobInput.value;

    document.querySelector('.profile__title').textContent = nameValue;
    document.querySelector('.profile__description').textContent = jobValue;

    closeModal(editModal);
}

formElement.addEventListener('submit', handleFormSubmit);
