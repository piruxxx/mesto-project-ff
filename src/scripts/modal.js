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


// // Функция открытия модального окна
// export function openModal(element, nameInput, jobInput){
//     const isEditModal = element.classList.contains('popup_type_edit');

//     element.classList.add('popup_is-opened');

//     element.querySelector('.popup__close').addEventListener('click', function(){
//         closeModal(element);
//     });

//     element.addEventListener('click', function(event) {
//         if (event.target === element) {
//             closeModal(element);
//         }
//     });

//     const handleEscapeKey = (event) => {
//         if (event.key === 'Escape') {
//             closeModal(element);
//         }
//     };
        
//     document.addEventListener('keydown', handleEscapeKey);

//     element.handleEscapeKey = handleEscapeKey;

//     if (isEditModal) {
//         nameInput.value = document.querySelector('.profile__title').textContent;
//         jobInput.value = document.querySelector('.profile__description').textContent;
//     }
// };

// // Функция закрытия модального окна
// export function closeModal(element){
//     if (element) { 
//         element.classList.remove('popup_is-opened'); 
        
//         document.removeEventListener('keydown', element.handleEscapeKey);

//         element.handleEscapeKey = null;
//     };
// };