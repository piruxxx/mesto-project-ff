let currentOpenModal;

function openModal(element){
   currentOpenModal = element;
console.log(element);

    element.classList.add('popup_is-opened');
    document.addEventListener('keydown', handlerEscKeyCloseModal);
    document.addEventListener('click', handlerOverlayKeyCloseModal);
    element.querySelector('.popup__close').addEventListener('click', () => closeModal(element));
};

function closeModal(element){
    currentOpenModal = null;
    element.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', handlerEscKeyCloseModal);
    document.removeEventListener('click', handlerOverlayKeyCloseModal);
};

function handlerEscKeyCloseModal(event){
    if (event.key === 'Escape') {
        closeModal(currentOpenModal);
    };
};

function handlerOverlayKeyCloseModal(event){
    if (event.target === currentOpenModal){
        closeModal(currentOpenModal);
    };
};

export { openModal, closeModal };
