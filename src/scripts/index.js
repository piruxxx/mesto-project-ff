import '../styles/index.css';
import { openModal, closeModal } from './modal.js';
import { initialCards } from './cards.js';
import { createCard, likeCardHandler, deleteCard } from './card.js';

// DOM-узлы
const cardList = document.querySelector('.places__list');
const imageModal = document.querySelector('.popup_type_image');
const addModalForm = document.forms['new-place'];
const cardName = addModalForm.querySelector('input[name="place-name"]');
const cardLink = addModalForm.querySelector('input[name="link"]');

// Форма редактирования профиля
const formEditProfile = document.querySelector('[name="edit-profile"]');
const nameInput = formEditProfile.querySelector('.popup__input_type_name');
const jobInput = formEditProfile.querySelector('.popup__input_type_description');

// Модальные окна
const editModal = document.querySelector('.popup_type_edit');
const buttonOpenEditProfileForm = document.querySelector('.profile__edit-button');
const addModal = document.querySelector('.popup_type_new-card');
const buttonOpenAddCardForm = document.querySelector('.profile__add-button');
const popups = document.querySelectorAll('.popup');

// Функция рендера карточки
const renderCard = (element, prepend = false) => {
    if (prepend) {
        cardList.prepend(element);
        return;
    }
  
    cardList.append(element);
  };

// Вывод карточки на страницу
initialCards.forEach(card => {
    renderCard(createCard(card, deleteCard, showPopupImage, likeCardHandler));
});

popups.forEach(element => element.classList.add('popup_is-animated'));

// Обработчики открытия модальных окон
buttonOpenEditProfileForm.addEventListener('click', () => {
    openModal(editModal, nameInput, jobInput)
});

buttonOpenAddCardForm.addEventListener('click', () => openModal(addModal));

addModalForm.addEventListener('submit', function (evt){
    evt.preventDefault();
    
    const newCardData = { 
        name: cardName.value, 
        link: cardLink.value 
    };

    evt.target.reset();
    closeModal(addModal);

    const newCard = createCard(newCardData, deleteCard, showPopupImage, likeCardHandler);

    renderCard(newCard, true);
})

function showPopupImage(cardObject){
    const popupImage = imageModal.querySelector('.popup__image');
    const popupCaption = imageModal.querySelector('.popup__caption');

    popupCaption.textContent = cardObject.name;
    popupImage.src = cardObject.link;
    popupImage.alt = cardObject.name;

    openModal(imageModal);
};

// Обработчик «отправки» формы
function submitFormEditProfile(evt) {
    evt.preventDefault();

    const nameValue = nameInput.value;
    const jobValue = jobInput.value;

    document.querySelector('.profile__title').textContent = nameValue;
    document.querySelector('.profile__description').textContent = jobValue;

    closeModal(editModal);
}

formEditProfile.addEventListener('submit', submitFormEditProfile);
