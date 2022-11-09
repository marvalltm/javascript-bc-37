/* ============== Метод map() ============== */
// const ownMap = function (arr, callback) {
//   const newArr = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     newArr.push(callback(arr[i], i, arr));
//   }

//   return newArr;
// };

// const planets = ['Земля', 'Марс', 'Венера', 'Юпітер'];

// const planetsInUpperCase = ownMap(planets, planet => planet.toUpperCase());
// console.log(planetsInUpperCase);

// const planetsInLowerCase = ownMap(planets, planet => planet.toLowerCase());
// console.log(planetsInLowerCase);

// console.log(planets);

/* ============== Метод filter() ============== */
// const ownFilter = function (arr, callback) {
//   const newArr = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     if (callback(arr[i], i, arr)) {
//       newArr.push(arr[i]);
//     }
//   }

//   return newArr;
// };

// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = ownFilter(values, value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]

// const negativeValues = ownFilter(values, value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]

// const bigValues = ownFilter(values, value => value > 1000);
// console.log(bigValues); // []

// console.log(values); // [51, -3, 27, 21, -68, 42, -37]

/* ============== Метод find() ============== */
// const ownFind = function (arr, callback) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (callback(arr[i], i, arr)) {
//       return arr[i];
//     }
//   }

//   return undefined;
// };

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

// console.log(ownFind(colorPickerOptions, option => option.label === 'blue')); // { label: 'blue', color: '#2196F3' }
// console.log(ownFind(colorPickerOptions, option => option.label === 'pink')); // { label: 'pink', color: '#E91E63' }
// console.log(ownFind(colorPickerOptions, option => option.label === 'white')); // undefined

/* ============== Метод findIndex() ============== */
// const ownFindIndex = function (arr, callback) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (callback(arr[i], i, arr)) {
//       return i;
//     }
//   }

//   return -1;
// };

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

// console.log(ownFindIndex(colorPickerOptions, option => option.label === 'blue')); // 2
// console.log(ownFindIndex(colorPickerOptions, option => option.label === 'pink')); // 3
// console.log(ownFindIndex(colorPickerOptions, option => option.label === 'white')); // -1

/* ============== Метод every() ============== */
// const ownEvery = function (arr, callback) {
//   for (let i = 0; i < arr.length; i += 1) {
//     const result = callback(arr[i], i, arr);
//     if (result) {
//       continue;
//     }

//     return false;
//   }

//   return true;
// };

// const fruits = [
//   { name: 'apples', amount: 100 },
//   { name: 'bananas', amount: 0 },
//   { name: 'grapes', amount: 50 },
// ];

// // every поверне true тільки якщо у всіх фруктів amount буде більше за 0
// const allAvailable = ownEvery(fruits, fruit => fruit.amount > 0); // false
// console.log(allAvailable);

/* ============== Метод some() ============== */
// const ownSome = function (arr, callback) {
//   for (let i = 0; i < arr.length; i += 1) {
//     const result = callback(arr[i], i, arr);

//     if (result) {
//       return true;
//     }
//   }

//   return false;
// };

// const fruits = [
//   { name: 'apples', amount: 100 },
//   { name: 'bananas', amount: 0 },
//   { name: 'grapes', amount: 50 },
// ];

// // some поверне true якщо хочаб у одного фрукта буде amount більше за 0 штук
// const anyAvailable = ownSome(fruits, fruits => fruits.amount > 0); // true
// console.log(anyAvailable);

/* ============== Метод reduce() ============== */
// const ownReduce = function (arr, callback, initialValue = 0) {
//   for (let i = 0; i < arr.length; i += 1) {
//     initialValue = callback(initialValue, arr[i], i, arr);
//   }

//   return initialValue;
// };

// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
//   { name: 'Хьюстон', score: 64 },
// ];

// const totalScore = ownReduce(
//   students,
//   (total, student) => {
//     return total + student.score;
//   },
//   0
// );

// const averageScore = totalScore / students.length;
// console.log(averageScore);

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
? Пусть функция getAvailableCarNames возвращает массив моделей автомобилей, но только тех, которые сейчас на распродаже.
*/

// const getModelsOnSale = cars => {
//   // 1 вариант
//     // const onSaleCars = cars.filter((el, idx, arr) => {
//   //   return el.onSale;
//   // });

//   // return onSaleCars.map((el, idx, arr) => {
//   //   return el.model;
//   // });

//   // 2 вариант
//   // return cars.filter(el => el.onSale).map(el => el.model);
// };

// console.table(getModelsOnSale(cars));

/*
? Пусть функция getSortedCarsOnSale возвращает массив автомобилей на распродаже (свойство onSale),
? отсортированных по возрастанию цены.
*/

// const getSortedCarsOnSale = cars => {
//   return cars.filter(el => el.onSale).sort((a, b) => a.price - b.price);
// };

// console.table(getSortedCarsOnSale(cars));
