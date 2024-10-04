function openModal(element){
    element.classList.add('popup_is-opened');
    document.addEventListener('keydown', handlerEscKeyCloseModal);
    document.addEventListener('click', handlerOverlayKeyCloseModal);
};

function closeModal(element){
    element.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', handlerEscKeyCloseModal);
    document.removeEventListener('click', handlerOverlayKeyCloseModal);
};

function handlerEscKeyCloseModal(event){
    if (event.key === 'Escape') {
        closeModal(document.querySelector('.popup_is-opened'));
    };
};

function handlerOverlayKeyCloseModal(event){
    if (event.target === document.querySelector('.popup_is-opened')){
        closeModal(document.querySelector('.popup_is-opened'));
    };
};

export { openModal, closeModal };
