/*
 * Example 0
 * Імперативний та деклоративний код
 * Імп - це послідовне виконнаня дій. Та спрощення коду до більш ранніх версій.
 * Дек - це описання задач та використання сучастного синтаксису і патрнів.
 * Ідеалу не існує.
 */

/*
 * Example 1
 * Колбек функції, функції вищого порядку
 */

// const foo1 = function (callback) {
//   // let callback = foo2;
//   callback();
// };

// const foo2 = function () {
//   console.log(`Hello!`);
// };

// foo1(foo2);

/**
 *  Запит на сервер
 **/
// const fetchUser = async function (userUrl, callback) {
//   const response = await fetch(`https://api.github.com/users/${userUrl}`);
//   const result = await response.json();

//   callback(result);
// };

// const showInfoAboutUser = function (user) {
//   console.log(user);
// };

// fetchUser('marvall', showInfoAboutUser);

/**
 * Виклик калбека по евенту на сторінкі
 * */
// const button = document.querySelector('.button');

// const logValues = function (event) {
// //   console.log(event);
//   //   console.log('Hi!');
// };

// button.addEventListener('click', logValues);
// //  {
// //     // перевіряти наш event.

// //     logValues(event)
// // }

/**
 * Виклик калбека по евенту у setTimeout
 * */

// const callback = function () {
//   console.log('hi');
// };
// setTimeout(callback, 1000);

// setTimeout(function () {
//   console.log('hi');
// }, 2000);

// setTimeout(() => {
//   console.log('hi');
// }, 3000);

/*
 * TASK 1
 * Напишіть функцію each(array, callback), котра першим параметром очікує масив,
 * а другим - функцію, котра викликається для кожного едементу масива
 * Функція each повинна повернути новий масив, елементами котрого будуть результати виклику коллбека.
 */

// const each = function (array, callback) {
//   let newArray = [];

//   for (const value of array) {
//     newArray.push(callback(value));
//   }

//   return newArray;
// };

// const callback1 = function (item) {
//   return item * 2;
// };

// const callback2 = function (item) {
//   return item.toString();
// };

// const callback3 = function (item) {
//   return item * item;
// };

// console.log(each([1, 2, 3, 4, 5], callback1));
// console.log(each([1, 2, 3, 4, 5], callback2));
// console.log(each([1, 2, 3, 4, 5], callback3));

// const some = function Some() {
//   console.log(arguments);
// };

// const some = function () {

// }

// function Some() {
//   console.log(arguments.callee);
// }

// const some = function Some() {
//   console.log(arguments.callee);
// };

// // const some = Some;

// some();

/*
 * TASK 2
 * Напишіть наступні функції:
 * createProduct(product, callback) - приймає об'ект товара без id,
 * а також колбек. Функція створює об'ект товара, додає ему унікальний
 * id та викликає колбек передає йому новий об'ект.
 * logProduct(product) - коллбек приймає об'ект продукта та логує його в консоль
 * logTotalPrice(product) - коллбек приймає об'ект продукта та вbводить в консоль ціну.
 */

// console.log(Date.now()); //unix time
// const createProduct = function (product, callback) {
//   const newProduct = {
//     id: Date.now(),
//     ...product,
//   };

//   callback(newProduct);
// };

// const logProduct = function (product) {
//   console.log(product);
// };

// const logTotalPrice = function ({ price, quantity } = {}) {
//   console.log(`Total price: ${price * quantity}`);
// };

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logProduct);

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logTotalPrice);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

/*
 * Example 2
 * Стрілкові функції, явне - неявне повернення, arguments, поврнення об'екта.
 * Круглі дужки підчас оголошння.
 * Чому не використовуємо стрілкові функціі в методах об'екта
 */

// const some = object => ({
//   id: Date.now(),
//   ...object,
// });

// console.log(
//   some({
//     name: 'Jhon',
//     email: 'example@domain.com',
//   })
// );

// const object = {
//   name: 'Jhon',
//   sayHello() {
//     console.log(this);
//     console.log(`${this.name} say: Hello`);
//   },
// };
// object.sayHello();

/**
 * TASK 3
 * Переписать TASK 1 на стрілкові функції
 */

// const each = (array, callback) => {
//   let newArray = [];

//   for (const value of array) {
//     newArray.push(callback(value));
//   }

//   return newArray;
// };

// const multiplyNumberOnTwo = number => number * 2;
// const convertNumberToString = number => number.toString();
// const squareOfNumber = number => number * number;

// console.log(each([1, 2, 3, 4, 5], multiplyNumberOnTwo));
// console.log(each([1, 2, 3, 4, 5], convertNumberToString));
// console.log(each([1, 2, 3, 4, 5], squareOfNumber));

/**
 * TASK 4
 * Переписать TASK 2 на стрілкові функції
 */

// const createProduct = (product, callback) => {
//   //   const newProduct = {
//   //     id: Date.now(),
//   //     ...product,
//   //   };

//   //   callback(newProduct);

//   callback({ id: Date.now(), ...product });
// };

// const createProduct = (product, callback) =>
//   callback({ id: Date.now(), ...product });

// const logProduct = product => console.log(product);

// const logTotalPrice = ({ price, quantity } = {}) =>
//   console.log(`Total price: ${price * quantity}`);

// //не бажано приберати тіло стрілочної функції, якщо вони не влазить в одну строку.
// // const logTotalPrice = ({ price, quantity } = {}) => {
// //   console.log(`Total price: ${price * quantity}`);
// // };

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logProduct);

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logTotalPrice);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

/*
 * Exapmle 3
 * forEach() как замена циклов for и for...of для массивов
 */

// const numbers = [1, 2, 3, 4, 5];

// const callback = (element, index, array) => {
//   console.log('element: ', element);
//   console.log('index: ', index);
//   console.log('array: ', array);
// };

// numbers.forEach(callback);

// numbers.forEach((el, idx, arr) => console.log(el));

// const ownForEach = function (array, callback) {
//   for (let i = 0; i < array.length; i += 1) {
//     callback(array[i], i, array);
//   }
// };

// ownForEach(numbers, (el, idx, arr) => {
//   console.log(el);
// });

// const numbers = [1, 2, 3, 4, 5];

// const getTotal = function (numbersArr) {
//   let total = 0;

//   // Через обычный for
//   //   for (let i = 0; i < numbersArr.length; i += 1) {
//   //     total += numbersArr[i];
//   //   }

//   // Через обычный for...of
//   for (const num of numbersArr) {
//     total += num;
//   }

//   // Через forEach();
//   numbersArr.forEach(el => (total += el));

//   return total;
// };

// console.log(getTotal(numbers));

/*
 * є функція, зробити рефакторіг, переписати її на forEach.
 */

// function logItems(items) {
//   console.log(items);

//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }

// const logItems = items =>
//   items.forEach((item, index) => console.log(`${index + 1} - ${item}`));

// const logItems = items => {
//   items.forEach((item, index) => {
//     console.log(`${index + 1} - ${item}`);
//   });
// };

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/*
 * є функція, зробити рефакторіг, переписати її на forEach та стрілкові функції.
 */

// function printContactsInfo({ names, phones } = {}) {
//   const nameList = names ? names.split(',') : [];
//   const phoneList = phones ? phones.split(',') : [];

//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// const printContactsInfo = ({ names, phones } = {}) => {
//   const nameList = names ? names.split(',') : [];
//   const phoneList = phones ? phones.split(',') : [];

//   nameList.forEach((name, index) => {
//     console.log(`${name}: ${phoneList[index]}`);
//   });
// };

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

/*
 * є функція, зробити рефакторіг, переписати її на forEach.
 */

// function calсulateAverage(...args) {
//   let total = 0;

//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }

//   return total / args.length;
// }

// const calсulateAverage = (...numbers) => {
//   let total = 0;

//   numbers.forEach(number => (total += number));

//   return total / numbers.length;
// };

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2
