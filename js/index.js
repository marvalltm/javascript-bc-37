'use strict';

/*
 * Example 1
 * Операция spread как замена concat и slice
 */

/*
 * Копія массива
 */
// const numbers = [1, 2, 3, 4, 5];

// const numbers2 = [...numbers];

// console.log('numbers: ', numbers);
// console.log('numbers2: ', numbers2);

// numbers2[0] = 10;

// console.log('numbers: ', numbers);
// console.log('numbers2: ', numbers2);

/*
 * Об'єднання масивів
 */

// const numbers = [1, 2, 3, 4, 5];
// const numbers2 = [10, 9, 8, 7];
// const allNumbers = [...numbers, ...numbers2];

// console.log(allNumbers);

/*
 * Розпилення масива в функцію
 */

// const numbers = [1, 2, 3, 4, 5];

// console.log(Math.max(...numbers));

/*
 * Операція spread как замена Object.assign({}, ...sources)
 */

// const user = {
//   firstName: 'Jonathan',
//   lastName: 'Barnett',
//   age: 30,
// };

// const user2 = { ...user };

// console.log('user: ', user);
// console.log('user2: ', user2);

// user2.firstName = 'Birdie';

// console.log('user: ', user);
// console.log('user2: ', user2);

/*
 * Розпилення складних типів. Проблема поверхносного роспилення.
 */

// const user = {
//   firstName: 'Jonathan',
//   lastName: 'Barnett',
//   age: 30,
//   someArr: [1, 2, 3, 4],
// };

// const user2 = { ...user };
// const user2 = _.cloneDeep(user);

// console.log('user: ', user);
// console.log('user2: ', user2);

// user2.someArr.push(10);

// console.log('user: ', user);
// console.log('user2: ', user2);

/*
 * Example 2
 * Операция rest
 */

/*
 * Напишіть функцію sum, котра суммує будь яку кілкість аргументів
 */

/*
 * Example 2
 * Деструктурізація об'єктів
 */

/**
 * Данний об'ект
 */

// const user = {
//   firstName: 'John',
//   lastName: 'Reese',
//   age: 30,
// };

/*
 * Напишіть деструктційне присвоення, котре:
 * для властивості firstName присвоіть до змінної firstName.
 * для властивості age присвоіть до змінної userAge.
 * для властивості isAdmin присвоіть до змінної isAdmin (false, якщо не має такого значення)
 */

// const { firstName, age: userAge, isAdmin = false } = user;

// console.log('firstName: ', firstName);
// console.log('userAge: ', userAge);
// console.log('isAdmin: ', isAdmin);

/*
 * Більш глибока деструктурізація об'єктів
 */

// const team = {
//   number: 4,
//   flag: './images/flag.jpg',
//   employees: ['Anton', 'Oleg', 'Ronnie', 'Carr'],
//   langs: {
//     original: 'uk',
//     secondary: 'en',
//   },
// };

// const { number, flag, employees, langs } = team;
// const { original: originalLang, secondary: secondaryLang } = langs;

// const {
//   number,
//   flag,
//   employees,
//   langs: { original: originalLang, secondary: secondaryLang },
// } = team;

// console.log('number: ', number);
// console.log('flag: ', flag);
// console.log('employees: ', employees);
// console.log('originalLang: ', originalLang);
// console.log('secondaryLang: ', secondaryLang);

/*
 * Деструктурізація масивів
 */

// const names = ['Herbert Todd', 'Belle Soto', 'Roger Marsh', 'Ethan Lindsey'];
// const [user1, , user2] = names;

// const rgb = [0, 255, 34];
// const [red, green, blue] = rgb;

// console.log('red: ', red);
// console.log('green: ', green);
// console.log('blue: ', blue);
