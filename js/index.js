// 'use strict';

/**
 * Example 1
 * Літерал об'екта, Синтаксис, Звернення до властивостей (через . через ['key']),
 * Перезапис значення. Додавання нових властивостей. Видалення об'ектів, видалення властивостей.
 * Копіювання Object.assing({}, object), {...object}.
 */

// const obj = {
//   name: 'Bob',
//   age: 25,
//   games: ['footbal', 'tenis'],
//   isWork: true,

//   sayHello: function () {
//     console.log('Hello');
//   },

//   contacts: {
//     email: 'example@domain.com',
//     phone: '8800-000-00-99',
//   },
// };

// console.log(obj.age);
// ============== Fn ===============

// const keyName = 'games';
// console.log(obj[keyName]);

// obj.age = 26;
// console.log(obj);
// obj.contacts.email = 'someemail@domain.com';
// obj['contacts']['email'] = 'example@domain.com';

// console.log(obj.contacts.email);

// const obj2 = obj;
// obj2.games.push('bascketball');

// console.log(obj2);
// console.log(obj);

// let games = obj.games;
// let games2 = [...obj.games];
// // games.push('new game');
// // console.log(obj2);

// games2.pop();
// console.log(obj2);
// console.log(games2);
// console.log(obj.status);
// obj.status = true;
// console.log(obj.status);
// delete obj.name;
// console.log(obj);

// const newObj = Object.assign(
//   {
//     username: 'Admin',
//     pet: 'cat',
//   },
//   obj
// );
// // console.log(newObj);
// obj.age = 30;
// console.log(newObj);

// const newObj = { ...obj };
// console.log(newObj);

/**
 * Example 2
 * Властивості та методи об'екта.
 */

//  const obj = {
//     name: 'Bob', // властивість
//     sayHello: function () {
//       console.log('Hello');
//     }, // метод

//   };

/**
 * Example 3
 * this в методах об'екта при звертанні до властивостей.
 */

// const obj = {
//   name: 'Bob',
//   getThis: function () {
//     console.log(this);
//   },
//   getName() {
//     console.log(this.name);
//     this.getThis();
//   },
// };
// // console.log(this);
// obj.getName();

/**
 * Example 4
 * Перебір об'ектов: for...in та методи Object.keys|values|entries|hasOwnProperty
 */

// const obj = {
//   name: 'Bob',
//   age: 25,
//   games: ['footbal', 'tenis'],
//   isWork: true,
//   sayHello: function () {
//     console.log('Hello');
//   },
//   contacts: {
//     email: 'example@domain.com',
//     phone: '8800-000-00-99',
//   },
// };

// for (const key in obj) {
//   //   console.log(key);
//   console.log(key + ' ' + obj[key]);
//   //   obj[key] = 'some new value';
// }

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));
// console.log(obj.hasOwnProperty('cat'));

// console.log(obj);
/**
 * Example 5
 * Методи: freeze, defineProperty
 */

// const obj = {
//   name: 'Bob',
//   age: 25,
//   games: ['footbal', 'tenis'],
//   isWork: true,
//   sayHello: function () {
//     console.log('Hello');
//   },
//   contacts: {
//     email: 'example@domain.com',
//     phone: '8800-000-00-99',
//   },
// };

// Object.freeze(obj);

// obj.name = 'James';
// console.log(obj);

// Object.defineProperty(obj, 'name', {
//   enumerable: false,
//   configurable: false,
//   writable: false,
//   //   value: 'static',
// });

// Object.defineProperty(obj, 'name', {
//   enumerable: true,
//   configurable: true,
//   writable: true,
//   //   value: 'static',
// });

// console.log(obj);
// obj.name = 20;

/**
 * Example 6
 * Работа с масивом объектов
 */
// const users = [
//   {
//     name: 'Bob',
//     age: 25,
//   },
//   {
//     name: 'Jhon',
//     age: 20,
//   },
//   {
//     name: 'James',
//     age: 30,
//   },
// ];

// //forEach
// //map
// //filter
// //sort
// //reduce
// users.push({
//   name: 'Calvin',
//   age: 50,
// });
// for (const item of users) {
//   console.group(item.name);
//   if (item.name === 'Calvin') {
//     item.isWork = true;
//   }
//   for (const key in item) {
//     console.log(key);
//   }
//   console.groupEnd();
// }

// console.log(users);

/**
 * Example 7
 * Всі сутності в js - це об'єкти.
 */
// const munber2 = 10;
// const number = new Number(10);
// console.log(typeof munber2);
// console.log(typeof number);
// const string = new String('Wellcome');
// const array = new Array(10, 20, 30);

// number.property = 5;
// string.someValue = 'lolo';
// array.MEGAINDEX = 10;

// console.log(number);
// console.log(string);
// console.log(array);

// console.log(number * number);
// console.log(string.toLowerCase());
// console.log(array.length);

/**
 * Example 8
 * Власні властивості, та не власні властивості.
 */

// const obj = {
//   cat: 'Catty',
//   dog: 'Doggy',
// };

// const obj2 = Object.create(obj);
// obj2.slon = 'Slonny';
// console.log(obj2);

// for (const key in obj2) {
//   console.log(key);
//   console.log(obj2.hasOwnProperty(key));
// }
// console.log(Object.keys(obj2));

function render(images) {
  // Відображати якусь галерею картинок.
}

function main() {
  // мы десь беремо цы картинки
  let images = [];

  render(images); //undfined
  //   if (render(images)) {
  //     render2();
  //   }
}

main();
