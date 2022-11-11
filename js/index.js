'use strict';

/*
 *  Контекст виконання this
 */

/*
 * this існує тільки всередині функцій.
 * На this не впливає те де функція була //! ОГОЛОШЕНА.
 * На this впливає те де функція //! ВИКЛИКАЄТЬСЯ.
 */

//TODO: Розглянемо як this поводиться у звичайних функціях (суворий, не суворий режим)

// Function expression
// const greet1 = function () {
//   console.log('This --->', this);
//   console.log('Hello');
// };

// greet1();

// // Function declaration
// function greet2() {
//   console.log('This --->', this);
//   console.log('Hello');
// }

// greet2();

// // Arrow function
// const greet3 = () => {
//   console.log('This --->', this);
//   console.log('Hello');
// };

// greet3();

//TODO: Розглянемо як this поводиться в методах
// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis() {
//     console.log('This --->', this);
//   },

//   showName() {
//     console.log(this.name);
//   },
// };

// user.showThis();
// user.showName();

// const anotherUser = {
//   name: 'Oleksii',
//   age: 50,

//   showThis() {
//     console.log('This --->', this);
//   },

//   showName() {
//     console.log(this.name);
//   },
// };

// anotherUser.showThis();
// anotherUser.showName();

//TODO: Присвоєння функції як методу об'єкта
// const showThis = function () {
//   console.log('This --->', this);
// };

// const showName = function () {
//   console.log(`Hello ${this.name}`);
// };

// const user = {
//   name: 'Luis',
//   age: 30,
// };

// user.showUserName = showName;
// user.showUserThis = showThis;

// // console.log(user);

// user.showUserThis();
// user.showUserName();

// const anotherUser = {
//   name: 'Oleksii',
//   age: 40,
// };

// anotherUser.showUserName = showName;
// anotherUser.showUserThis = showThis;

// // console.log(anotherUser);

// anotherUser.showUserThis();
// anotherUser.showUserName();

//TODO: Виклик методу об'єкта без контексту
// const user = {
//   name: 'Luis',
//   age: 30,

//   showUserThis() {
//     console.log('This --->', this);
//   },

//   showUserName() {
//     console.log(this.name);
//   },
//   showUserName2() {
//     console.log('asjkdfhajkshfjk');
//   },
// };

// const showThis = user.showUserThis;
// const showName = user.showUserName;
// const showName2 = user.showUserName2;
// // showThis();
// // showName();
// showName2();

//TODO: This в callback функціях

// const user = {
//   name: 'Luis',
//   age: 30,

//   showUserThis() {
//     console.log('This --->', this);
//   },

//   showUserName() {
//     console.log(this.name);
//   },
// };

// const someFunction = function (callback) {
//   // let callback = user.showUserThis;
//   callback();
// };

// someFunction(user.showUserThis);

//TODO: This у стрілочних функціях.
// Стрілочні функції не мають свого this,
// this в стрілках завжди посилається на батьківський this.

// const user = {
//   name: 'Luis',
//   age: 30,

//   changeUserAge(newAge) {
//     // ТАК ПИСАТИ Н ТРЕБА - ПРИКЛАД ТОГО ЯК НЕ ТРАБА.
//     const changeAge = () => {
//       console.log(`this ---->`, this);
//       this.age = newAge;
//     };

//     changeAge();
//   },
// };

// const user2 = {
//   name: 'Jhon',
//   age: 50,
//   // ТАК ПИСАТИ Н ТРЕБА - ПРИКЛАД ТОГО ЯК НЕ ТРАБА.
//   changeUserAge: user.changeUserAge,
// };

// user2.changeUserAge(40);
// console.log(user2);

/*
? Яким буде результат виконання цього коду?
*/

// let user = {
//   name: 'Джон',

//   go() {
//     console.log(this);
//     console.log(this.name);
//   },
// };

// const goFn = user.go;
// goFn();
// user.go();

/*
? Тут функція makeUser повертає об'єкт.
? Яким буде результат при зверненні до об'єкта ref? Чому?
*/

// const makeUser = function () {
//   console.log(this);
//   return {
//     name: 'Джон',
//     ref: this,
//   };
// };

// const user = makeUser();

// console.log(user);
// console.log(user.ref.name);

/*
? Яким буде результат console.log
*/

// function makeUser() {
//   console.log(this);
//   return {
//     name: 'Джон',
//     ref() {
//       return this;
//     },
//   };
// }

// // let user = makeUser();
// let user = {
//   name: 'Джон',
//   ref() {
//     return this;
//   },
// };

// console.log(user.ref()); // user
// // console.log(user.ref().name);

/*
? Це ladder (сходи) – об'єкт, який дозволяє підніматися вгору та спускатися:
*/

// const ladder = {
//   step: 0,

//   up() {
//     this.step += 10;
//     return this;
//   },

//   down() {
//     this.step -= 5;
//     return this;
//   },

//   showStep() {
//     console.log(this.step);
//     return this;
//   },
// };

// Тепер, якщо нам потрібно зробити кілька послідовних викликів, ми можемо зробити це так:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();

// Змініть код методів up, down та showStep таким чином, щоб їх виклик можна було зробити по ланцюжку, наприклад:

// ladder.up().up().down().showStep(); // ladder.spet + 10
// ladder.up().down().showStep(); // ladder.spet + 10
// ladder.down().showStep(); // ladder.spet - 5
// ladder.showStep(); // ladder === 15
/*
 *  Методи функцій call та apply
 */

//* Функції це об'єкти зі своїми властивостями та методами

// console.log(this);
// obj.metod()
// obj -> metod = func
// func <- obj.metod

// const obj = {
//   name: 'SomeName',
//   ref() {
//     return this;
//   },
// };

// const some = function () {
//   console.log(obj.ref().name);
// };

// // some(obj);
// console.log(some);

//* call та apply

//? Викличте функцію showFullName у контексті об'єкта user

// const showFullName = function (message, number) {
//   console.log(`${message} ${this.firstName} ${this.lastName} ${number}`);
// };

// const showFullName = function () {
//   console.log(`${this.firstName} ${this.lastName}`);
// };

// // showFullName();
// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };

// showFullName.call(user, 'Hello', 10);
// showFullName.apply(user, ['Hello', 10]);

//? Викличте функцію showFullName у контексті об'єкта anotherUser
// const anotherUser = {
//   firstName: 'Lottie',
//   lastName: 'Burgess',
//   age: 40,
// };

// showFullName.call(anotherUser, 'Hi', 20);
// showFullName.apply(anotherUser, ['Hi', 20]);

//* Позичання методу

// const createCurrentDate = function () {
//   //   console.log(arguments);
//   //   const newArr = Array.from(arguments);
//   //   return newArr.join('.');
//   //   return [].join.call(arguments, '.');
// };

// console.log(createCurrentDate(22, 12, 21));

// console.log.call(anotherUser, 'asdasd');

//* bind
// const showFullName = function () {
//   console.log(`${this.firstName} ${this.lastName}`);
// };

// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };

// const showUserFullName = showFullName.bind(user);
// showUserFullName();

//* Метод об'єкта у ролі колбека

// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis() {
//     console.log(`this ---->`, this);
//   },

//   showName() {
//     console.log(`this name is: ${this.name}`);
//   },
// };

// const someFunction = function (callback) {
//   // let callback = user.showName;
//   callback();
// };

// someFunction(user.showThis.bind(user));

/*
? Що виведе код?
*/

// const f = function () {
//   console.log(this.name);
// };

// const user = {
//   name: 'Вася',
// };

// const anotherUser = {
//   name: 'Петя',
// };

// const copyFunc = f.bind(user).bind(anotherUser);
// copyFunc();
// console.dir(copyFunc);

/*
 * Виклик checkPassword() у наведеному нижче коді повинен перевірити пароль та викликати
 * user.loginOk/loginFail залежно від відповіді.
 * Однак його виклик призводить до помилки. Чому?
 */

// const checkPassword = function (ok, fail) {
//   // let ok = user.loginOk;
//   // let fail = user.loginFail;

//   const password = 'rockstar';

//   if (password === 'rockstar') {
//     ok();
//   } else {
//     fail();
//   }
// };

// const user = {
//   name: 'Вася',

//   loginOk() {
//     console.log(`${this.name} logged in`);
//   },

//   loginFail() {
//     console.log(`${this.name} failed to log in`);
//   },
// };

// checkPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// function bind(object) {
//   const bindedValues = object;

//   return function () {
//     return bindedValues;
//   };
// }

// function createUser(user) {
//   const bindedValues = user;
//   return function (method) {
//     bindedValues[method.name] = method;
//     return bindedValues;
//   };
// }
// const fn = function () {
//   console.log('HELLO');
// };
// const userConstructor = createUser({ type: 'User', role: ['admin', 'manager'] });
// console.log(userConstructor(fn));

// function multiplyCreator(user) {
//   //виклик під час створення замкання.
//   const staticValue = user;

//   return function (number) {
//     //виклик під час використання замкнутої змінної.

//     return number * staticValue;
//   };
// }

// const myltiplyOnTen = multiplyCreator(10); //виклик під час створення замкання.
// console.log(myltiplyOnTen(123)); // виклик під час використання замкнутої змінної.

/**
 * BAC ARCH 1
 */

// const module1 = {
//   name: 'module1',
//   initModule() {
//     return this;
//   },
//   showName() {
//     return this.name;
//   },
// };

// const module2 = {
//   name: 'module2',
//   initModule() {
//     return this;
//   },
//   showName() {
//     return this.name;
//   },
// };

// const module3 = {
//   name: 'module3',
//   initModule() {
//     return this;
//   },
//   showName() {
//     return this.name;
//   },
// };

// const modules = [module1, module2, module3];

// const app = {
//   initModules(modules) {
//     modules.forEach(module => {
//       this[module.name] = module.initModule();
//     });
//   },
// };

// app.initModules(modules);
// console.log(app);
// console.log(app.module1.showName());
// console.log(app.module2.showName());
// console.log(app.module3.showName());

/**
 * BAC ARCH 2
 */

// const module1 = function () {
//   let that;
//   return {
//     name: 'module1',
//     initModule() {
//       that = this;
//       return that;
//     },
//     showName: () => {
//       return that.name;
//     },
//   };
// };

// const module2 = function () {
//   let that;
//   return {
//     name: 'module2',
//     initModule() {
//       that = this;
//       return that;
//     },
//     showName: () => {
//       return that.name;
//     },

//     saveName: newName => {
//       that.name = newName;
//     },
//   };
// };

// const modules = [module1, module2];

// const app = {
//   initModules(modules) {
//     modules.forEach(module => {
//       this[module.name] = module().initModule();
//     });
//   },
// };
// app.initModules(modules);
// console.log(app);
// console.log(app.module1.showName());
// console.log(app.module2.saveName());

/**
 * Function.name
 */

// function someFunction() {
//   return true;
// }
// console.log(typeof someFunction);
// console.log(someFunction.name);
// console.dir(someFunction)

//========================== EXAMPLES ==================================

/*
? Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю та розраховує
? і повертає загальну вартість каменів з таким ім'ям.
*/

// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],

//   calcTotalPrice(stoneName) {
//     const stone = this.stones.find(el => el.name === stoneName);

//     if (stone === undefined) {
//       return 'Такого каменя не знайдено';
//     }

//     return stone.price * stone.quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600
// console.log(chopShop.calcTotalPrice('Sdfd')); // Такого каменя не знайдено

/*
? Виконайте рефакторинг методів об'єкта phonebook щоб код запрацював.
*/

// const phonebook = {
//   contacts: [],

//   add(contact) {
//     const newContact = {
//       list: 'default',
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };

//     this.contacts.push(newContact);

//     return this.contacts;
//   },

//   generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
//   },

//   getDate() {
//     return Date.now();
//   },
// };

// console.log(
//   phonebook.add({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   })
// );

// console.log(
//   phonebook.add({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   })
// );

/*
? Створіть об'єкт calculator із трьома методами:
?
? read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
? add() - повертає суму збережених значень.
? mult() - перемножує збережені значення та повертає результат.
*/

// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },

//   add() {
//     return this.a + this.b;
//   },

//   mult() {
//     return this.a * this.b;
//   },
// };

// calculator.read(10, 20);
// console.log(calculator.add());
// console.log(calculator.mult());
