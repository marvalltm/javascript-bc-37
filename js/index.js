'use strict';

/*
 * Ланцюжки прототипів.
 * Object.create().
 * obj.hasOwnProperty()
 */

// const user = {
//   firstName: 'Jhon',
//   age: 40,
//   sayHello() {
//     console.log(
//       `${this.firstName ? this.firstName : ''} ${
//         this.lastName ? this.lastName : ''
//       } say hello...`
//     );
//   },
// };

// // console.log('user: ', user);
// // user.sayHello();

// const james = Object.create(user);
// james.firstName = 'James';
// james.lastName = 'Jonson';
// // james.sayHello();
// // console.log('james: ', james);

// const eric = Object.create(james);
// eric.firstName = 'Eric';
// eric.age = 30;
// // eric.sayHello();
// console.log('eric: ', eric.hasOwnProperty('lastName'));

// eric.__proto__ = user;
// console.log(eric);
// eric.sayHello = function () {
//   console.log('HI HIHI HI H');
// };
// eric.__proto__.sayHello = function () {
//   console.log(this);
// };
// eric.sayHello();

// const fn = function () {};
// console.dir(fn);
// console.log(fn.hasOwnProperty('name'));
// https://learn.javascript.ru/article/native-prototypes/native-prototypes-classes.svg

//* Власні та не власні властивості об'єкта

//* Перевірка власних властивостей obj.hasOwnProperty()
// console.log(eric.hasOwnProperty('age'));
// console.log(eric);

// // * Цикл for...in, перебирає і власні, і не власні властивості.
// for (const property in eric) {
//   //   if (eric.hasOwnProperty(property)) {
//   //     console.log(`${property}: ${eric[property]}`);
//   //   }
//   console.log(
//     'property : ',
//     property,
//     '  is own: ',
//     eric.hasOwnProperty(property)
//   );
// }
// console.log(eric);
/*
 * Клас - шаблон, за яким будуть створені однотипні об'єкти
 * Екземпляр - це об'єкт створений за класом
 * Інтерфейс - набір доступних методів та властивостей
 */

//? Функція конструктор
// const Person = function ({
//   firstName,
//   lastName,
//   age,
//   hairColor,
//   eyesColor,
// } = {}) {
//   // this = {};
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.legs = 2;
//   this.hands = 2;
//   this.eyes = 2;
//   this.hairColor = hairColor;
//   this.eyesColor = eyesColor;
//   // return this;
// };

// // console.dir(Person);

// Person.prototype.changeHairColor = function (newHairColor) {
//   this.hairColor = newHairColor;
// };

// Person.prototype.changeFirstName = function (newName) {
//   this.firstName = newName;
// };

// const person = new Person({
//   firstName: 'Oleksii',
//   lastName: 'Repin',
//   age: 30,
//   hairColor: 'black',
//   eyesColor: 'brown',
// });

// person.changeHairColor('brown');
// person.changeFirstName('Susie');

// const person2 = new Person({
//   firstName: 'Emily',
//   lastName: 'Henderson',
//   age: 20,
//   hairColor: 'pink',
//   eyesColor: 'blue',
// });

// person2.changeFirstName('Teresa');

// console.log(person);
// console.log(person2);

/*
 * Класи: оголошення, конструктор, методи (class, constructor)
 * Приватні властивості та методи // умовно приватні властивості.
 * Статичні властивості та методи
 * Геттери та сеттери
 * Створити класс User.
 */

// class Person {
//   #id;
//   static multiply = 2;
//   #age = 1;
//   constructor(firstName, lastName) {
//     this.#id = Math.random().toString(36).substring(2, 9);
//     // this._currentDate = new Date(); // умовно приватні властивості
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   get age() {
//     return this.#age;
//   }

//   set age(param) {
//     if (typeof param === 'number') {
//       this.#age = param;
//     } else if (Number(param)) {
//       this.#age = Number(param);
//     }
//   }

//   //   sayHello() {
//   //     console.log(
//   //       `${this.firstName ? this.firstName : ''} ${
//   //         this.lastName ? this.lastName : ''
//   //       } say Hello. PersonId = ${this.#getPersonId()}`
//   //     );
//   //   }

//   //   #getPersonId() {
//   //     return this.#id;
//   //   }

//   //   static multiplyTo2(number) {
//   //     return number * this.multiply;
//   //   }

//   //   _geCurrentData() { // умовно приватний метод
//   //     return this._currentDate;
//   //   }
// }

// const person = new Person('John', 'Smith');
// // person.sayHello();
// person.age = 'asda';
// console.log(person.age);
/*
 * Наслідування з extends та super. Створити класс Сlient та Employeer наслідуючі класс User.
 * Створити класс Developer та Manager наслідуючі класс Employeer.
 */

// class User {
//   constructor(props) {
//     this.login = props.login;
//     this.password = props.password;
//     this.type = 'user';
//   }

//   sayHowIs() {
//     console.log(`I am "${this.type}"`);
//   }
// }

// const user = new User({
//   login: 'johnsmith',
//   password: '11111111',
// });

// // // user.sayHowIs();

// // class Client extends User {
// //   constructor(props) {
// //     super(props);

// //     this.discont = props.discont;
// //     this.type = 'clinent';
// //   }

// //   buyProduct() {
// //     console.log('buyProduct');
// //   }

// //   getCard() {
// //     console.log('getCard');
// //   }

// //   pay() {
// //     console.log('pay');
// //   }
// // }

// // const client = new Client({
// //   login: 'somePeople',
// //   password: '112211',
// //   discont: '20%',
// // });

// // // console.log(client);
// // // client.sayHowIs();

// class Employeer extends User {
//   #salary;
//   constructor(props) {
//     super(props);

//     this.#salary = props.salary;
//     this.type = 'employeer';
//   }

//   getAccessToAdmin() {
//     console.log('getAccessToAdmin');
//   }

//   getSalary() {
//     return this.#salary;
//   }
// }

// const employeer = new Employeer({
//   login: 'Eric0001',
//   password: '112211',
//   salary: 1000,
// });

// // // console.log(client);
// // // employeer.sayHowIs();

// class Manager extends Employeer {
//   constructor(props) {
//     super(props);

//     this.type = 'manager';
//   }

//   getAllSalaryList() {
//     console.log('getAllSalaryList');
//   }
// }

// const manager = new Manager({
//   login: 'Steav888',
//   password: '11234511',
//   salary: 1200,
// });

// // manager.sayHowIs();

// class Developer extends Employeer {
//   constructor(props) {
//     super(props);

//     this.type = 'developer';
//   }

//   getAccessToTickList() {
//     console.log(getAccessToTickList);
//   }

//   sayHowIs() {
//     console.log('I am 100% Dev');
//   }
// }

// const developer = new Developer({
//   login: 'Jonson',
//   password: '112342221',
//   salary: 2000,
// });

// developer.sayHowIs();
// console.log(developer.getSalary());

// const users = [user, client, employeer, manager, developer];
// console.log(developer);

// developer.setSome = 'asda';
// Developer.prototype.sayHowIs = function () {
//   console.log(11);
// };

// developer.sayHowIs();
// manager.sayHowIs();
// console.dir(developer);
// console.log(developer);
// console.dir(Developer.prototype);

// console.dir(Developer.__proto__);

// console.dir(Developer);

// const obj = {
//   name: 'Some',
// };

// console.log(obj);
