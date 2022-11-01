'use strict';

//* Оператор більше (>)
// console.log(10 > 20);
// console.log(20 > 10);

//* Оператор меньше чи дорівнює (<=)
// console.log(5 <= 6);
// console.log(5 <= 5);
// console.log(5 <= 4);

//* Оператор більше чи дорівнює (>=)
// console.log(5 >= 3);
// console.log(5 >= 5);
// console.log(3 >= 4);

//* Не строга рівність (==)
// console.log(null > 0); //false
// console.log(null == 0); //false
// console.log(null >= 0); //true

// console.log(undefined == null);

// console.log('123' == 123);
// console.log(true == '1');
// console.log(4 == 5);

//* Строга рівність (===)
// console.log('123' === 123);
// console.log(null === null);
// console.log(2 + 2 === 4);
// console.log(0 === -0);

//* Не дорівнює (!=)
// console.log('4' != 4);

//* Строго не дорівнює (!==)
// console.log('4' !== 4);

/*
 * Логические операторы (&& || !)
 */

//* && - зупиняеться на false
//* Якщо всы операнди були істенні, поверне останній.
//* Якщо результат false, зупинеться і поверне результат відповідний до false

// const result = 8 && null && 'Hello!';

//* || - зупиняэться на true
//*  Поверне перше значення, що відповідає істені, якщо таких не знайде, то остяннє значення.

// const some =  undefined || 23 || 'string' || null

// const username = prompt('Your name?').trim() || 'Anonymus';

// console.log(`Hello ${username}`);

//* ! - інвертує true -> false та false -> true

// console.log(!1);

//? Логічні оператори
// console.log(true && 3);
// console.log(false && 3);
// console.log(true && 4 && 'kiwi');
// console.log(true && 0 && 'kiwi');
// console.log(true || 3);
// console.log(true || 3 || 4);
// console.log(true || false || 7);
// console.log(null || 2 || undefined);
// console.log((1 && null && 2) > 0); // opr1 > 0 // boolean
// console.log(null || (2 && 3) || 4);

//? Приведення типів.
// console.log(2 + 5 + '' + 1 + 0);
// console.log('' + 1 - 0); // '1' - 0 // 1 - 0
// console.log(true + false);
// console.log(6 / '3');
// console.log('2' * '3');
// console.log(4 + 5 + 'px');
// console.log('$' + 4 + 5);
// console.log('4' - 2);
// console.log('4px' - 2);
// console.log(typeof NaN);
// console.log(7 / 0);
// console.log(typeof Infinity);
// console.log('  -9  ' + 5);
// console.log(null + 1);

/*
 * Розгалуження if
 */

// if (true) {
//   const someVariable2 = 'string1';
//   console.log(someVariable);
// }

// const condition = confirm('yes or not');
// if (condition) {
//   const someVariable2 = 'string';
//   console.log(someVariable2);
// } else {
//   const someVariable2 = 'string2';
//   console.log(someVariable2);
// }

// const condition = confirm('yes or not');
// const condition2 = confirm('yes or not');
// if (condition && condition2) {
//   console.log('condition 1');
// } else if (condition && !condition2) {
//   console.log('condition 2');
// } else {
//   console.log('not correct condition');
// }

// const num = 3;

// if (num > 5) {
//   console.log('Hello!');
// }

/*
 * TASK 1
 * Запитати у користувача суму виразу 10 + 15.
 * Якщо результат буде вірним вивести в лог "That's right"
 */

// const result = Number(prompt('10 + 15'));
// if (result === 25) {
//   console.log("That's right");
// }

/*
 * TASK 2
 * Користувач вводить логін та пароль. Перевірити комбінацію.
 * Якщо комбінація вірна вивести повідомлення "Wellcome",
 * інакше "The username or password is incorrect". Зробити валідацію значення.
 */

// const loginFromBack = 'Anonymous'.toLowerCase();
// const passwordFromBack = '12345'.toLowerCase();

// const login = prompt('Введіть логін');
// const password = prompt('Введіть пароль');

// if (
//   login.toLowerCase() === loginFromBack &&
//   password.toLowerCase() === passwordFromBack
// ) {
//   alert('Wellcome');
// } else {
//   alert('The username or password is incorrect');
// }

/*
 * TASK 3
 * В змінній min лежить число від 0 до 59.
 * Треба вивести до якої чверті часу належить число (в першу, другу, третю чи четверту).
 * [0 до 15) - перша чверть
 * [15 до 30) - друга чверть
 * [30 до 45) - третя чверть
 * [45 до 60) - четверта чверть
 */

// const min = 70;

// if (min >= 0 && min < 15) {
//   console.log('перша чверть');
// } else if (min >= 15 && min < 30) {
//   console.log('друга чверть');
// } else if (min >= 30 && min < 45) {
//   console.log('третя чверть');
// } else if (min >= 45 && min < 60) {
//   console.log('четверта чврть');
// } else {
//   console.log('Значення не відповідає діапазону в 1 годину');
// }

/*
 * TASK 4
 * Напишіть код, котрий отримуе число через prompt, та виводить в console.log:
 * "Більше", якщо значення більше 0,
 * "Меньше", якщо значення меньше 0,
 * "Дорівнює", якщо значення дорівнює 0.
 * Перевірити, що результатом вводу буде число. Зпарсити число, перевірити тип.
 */

/*
 * TASK 5
 * Перевірити яка є default мова браузеру користувача (navigator.language)
 * Вивести "Укріїнська", "Англійська", "Російська"
 */

// console.log(window);
// console.log(navigator);

// const userBrowser = navigator.language;
// if (userBrowser.includes('ru')) {
//   console.log('Російська');
// } else if (userBrowser.includes('en')) {
//   console.log('Англійська');
// } else if (userBrowser.includes('ua')) {
//   console.log('Укріїнська');
// } else {
//   console.log('Сайт не має підтримки мови по замовчуванню');
// }

/*
 * Switch case
 */

// switch (значення) {
//   case значення:
//     інструкція;
//     break;

//   case значення:
//     інструкція;
//     break;

//   default:
//     інструкція;
// }

/*
 * TASK 6
 * Переписати попередню задачу з використанням switch:
 */

// const userBrowser = navigator.language;
// if (userBrowser.includes('ru')) {
//   console.log('Російська');
// } else if (userBrowser.includes('en')) {
//   console.log('Англійська');
// } else if (userBrowser.includes('ua')) {
//   console.log('Укріїнська');
// } else {
//   console.log('Сайт не має підтримки мови по замовчуванню');
// }

// const userBrowser = navigator.language;
// switch (userBrowser) {
//   case 'ru-RU':
//     console.log('Російська');
//     break;
//   case 'en-EN':
//     console.log('Англійська');
//     break;
//   case 'ua-UK':
//     console.log('Укріїнська');
//     break;
//   default:
//     console.log('Сайт не має підтримки мови по замовчуванню');
//     break;
// }

/*
 * Тернарний оператор
 */

//<умова> ? <вираз якщо вірно> : <вираз якщо не вірно>

/*
 * TASK 7
 * Перепишіть конструкцію if с використання умовного оператора '?':
 */
// const a = 2;
// const b = 1;
// let result;
// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Багато';
// }

// let result = a + b < 4 ? 'Мало' : 'Багато';
// console.log(a + b < 4 ? 'Мало' : 'Багато');

/*
 * TASK 8
 * Перепишіть if..else з використання послідовно тернарних операторів '?'.
 */

// const login = 'admin';
// let message;
// if (login === 'Працівник') {
//   message = 'Привіт';
// } else if (login == 'Директор') {
//   message = 'Вітаю';
// } else if (login == '') {
//   message = 'логін не знайдено';
// } else {
//   message = '___';
// }
// console.log(message);

// const login = 'Працівник';
// let message =
//   login === 'Працівник'
//     ? 'Привіт'
//     : login === 'Директор'
//     ? 'Вітаю'
//     : login == ''
//     ? 'логін не знайдено'
//     : '___';

// console.log(message);

//================ Цикли (while, do while, for) =================

/*
 * While
 */

// while (condition) {
//     //тіло цикла (statement)

//     //умова виходу з циклу.
// }

// let iterator = 0;
// iterator = iterator + 1;
// iterator += 1;
// iterator++;
// ++iterator;

// 0 < 5 = true
// 1 < 5 = true
// 2 < 5 = true
// 3 < 5 = true
// 4 < 5 = true
// 5 < 5 = false

// while (iterator < 5) {
//   console.log('Hello!');

//   iterator = iterator + 1;
// }

/*
 * TASK 9
 * Вивести числа від 1 до 50
 */

// let num = 1;

// while (num <= 50) {
//   console.log(num);

//   num += 1;
// }

/*
 * TASK 10
 * Знайти сумму чисел від 1 до 100
 */

// let number = 1;
// let result = 0;

// while (number <= 100) {
//   // result = result + number;
//   result += number;
//   number += 1;
// }

// console.log(result);

/*
 * TASK 11
 * Дано число n=1000.
 * Поділити його на 2 стільки разів, щоб результат був меньший за 50
 * Вивести дане число, вивести кількість ітерацій.
 */

// let n = 1000;
// let counter = 0;

// while (n / 2 > 50) {
//   counter += 1; // 1, 2, 3, 4
//   // n = n / 2
//   n /= 2; // 500, 250, 125, 62.5
// }

// console.log(counter);
// console.log(n);

/*
 * Do While
 */
// do {
// statement
// } while (condition);

/*
 * TASK 12
 * Користувач вводить логін та пароль. Перевірити комбінацію.
 * Якщо комбінація вірна вивести повідомлення "Wellcome",
 * інакше повторювати процедуру, поки ми не отримаемо вірні значення.
 * Зробити кількість ітерацій умовою, для виходу із циклу.
 */

// const loginFromBack = 'user';
// const passFromBack = '12345';
// let isLogined;
// let counter = 0;

// do {
//     // перевірку на аварыйний виход з циклу. Коли є якась помилка.

//     counter +=1
//     const login = prompt('Введіть логин');
//     const password = prompt('Введіть пароль');

//     if(login === loginFromBack && password === passFromBack){
//         isLogined = true;
//         alert("Wellcome")
//     }

// } while (!isLogined && counter < 3);

// let isLogined;
// let count = 0;
// do {
//   if (count > 3) {
//     break;
//   }
//   const login = prompt('Введіть логин');
//   const password = prompt('Введіть пароль');
//   if (login === 'user' && password === '12345') {
//     isLogined = true;
//     alert('Wellcome');
//     break;
//   } else {
//     alert('The username or password is incorrect');
//     count += 1;
//   }
// } while (!isLogined);

/*
 * For
 */
// for (ініціалізація; умова; пост-вираз) {
// тело цикла
// }

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }

/*
 * TASK 13
 * За допомогою цикла for вивести парны числа від 2 до 10.
 */

// for (let i = 2; i <= 10; i += 1) {
//   if (i % 2 !== 0) {
//     continue;
//   }

//   console.log(i);
// }

// for (let i = 0; i < 10; i += 1) {
//   if (i === 3) {
//     console.log('Мы нашли 3');
//     break;
//   }

//   console.log(i);
// }

/*
 * TASK 14
 * Паписати програму котра виводить в console.log всі числа від 1 до 100, з двома винятками.
 * для чиcел які діляться на 3, вона повинна виводити ‘Fizz’,
 * а для чисел, що діляться на 5 – ‘Buzz’.
 * Для чисел котрі кратні 3 та 5 = 'FizzBuzz'
 */

// 1 рішення
// for (let i = 1; i <= 100; i += 1) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(i);
//   }
// }

// 2 рішення
// for (let i = 1; i <= 100; i += 1) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz');
//     continue;
//   }

//   if (i % 3 === 0) {
//     console.log('Fizz');
//     continue;
//   }

//   if (i % 5 === 0) {
//     console.log('Buzz');
//     continue;
//   }

//   console.log(i);
// }

// 3 Рішення
// for (let i = 1; i <= 100; i += 1) {
//   let str = '';

//   if (i % 3 === 0) {
//     str += 'Fizz';
//   }

//   if (i % 5 === 0) {
//     str += 'Buzz';
//   }

//   console.log(str || i);
// }

/*
 * TASK 15
 * Вивести методом console.log() решітки від 1 до 7 штук в вигляді трикутника таким чином:
 * #
 * ##
 * ###
 * ####
 * #####
 * ######
 * #######
 */

// Рішення 1
// let star = '#';
// for (let i = 0; i < 7; i += 1) {
//   console.log(star);
//   star += '#';
// }

// Рішення 2
for (let i = 0; i < 7; i += 1) {
  let star = '';
  for (let j = 0; j <= i; j += 1) {
    star += '#';
  }
  console.log(star);
}

