'use strict';
/*
 *  ================ Грязні та чисті функції ================
 */

//! Dirty function
// const numbers = [1, 2, 3, 4, 5];

// const pushNumbers = (...args) => {
//   numbers.push(...args);
// };

// pushNumbers(9, 6, 8);

// console.log(numbers);

//? Clear function
// const numbers = [1, 2, 3, 4, 5];

// const pushNumbers = (numbersArr, ...args) => {
//   const copyNumbersArr = [...numbersArr];

//   copyNumbersArr.push(...args);

//   return copyNumbersArr;
// };

// const changedNumbers = pushNumbers(numbers, 9, 6, 8);

// console.log('numbers: ', numbers);
// console.log('copy of numbers: ', changedNumbers);

//! Dirty function
// const numbers = [123, 56, 78, 9, 3];

// const doubleMulti = function (arr) {
//   for (let i = 0; i < arr.length; i += 1) {
//     arr[i] *= 2;
//   }
// };

// doubleMulti(numbers);

// console.log(numbers);

//? Clear function
// const numbers = [123, 56, 78, 9, 3];

// const doubleMulti = function (arr) {
//   const numbersCopyArr = [...arr];

//   for (let i = 0; i < numbersCopyArr.length; i += 1) {
//     numbersCopyArr[i] *= 2;
//   }

//   return numbersCopyArr;
// };

// const result = doubleMulti(numbers);

// console.log('numbers: ', numbers);
// console.log('copy of numbers: ', result);

/*
 *  ===================== Метод map() ===============================
 */

// масив.map((element, index, array) => {
//  Тіло коллбек-функції
// });

// array.map((currentElement, index, array) => {});

// array.map(currentElement => {

// });

/**
 * TASK 1
 * Є масив треба помножити всі числа на 2
 */

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.map(item => item * 2));

/*
 * TASK 2
 * Напишіть цикл використовуючи map. Сторити функцію, яка повертає
 * новий масив з довжиною слів з ісходного масива.
 */

// const wordsArr = ['Есть', 'жизнь', 'на', 'Марсе'];
// console.log(wordsArr.map(item => item.length));

/*
 * Створити масив значень Фаренгейта з масива значень Цельсія
 * Формула: F = C * 1.8 + 32
 */

// const celsius = [-15, -5.55, 0, 10, 16, 20, 24, 32];
// console.log(celsius.map(item => Number((item * 1.8 + 32).toFixed(2))));

/*
 * Нехай функція getModels повертає новий масив моделей (поле model) всіх автомобілей.
 */

// const cars = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
// ];

// const getModels = cars => {
//   return cars.map(car => car.model);
// };
// console.log(getModels(cars));

// const getCarsAmount = cars => {
//   return cars.map(car => ({
//     make: car.make,
//     model: car.model,
//     amount: car.amount,
//   }));
// };
// console.log(getModels(cars));
// console.log(getCarsAmount(cars));
/*
 * Нехай функція makeCarsWithDiscount повертає новий масив об'єктів з зміненним значенням властивості price
 * в залежності від скидки.
 */

// const makeCarsWithDiscount = (cars, discont) => {
//   return cars.map(car => ({
//     ...car,
//     price: discont ? car.price - car.price * discont : car.price,
//   }));
// };

// console.table(cars);
// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

// console.log([1, 2, 3, 4, 5].map(item => 'slon'));

// const arr = [
//   { name: 'asdas', someArr: [1, 2, 3, 4, 5] },
//   { name: 'asdasdas', someArr: [1, 2, 3, 5] },
//   { name: 'asasddas', someArr: [1, 2, 5, 10, 20] },
// ];

// const arr2 = [...arr];
// const arr3 = arr.map(item => ({ ...item, someArr: [...item.someArr] }));
// arr3[0].someArr.push(10, 20, 30);

// console.log(arr);
// console.log(arr2);
// console.log(arr3);
/*
 *  ===================== Метод filter() ===============================
 */

// масив.filter((element, index, array) => {
// Тіло калбек функціх
// });

/*
 * Відфільтруйте масив, так щоб залишились тільки парні елементи
 */

// const numbers = [1, 2, 3, 4, 5, 6];
// console.log(
//   numbers.filter(item => {
//     if (item % 2 === 0) {
//       return 1;
//     } else {
//       return 0;
//     }
//   })
// );

/*
 * Відфільтруйте масив, залишити в ньому тільки позитивні числа:
 */

// const numbers = [-2, 5, 1, -5, -1, 1, 3, 4, -1];
// console.log(numbers.filter(num => num > 0));

/*
 * Відфільтруйте масив heroes по властивості об'єкта franchise.
 */

// const heroes = [
//   { name: 'Batman', franchise: 'DC' },
//   { name: 'Ironman', franchise: 'Marvel' },
//   { name: 'Thor', franchise: 'Marvel' },
//   { name: 'Superman', franchise: 'DC' },
// ];

// const filteredByFranchise = (heroesArr, franchise) => {
//   return heroesArr.filter(hero => hero.franchise === franchise);
// };

// console.log(filteredByFranchise(heroes, 'DC'));

/*
 * Нехай функція filterByPrice повертає масив автомобілів ціна котрих
 * меньше за значення параметра threshold.
 */

// const cars = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
// ];

// const filterByPrice = (cars, threshold) => {
//   return cars.filter(car => car.price <= threshold);
// };

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

/*
 * Нехай функція getCarsWithDiscount поверне масив автомобілей властивість onSale котрих true.
 */

// const getCarsWithDiscount = cars => cars.filter(car => car.onSale);

// const getCarsWithDiscount = cars => {
//   return cars.filter(car => {
//     if (car.onSale) {
//       return 1;
//     }
//   });
// };

// console.table(getCarsWithDiscount(cars));

/*
 * Нехай функція getCarsWithType поверне масив автомобілей тип котрих
 * співпадає з значенням параметра type.
 */

// const getCarsWithType = (cars, type) => cars.filter(car => car.type === type);

// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));
// console.table(getCarsWithType(cars, 'truck'));

// const getCarsWithType = (cars, sometype) => cars.filter(({ type }) => type === sometype);

// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));
// console.table(getCarsWithType(cars, 'truck'));

/**
 * Залишити тільки унікальні числа
 */
// const numbers = [1, 2, 3, 3, 2, 1, 4, 5, 6, 4];

// const filteredNumbers = numbers.filter((el, idx, arr) => arr.indexOf(el) === idx);

// console.log(filteredNumbers);

/*
 *  ===================== Метод sort() ===============================
 */

// const nubmers = ['a', 'c', 's', 'b', 'd', '%', '4', '3', 'A', 'C'];
// nubmers.sort();
// console.log(nubmers);
// const numbers = [2, 1, 4, 0];

// const sortedNumbers = [...numbers].sort();

// console.log('numbers:', numbers);
// console.log('sortedNumbers: ', sortedNumbers);

/**
 * Сортировка по замовчуванню.
 */

// const numbers = ['30', '94', '60', '97', '5', '55', '23', '21'];
// const sortedNumbers = [...numbers].sort();

// console.log(`source arr: `, numbers);
// console.log('sortedNumbers: ', sortedNumbers);

// const words = ['Gavin', 'Edgar', 'Edith', 'Maurice', 'Rosa', 'Roger'];
// const sortedWords = [...words].sort();

// console.log(`source arr: `, words);
// console.log('sortedWords: ', sortedWords);

/**
 * сортировка чисел та строк по умові
 */

// const numbers = [30, 94, 60, 97, 5];
// const sortedNumbers = [...numbers].sort((a, b) => {
//   return a - b;
// });

// console.log(`source arr: `, numbers);
// console.log('sortedNumbers: ', sortedNumbers);

// const words = ['Gavin', 'Edgar', 'Edith', 'Maurice', 'Rosa', 'Roger', 'alex'];
// // 1й зовнышній цикл [ 'Edgar', 'Edith', 'Gavin', 'Maurice' , 'Roger', , 'Rosa'];
// // 2й зовнышній цикл [ 'Edgar', 'Edith', 'Gavin', 'Maurice' , 'alex', 'Roger', 'Rosa'];
// // 3й зовнышній цикл [ 'Edgar', 'Edith', 'Gavin', 'alex' 'Maurice' , 'Roger', 'Rosa'];
// // 4й зовнышній цикл [ 'Edgar', 'Edith', 'alex' 'Gavin', 'Maurice', 'Roger', 'Rosa'];
// // 5й зовнышній цикл [ 'Edgar', 'alex', 'Edith', 'Gavin', 'Maurice', 'Roger', 'Rosa'];
// // 6й зовнышній цикл [ 'alex', 'Edgar', 'Edith', 'Gavin', 'Maurice', 'Roger', 'Rosa'];
// // 7й зовнышній цикл [ 'alex', 'Edgar', 'Edith', 'Gavin', 'Maurice', 'Roger', 'Rosa'];
// const sortedWords = [...words].sort((a, b) => {
//   console.log(a.localeCompare(b)); // порівнює строки по їх кодам,
//   // повертає 1, -1, 0 відносто того, что строка "а"
//   // стоїть раніше за "b", після неї або на томуж місці.

//   return a.localeCompare(b);
// });

// console.log(`source arr: `, words);
// console.log('sortedWords: ', sortedWords);

/*
 * Нехай функція sortByAscendingAmount поверне новий масив автомобілей відсортирований
 * по зростанню значення властивості amount.
 */
// const cars = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true, sold: { amount: 1 } },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true, sold: { amount: 3 } },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false, sold: { amount: 4 } },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true, sold: { amount: 1 } },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false, sold: { amount: 5 } },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false, sold: { amount: 6 } },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true, sold: { amount: 7 } },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true, sold: { amount: 8 } },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true, sold: { amount: 9 } },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false, sold: { amount: 1 } },
// ];

// const sortByAscendingAmount = cars => {
//   return [...cars].sort((a, b) => a.amount - b.amount);
// };

// console.table(sortByAscendingAmount(cars));

/*
 * Нехай функція sortByDescendingPrice поверне новий масив автомобілей
 * відсортирований в порядку від меншого до більшого значення властивості price
 */

// const sortByDescendingPrice = cars => {
//   return [...cars].sort((a, b) => {
//     return a.price - b.price;
//   });
// };

// console.table(sortByDescendingPrice(cars));

//Сортировка по владному об'єкту. Відсортировані автомобілі по кількості проданих sold.amount
// const sortByDescendingPrice = cars => {
//   return [...cars].sort((a, b) => {
//     return a.sold.amount - b.sold.amount;
//   });
// };

// console.table(sortByDescendingPrice(cars));

/*
 * Нехай функція sortByModel поверне новий масив автомобілей відсортирований по назві моделі
 * в алфавітном та зворотньом алфавітном порядку, в залежності від значення параметра order.
 */

// const sortByModel = (cars, order) => {
//   return [...cars].sort((a, b) => {
//     if (order === 'asc') {
//       return a.model.localeCompare(b.model);
//     } else if (order === 'desc') {
//       return b.model.localeCompare(a.model);
//     }
//   });

//   //   if (order === 'asc') {
//   //     return [...cars].sort((a, b) => a.model.localeCompare(b.model));
//   //   } else if (order === 'desc') {
//   //     return [...cars].sort((a, b) => b.model.localeCompare(a.model));
//   //   }
// };

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));

/*
 *  ===================== Метод find() ===============================
 */

// массив.find((element, index, array) => {
// Тіло коллбек-функції
// });

/*
 * Знайти перше непарне число
 */

// const numbers = [2, 1, 6, 8, 9, 10, 12];
// console.log(numbers.find(item => item % 2 > 0));

/*
 * Знайти автомобіль по моделі
 */

// const cars = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
// ];
// const getCarByModel = (cars, model) => {
//   return cars.find(item => item.model === model);
// };

// const getCarByType = (cars, type) => {
//   return cars.sort((item1, item2) => item1.amount - item2.amount).find(item => item.type === type);
// };

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));

// console.log(getCarByType(cars, 'suv'));
// console.log(getCarByType(cars, 'truck'));

/*
 *  ===================== Метод reduce() ===============================
 */

// массив.reduce((previousValue, element, index, array) => {
// Тіло коллбек-функції
// }, initialValue);

/*
 * Порахуємо суму масива чисел
 */

// const numbers = [1, 2, 3, 4, 5];

// let totalSum = numbers.reduce((prevValue, el, idx, arr) => (prevValue += el), 0);

// console.log(totalSum);

// console.log(totalSum);
/*
 * Нехай функція getTotalAmount поврне загальну кількість автомобілей (значення алпстивості amount).
 */

// const cars = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
// ];

// const getTotalAmount = cars => {
//   return cars.reduce((acc, item) => (acc += item.amount), 0);
// };
// console.log(getTotalAmount(cars));

// const getTotalAmount = cars => {
//   return cars.reduce((acc, { model, onSale, price }, index, array) => {
//     if (!onSale && price > 30000) {
//       return [...acc, model];
//     } else {
//       return acc;
//     }
//   }, []);
// };
// console.log(getTotalAmount(cars));

/*
 *  ===================== Метод findIndex() ===============================
 */

// const cars = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
// ];

/**
 * Знайти індекс елемента за значнням моделі
 */

// console.log(cars.findIndex(item => item.model === 'Mazda 6'));

/*
 *  ===================== Метод some() ===============================
 */

// const cars = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 0, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 0, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 0, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 0, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 0, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 0, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 1, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 0, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 0, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 0, price: 31660, onSale: false },
// ];

/**
 * Перевірити що хоча б один з автомобілів є в гаражі (властивість amount )
 */

// console.log(cars.some(item => item.amount));

/*
 *  ===================== Метод every() ===============================
 */

// const cars = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 0, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
// ];

/**
 * Перевырити що всі автомобілі є в гаражі
 */

// console.log(cars.every(item => item.amount));

/*
 *  ===================== Ланцюжки методів ===============================
 */

// const cars = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
// ];

/*
 * Нехай функція getAvailableCarNames поверне масив моделей автомобілей, но тольки тих, котрі зараз на распродажі.
 */

// const getModelsOnSale = cars => {
//   // 1 вариант
//   //   const onSaleCars = cars.filter((el, idx, arr) => {
//   //     return el.onSale;
//   //   });

//   //   return onSaleCars.map((el, idx, arr) => {
//   //     return el.model;
//   //   });

//   // 2 вариант
// //   return cars.filter(el => el.onSale).map(el => el.model);
// };

// console.log(getModelsOnSale(cars));

/*
 * Нехай функція getSortedCarsOnSale поверне масив автомобілей на распродажі (властивість onSale),
 * відсортированний по зростанню ціни.
 */

// const getSortedCarsOnSale = cars => {
//   return cars.filter(el => el.onSale).sort((a, b) => a.price - b.price);
// };

// console.table(getSortedCarsOnSale(cars));
