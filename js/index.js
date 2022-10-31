'use strict';

/*
 * Базові примітивні типи: number, string, boolean, null і undefined. BigInt, Symbol
 */

// const number = 1;
// const string = 'asdasd adsdasdasd asdasdas asdasdasd';
// const bool = true // flase ;
// const nullVariable = null;
// const undefined = undefined;
// const dd = Symbol('aaa'); // укнікальні
// const dd2 = Symbol('aaa');// укнікальні

/*
 * Вивід данних: console.log та alert. Вкладка Console в Chrome Devtools
 */

// const ff = alert('some string');
// console.log(ff);

/*
 * Змінні: оголошення з let та const, найменування. Use Strict
 */

// let someSting = 'sdsd';
// const someSting2 = 'sdsd';

// hey = '22'; // ГРУБА ПОМИЛКА.
// console.log(hey);

/*
 * Отримання данних: prompt и confirm.
 */

// const promptResult = prompt('Some sting');
// console.log(promptResult);
// console.log(typeof promptResult);

// const confirmResult = confirm('Some sting');
// console.log(confirmResult);

/**
 * Числа и основні оператори: "+" "-" "*" "/" "%" "**"
 */

// ======================= TASKS ===========================

/**
 * TASK 1
 * Є два чила 10 и 20 провести над ними всі математичні операції.
 */

// const number1 = 17;
// const number2 = 5;

// const result = number1 % number2; // 1
// console.log('result: ', result);
/**
 * TASK 2
 * Перевірити чи будуть числа 10, 15, 20, 25 парні та непарні.
 */
// const result = 10 % 2 ? false : true;
// console.log('10 % 2: ', result);
// console.log('15 % 2: ', 15 % 2 ? false : true);
// console.log('20 % 2: ', 20 % 2 ? false : true);
// console.log('25 % 2: ', 25 % 2 ? false : true);

/**
 * TASK 3
 * Дано 90 хвилин. Відобразити скільки це годин і скільки хвилин.
 * Записати формат 00:00 (використовуючи padStart())
 */
// const mins = 90;
// const hours = parseInt(mins / 60); //1.5
// const secondPart = mins % 60; // 30
// console.log((hours + ':' + secondPart).padStart(5, '0'));

// const mins = 61;
// const newHours = ('' + hours).padStart(2, '0');
// const newSecondPart = ('' + secondPart).padStart(2, '0');
// console.log(`${newHours}:${newSecondPart}`);

/**
 * TASK 4
 * Користувач вводить (prompt) значення відстані у форматі "105.5km" та "105,6km".
 * Перетворити значення на числа, з урахування не вірного синтаксису (replace, slice, indexOf)
 */

// let resultPrompt = prompt('Будь ласка введыть відстать у форматі 105.7km');
// resultPrompt = resultPrompt.replace(',', '.');
// console.log(resultPrompt);
// console.log(parseFloat(resultPrompt));

// let resultPrompt = '105,7km';
// const index = resultPrompt.indexOf(',');
// const part1 = resultPrompt.slice(0, index);
// const part2 = resultPrompt.slice(index + 1);
// const result = `${part1}.${part2}`;

// console.log(parseFloat(result));

// =========================================================================================

/**
 * TASK 5
 * Є строка 24px. Спарсити числове значення.
 * Розрахувати нове значення. Вивести в консоль "нове значеня" + px
 */

// const value = '24px';
// console.log(parseInt(value) - 8 + 'px');

/*
 * Math.floor, Math.ceil, Math.round, Math.max, Math.min, Math.pow(), Math.random(), Math.sqrt
 */

/*
 * TASK 6
 * Дано число 23.5, Треба округлити його за допомогою Math.floor, Math.ceil, Math.round.
 * Приклади на числах, 23.1, 23.9
 */

// const number = 23.5;
// console.log('Math.floor: ', Math.floor(number)); // в меньшу сторону.
// console.log('Math.ceil: ', Math.ceil(number)); //в більшу сторону
// console.log('Math.round: ', Math.round(number)); // по правилам мат.

// let number2 = 30.3337; //  30.33X
// console.log(Math.round(number2 * 1000) / 1000);

/*
 * TASK 7
 * Користувач вводить число та ступінь. Вивести результат Math.pow, Math.sqrt
 */
// const number = Number(prompt('Ваше число'));
// const pow = Number(prompt('Введіть ступінь'));
// const result = Math.pow(number, pow); // number**pow
// const result2 = Math.sqrt(number); // квадратний корінь
// console.log(result);
// console.log(result2);

/*
 * Сгенеруйте рандомне число:
 * от 0 до 1;
 * от 10 до 50.
 */
// const min = 10;
// const max = 50;
// const result = Math.floor(min + Math.random() * (max + 1 - min));

// console.log(result);
// let r = (Math.random() + 1).toString(36);
// console.log('random: ', r);

/*
 * Конкатенація строк, шаблонні строки
 */

/*
 * TASK 8
 * Користувач вводить ім'я та вік. Вивести в консоль "Вітаю _____, ваш вік ______"
 * Повторити з шаблонною строкою та без.
 */
// const name = prompt("Введіть ім'я");
// const age = prompt('Введіть вік');
// console.log(`Вітаю ${name}, ваш вік ${ageZ}`);

/*
 * TASK 9
 * Користувач вводить ім'я. Ввивести в консоль довжину слова.
 * Превести слово до нижньго регістру, до верхнього регістру.
 * Зробити першу букву заглавною. (str[0] + str.slice())
 */
// let name = prompt("Введіть ім'я");
// console.log('Довжину: ', name.length);
// console.log('до нижньго регістру: ', name.toLowerCase());
// console.log('до верхнього регістру: ', name.toUpperCase());
// console.log(name[0].toUpperCase() + name.slice(1).toLowerCase());

/*
 * TASK 10
 * Є строка 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++'.
 * Дізнатись чи містить строка: 'JavaScript', чи 'JS ?.
 * Якщо є, знайти індекс початку строки.
 */
// let languagesStr = 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++'.toLowerCase();
// const subStr = 'js';
// const isInclude = languagesStr.includes(subStr.toLowerCase());
// const indexOfSubStr = languagesStr.indexOf(subStr);
// console.log(indexOfSubStr);

/*
 * TASK 11
 * Є строка строка '24px'. Дізнатись на що закінчуеться строка %, rem, em или px
 */
// const str = 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++';
// const subStr = '++';
// console.log(str.endsWith(subStr));

/*
 * TASK 12
 * У нас є строка:
 * 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy'.
 * Замінити всі вхождення dog на monkey.
 */
// let str = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
// str = str.replaceAll('dog', 'monkey');
// console.log(str);

/*
 * Оператори порівняння (<, >, <=, >=, ==, ===, !=, !==)
 */

/*
 * В результаті порівняння буде булеве значення.
 * Строки порівнюються по unicode.
 * При порівнянні строк, строки порівнюються посимвольно.
 * При порівнянні різних типів, операнди приводяться до числа.
 * null не дорівнює нічому окрім себе та undefined.
 * undefined не дорівнює нічому окрім себе та null.
 */

/*
 * Приведення різних типів к числа:
 * true --> 1
 * false --> 0
 * '' --> 0
 * null --> 0
 * undefined --> 0
 */

//* Оператор меньше (<)
// console.log(2 < 12);
// console.log(12 < 2);
// console.log('a' < 'b');
// console.log('b' < 'a');
// console.log('A' < 'a');
// console.log('apple' < 'bananana');
// console.log('bananana' < 'apple');
// console.log(true < false);
// console.log(false < true);

// =====================================================================================================

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
// const result = 4 && null && 'Hello!';

// console.log(result);

//* || - зупиняэться на true
//*  Поверне перше значення, що відповідає істені, якщо таких не знайде, то остяннє значення.

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
// console.log((1 && null && 2) > 0);
// console.log(null || (2 && 3) || 4);

//? Приведення типів.
// console.log(2 + 5 + '' + 1 + 0);
// console.log('' + 1 - 0);
// console.log(true + false);
// console.log(6 / '3');
// console.log('2' * '3');
// console.log(4 + 5 + 'px');
// console.log('$' + 4 + 5);
// console.log('4' - 2);
// console.log('4px' - 2);
// console.log(7 / 0);
// console.log('  -9  ' + 5);
// console.log(null + 1);
