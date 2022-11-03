// 'use strict';

/*
 * Массиви: літерал масива, елементы, індексація, довжина
 * Посилання на статтю, як працює памєять в V8:  https://deepu.tech/memory-management-in-v8/
 * Arra.prototype: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries
 */

/*
 * TASK 1
 * Створіть масив genres з елементами «Jazz» и «Blues».
 * Додайте «Рок-н-ролл» у коніць.
 * Виведіть в консоль перший елемент масива.
 * Виведіть в консоль останній елемент масива. Код повинен працювати для масива довільної довжини.
 * Видаліть перший елемент та виведіть його в консоль.
 * Додайте «Country» та «Reggy» на початок масива.
 */

// const genres = ['Jazz', 'Blues'];

// // const genres2 = genres; // copy link to genres
// // const genres2 = [...genres]; // copy array from genres

// genres.push('Rock&Roll');
// const elem = genres.shift();
// console.log(elem);
// genres.unshift('Country', 'Reggy');
// console.log(genres);

/*
 * Передача по посиланню та по значенню
 */

/*
 * TASK 2
 * Створіть змінну a = 10.
 * Створіть та присвойте змінній b -> змінну a
 * Виведіть в консоль обидві ці змінні
 * Змініть значення змінної а та ще раз виведіть їх у консоль
 */

// let a = 10;
// const b = a;

// // console.log('a: ', a); // 10
// // console.log('b: ', b); // 10

// a = 20;

// console.log('a: ', a); // 20
// console.log('b: ', b); // 10

// ПРОСТІ ТИПИ ПЕРЕДАЮТЬ ЗНАЧЕННЯ.

/*
 * TASK 2
 * Створіть масив arr1 = [1, 2, 3].
 * Створіть та присвойте масиву arr2 -> масив arr1
 * Виведіть в консоль обидва ці масиви
 * Добавте елемент в масив arr1 та ще раз виведіть обидва масива в консоль
 */

// const arr1 = посілання: [1, 2, 3];
// const arr2 = arr1 посілання;

// console.log('arr1: ', arr1); // [1, 2, 3]
// console.log('arr2: ', arr2); // [1, 2, 3]

// arr1.push(10);

// console.log('arr1: ', arr1); // [1, 2, 3, 10]
// console.log('arr2: ', arr2); // [1, 2, 3, 10]

/*
 * Перебір масива циклами for та for...of
 */

/*
 * TASK 3
 * Напишіть скрипт для перебору масива fruits циклом for.
 * Для кажного елемента массива виведи в консоль строку в форматі номер_елемента: значення_елемента.
 * Нумерация элементов должна начинаться с 1.
 */

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let index = 0; index < fruits.length; index += 1) {
//   console.log(`${index + 1}: ${fruits[index]}`);
// }

// for (const fruit of fruits) {
//   console.log(fruit);
// }

/*
 * TASK 4
 * Напишіть скрипт для перебору масива fruits циклом for.. of.
 * Для кажного елемента массива виведыть в консоль:
 *  1. індекс
 *  2. індекс + значення.
 *  Використовувати методи keys та entries
 */

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (const index of fruits.keys()) {
//   console.log(index);
// }

// for (const [index, value] of fruits.entries()) {
//   console.log(index, value);
// }

// for (const value of fruits.values()) {
//   console.log(value);
// }

/*
 * TASK 5
 * Напишіть скрипт пошука самого маленького числа в масиві.
 * Код повинен працювати для довільного масива чисел.
 * Використовуючи цикл.
 */

// const numbers = [2, 17, 94, 1, -20, -1, 23, 37];
// let min = numbers[0];

// 1 Варіант рішення
// for (let i = 0; i < numbers.length; i += 1) {
//   console.group();
//   console.log('i: ', i);
//   console.log('min: ', min);
//   console.log('numbers: ', numbers[i]);
//   if (numbers[i] < min) {
//     min = numbers[i];
//     console.log(true);
//   }
//   console.groupEnd();
// }

// 2 Варіант рішення
// for (const number of numbers) {
//   if (number < min) {
//     min = number;
//   }
// }

// console.log(min);

/*
 * TASK 6
 * В нас є масив з зарплатами співробітників, треба порахувати загальну сумму зарплат
 */

// const salaries = [200, 450, 600, 150, 300];
// let total = 0;

// 1 Варіант рішення
// for (let i = 0; i < salaries.length; i += 1) {
//   total += salaries[i];
//   console.log(total);
// }

// 2 Варіант рішення
// for (const salary of salaries) {
//   total += salary;
// }

// console.log(total);

/*
 * TASK 7
 * В нас є декілька масивів з зарплатами співробітників з різних відділів,
 *  треба порахувати загальну сумму зарплат.
 */

// const managerSalaries = [100, 150, 250, 400, 500];
// const developersSalaries = [800, 1500, 4000];
// let total = 0;

// 1 Варіант рішення
// for (const managerSalary of managerSalaries) {
//   total += managerSalary;
//   console.log('managerSalaries: ', total);
// }

// for (const developerSalary of developersSalaries) {
//   total += developerSalary;
//   console.log('developersSalaries: ', total);
// }

// console.log(total);

// 2 Варіант рішення
// const salaries = [];

// for (const managerSalary of managerSalaries) {
//   salaries.push(managerSalary);
// }

// for (const developerSalary of developersSalaries) {
//   salaries.push(developerSalary);
// }

// for (const salary of salaries) {
//   total += salary;
// }

// console.log(total);

// 3 Варіант рішення
// const allSalaries = [].concat(managerSalaries, developersSalaries);
// const allSalaries = managerSalaries.concat(developersSalaries);
// const allSalaries = [...managerSalaries, ...developersSalaries];

// for (const salary of allSalaries) {
//   total += salary;
// }

// console.log(total);

/*
 * TASK 8
 * В нас є масив масивів з зарплатами співробітників з різних відділів, треба порахувати загальну сумму зарплат.
 */
// const salaries = [
//   [1000, 1200, 1100, 900, 940, 600, 1000, 900],
//   [1000, 1400, 1500, 1200, 1940, 700],
//   [1030, 1300, 1900, 800, 3940],
//   [1000, 1200, 1100, 1900, 240, 600],
//   [1020, 1200, 1100, 900, 1400, 400],
//   [1200, 1200, 1100, 900, 950, 1000, 3500],
//   [1040, 1200, 1100, 900, 800],
// ];

// let total = 0;

// for (const department of salaries) {
//   for (const salary of department) {
//     total += salary;
//   }
// }

// console.log(total);

// const result = [];

// for (const department of salaries) {
//   let total = 0;
//   for (const salary of department) {
//     total += salary;
//   }
//   result.push(total);
// }

// console.log(result);

/*
 * Базові методи: split и join, indexOf и includes, push, slice и splice, concat
 */

/*
 * TASK 9**
 * Напишіть скрипт який буде шукати значення кількості товарів на скаді з строки:
 * We found 1243 products in 18 categories by your request.
 */

// const string = 'We found 1243 products in 18 categories by your request.';
// const string = 'We found 180 categories and 124302 products by your request.';
// const array = string.split(' ');
// // console.log(array);
// for (let i = 0; i < array.length; i += 1) {
//   let current = Number(array[i]);
//   //   console.log(current);
//   if (current) {
//     // console.log(true);
//     if (array[i + 1] === 'products') {
//       console.log(current);
//     }
//   }
// }

/*
 * TASK 10
 * Напишіть скрипт який виводить в консоль ім'я та телефонний номер користувача.
 * В змінних names и phones зберігаються строки імен та телефонних номерів, розділені комами.
 */

// const names = 'Jacob,William,Solomon,Artemis';
// const namesArr = names.split(',');
// const phones = '89001234567,89001112233,890055566377,890055566300';
// const phonesArr = phones.split(',');

// console.log(namesArr);
// console.log(phonesArr);

// for (let i = 0; i < namesArr.length; i += 1) {
//   console.log(`${namesArr[i]}: ${phonesArr[i]}`);
// }

/*
 * TASK 11
 * Напишіть скрипт який повертає строку у зворотньому порядку.
 * Та виводить її в консоль.
 */

// 1 Варіант рішення
// const string = 'Welcome to the future';
// const charsArr = string.split('');
// // console.log(charsArr);
// const reverseCharsArr = [];

// for (let i = charsArr.length - 1; i >= 0; i -= 1) {
//   //   console.log(i);
//   reverseCharsArr.push(charsArr[i]);
// }
// console.log(reverseCharsArr);
// console.log(reverseCharsArr.join(''));

// 2 Варіант рішення
// const string = 'Welcome to the future';
// let reverseStr = '';

// for (let i = string.length - 1; i >= 0; i -= 1) {
//   reverseStr += string[i];
// }

// console.log(reverseStr);

/*
 * TASK 12
 * В нас є масив співробітників, відсортируйте його так, щоб співробітники не повторювались
 */

// const employees = ['Dennis', 'Shaw', 'Watkins', 'Ray', 'Shaw', 'Watkins'];
// const filteredEmployees = [];

// 0 === 0
// 1 === 1
// 2 === 2
// 3 === 3
// 1 === 4
// 3 === 5

// for (let i = 0; i < employees.length; i += 1) {
//   //   console.log('index current elem: ', employees.indexOf(employees[i]));
//   //   console.log('current index:', i);
//   if (employees.indexOf(employees[i]) === i) {
//     filteredEmployees.push(employees[i]);
//   }
// }

// console.log(filteredEmployees);

// // //* Array.prototype.splice: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// // //* Cпівробітник Shaw звільнився, видалити його з масива
// const indexOfRemovedElement = filteredEmployees.indexOf('Shaw');
// filteredEmployees.splice(indexOfRemovedElement, 1);

// console.log(filteredEmployees);

// // //? Додайте нового Cпівробітника Jhonson, перед Watkins;
// const indexOfWatkins = filteredEmployees.indexOf('Watkins');
// filteredEmployees.splice(indexOfWatkins, 1, 'Thornton');//замінить
// filteredEmployees.splice(indexOfWatkins, 0, 'Thornton');//добаве

// console.log(filteredEmployees);

// аналогія replace
// const title = 'Title 1'.split(' ').join('-'); // Title-1
// console.log(title);

// аналогія concat
// console.log([2, 4, 6].concat([1, 3], [5], [1, 2, 3, 4]));
// console.log([...[2, 4, 6], ...[1, 3], ...[5], ...[1, 2, 3, 4]]);
