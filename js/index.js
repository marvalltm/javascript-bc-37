'use strict';
/**
 *  ================ Example 1 ==================
 * Створення видалння слухачів подій.
 * Створити референс до наших кнопок. На одну з повісити зміну картинки.
 * До іншої відалення слухача.
 *
 * `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/200/300`
 *
 * Розширити функціол, вробити кнопку вимкненою, якщо на ній не має слухача.
 * На sub повісити функціонал який буде дотавати слухачі чи видаляти з main button
 */

// const mainAction = document.querySelector('.js-main-action');
// const subAction = document.querySelector('.js-sub-action');
// const image = document.querySelector('.image');

// const handler = event => {
//   image.src = `https://picsum.photos/id/${Math.floor(
//     Math.random() * 1000
//   )}/200/300`;
// };

// const deleteLisenerHandler = event => {
//   if (!mainAction.disabled) {
//     mainAction.removeEventListener('click', handler);
//     mainAction.classList.add('disabled');
//     mainAction.disabled = true;
//   } else {
//     mainAction.addEventListener('click', handler);
//     mainAction.classList.remove('disabled');
//     mainAction.disabled = false;
//   }
// };

// subAction.addEventListener('click', deleteLisenerHandler);
// mainAction.addEventListener('click', handler);

/**
 * ================ Example 2 ==================
 * Розглянути обьект Event. Як отримати доступ. Що за властивосты доступні.
 */

// const image = document.querySelector('.image');
// // const handler = event => {};

// // mainAction.addEventListener('click', handler);

// // callback функції для слухачів. Іменування:
// // handle[Назва дії]
// // [Назва дії]handler
// // on[Назва дії]
// // const handleMainAction = ( ) => {}

// window.addEventListener('scroll', e => {
//   console.log(e);
// });
// image.addEventListener('click', e => {
//   console.log(e);
// });
/**
 *  ================ Example 3 ==================
 * Створення слухачів для подій:
 * click, change, input, submit, focus, blur
 *
 * Необхідно використовуючи preventDefault,
 * stopPropogation прибрати дефолтну поведінку форми.
 *
 * Написати валідатор для форми.
 */

// const inputName = document.querySelector('#name');
// const select = document.querySelector('#select');
// const acionButton = document.querySelector('.js-form-action');
// const form = document.querySelector('.form');
// // input.addEventListener('focus', event => {
// //   console.log(event.type);
// // });
// // input.addEventListener('blur', event => {
// //   console.log(event.type);
// // });

// // select.addEventListener('input', event => {
// //   console.log(event.target.value);
// // });
// // select.addEventListener('change', event => {
// //   console.log(event);
// // });

// form.addEventListener('submit', event => {
//   console.log(event);
//   event.preventDefault();
// });

// const inputName = document.querySelector('#name');
// const inputEmail = document.querySelector('#email');
// const select = document.querySelector('#select');
// const form = document.querySelector('.form');

// const validation = function () {
//   let statusName = inputValidation(inputName);
//   let statusEmail = inputValidation(inputEmail);
//   let statusSelect = selectValidation(select);
//   if (statusName && statusEmail && statusSelect) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const inputValidation = target => {
//   if (target.value && target.value.length > 2) {
//     target.parentNode.classList.remove('unvalid');
//     return true;
//   } else {
//     target.parentNode.classList.add('unvalid');
//     return false;
//   }
// };

// const selectValidation = target => {
//   if (target.value && Number(target.value) > 0) {
//     target.parentNode.classList.remove('unvalid');
//     return true;
//   } else {
//     target.parentNode.classList.add('unvalid');
//     return false;
//   }
// };

// inputName.addEventListener('input', event => inputValidation(event.target));
// inputEmail.addEventListener('input', event => inputValidation(event.target));
// select.addEventListener('change', event => selectValidation(event.target));
// form.addEventListener('submit', event => {
//   event.preventDefault();
//   console.log(validation());
// });

/**
 *  ================ Example 4 ==================
 * Створення слухачів для подій:
 * keydown, keyup, keypress нажимання клавіатури.
 *
 * Написати модальне вікно, яке буде закриватись по кліку на оверлей
 * на кнопку закрити, або клавіша "ESC".
 */

// // const img = document.querySelector('.image');
// const body = document.querySelector('body');
// // // const document = document;

// document.addEventListener('keypress', e => {
//   console.log(e);
//   //   if (e.code === 'Tab') {
//   //     alert('some body was told me');
//   //   }
// });
// const modal = document.querySelector('.modal');
// const mainAction = document.querySelector('.js-main-action');
// const modalOverflow = document.querySelector('.overflow');
// const closeAction = document.querySelector('.js-close-modal');
// const body = document.querySelector('body');

// mainAction.addEventListener('click', () => {
//   modal.classList.remove('hidden');
//   openModal();
// });

// const closeModalClickHandler = event => {
//   if (event.target === event.currentTarget) {
//     modal.classList.add('hidden');
//   }
//   closeModal();
// };
// const closeModalEscapeHandler = event => {
//   modal.classList.add('hidden');
//   closeModal();
// };

// const openModal = function () {
//   closeAction.addEventListener('click', closeModalClickHandler);
//   body.addEventListener('keydown', closeModalEscapeHandler);
//   modalOverflow.addEventListener('click', closeModalClickHandler);
// };

// const closeModal = function () {
//   closeAction.removeEventListener('click', closeModalClickHandler);
//   modalOverflow.removeEventListener('click', closeModalClickHandler);
//   body.removeEventListener('keydown', closeModalEscapeHandler);
// };
