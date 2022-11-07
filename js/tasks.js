/*
 * TASK 1
 * В нас є об'ект salaries з зарплатами:
 * Створіть функцію topSalary(salaries), котра поврне ім'я
 * працівника з самою високою зп.
 *
 * Якщо об'ект salaries пустий, то треба повернути null.
 * Якщо в нас декідка працівників мають саму високу зп,
 * повернути одного з них.
 * P.S. Використати Object.entries и деструктурізації,
 * щоб перебрати пари ключ/значення.
 */

// const salaries = {};

// const topSalary = function (salaries) {
//   let maxNumber = 0;
//   let name = null;
//   for (const [workerName, salary] of Object.entries(salaries)) {
//     if (maxNumber < salary) {
//       maxNumber = salary;
//       name = workerName;
//     }
//   }
//   return name;
// };

// console.log(topSalary(salaries));

/*
 * TASK 2
 * Напиши функцію getStockReport(companyName, stock),
 * щоб вона приймала об'єкт параметрів звластивостями
 * companyName та stock и виводила репорт
 * о кількості товарів на складі будь якої компаніі.
 */

// function getStockReport(obj) {
//   const {
//     companyName,
//     stock: { ...stockItems },
//   } = obj;

//   let totalItems = 0;
//   for (const value of Object.values(stockItems)) {
//     totalItems += value;
//   }

//   return `${companyName} has ${totalItems} items in stock`;
// }

// console.log(
//   getStockReport({
//     companyName: 'Cyberdyne Systems',
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   })
// ); //"Cyberdyne Systems has 200 items in stock"

// console.log(
//   getStockReport({
//     companyName: 'Belacci',
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   })
// ); // "Belacci has 35 item in stock"

/*
 * TASK 3
 * Напиши функцію createContact(partialContact) так,
 * щоб вона повертала новий об'єкт контакта с доданими властивостями id
 * та createdAt,
 * а також list з значенням "default" якщо в partialContact
 * не має такої властивості.
 */

// const generateId = function () {
//   return '_' + Math.random().toString(36).slice(2, 9);
// };

// const createContact = function (partialContact) {
//   return {
//     id: generateId(),
//     createdAt: new Date(),
//     list: 'default',
//     ...partialContact,
//   };
// };

// console.log(
//   createContact({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   })
// );

// console.log(
//   createContact({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   })
// );

/*
 * TASK 4
 * Напиши функцію transformUsername(user) так,
 * щоб вона повертала новый об'єект з властивостями fullName,
 * на основі firstName та lastName.
 */

// const transformUsername = function (user) {
//   //   console.log(user);
//   const { firstName, lastName, ...otherProps } = user;
//   //   console.log(firstName);
//   //   console.log(lastName);
//   //   console.log(otherProps);

//   return {
//     fullName: `${firstName} ${lastName}`,
//     ...otherProps,
//   };
// };

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     email: 'j.mercer@mail.com',
//     friendCount: 40,
//   })
// );

// console.log(
//   transformUsername({
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.cross@hotmail.com',
//     friendCount: 20,
//   })
// );
