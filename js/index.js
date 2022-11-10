/**
 * Symbol використання.
 * Розглянути те, що багато базових конструкцій мови (всі ключові класи, побудовані на Symbol.iterator)
 */

// console.log(new Array());
// console.log(new String());
// console.log(new Number());

// //
// const FRONTEND_NAME = Symbol.for('fronend_name');
// const BACKEND_NAME = Symbol.for('backend_name');
// const UID = Symbol.for('uid');

// const object1 = {
//   name: 'SomeName',
//   email: 'example@domain.com',
// };

// const object2 = {
//   name: 'SomeName2',
//   phone: '8800-000-00-99',
// };

// const object3 = {
//   ...object1,
//   ...object2,
//   //   froned_name: object1.name,
//   //   backend_name: object2.name,
//   name: 'Some Name 3',
//   [FRONTEND_NAME]: object1.name, //private
//   [BACKEND_NAME]: object2.name, //private
//   [UID]: uuid.v4(), //private
// };

// console.log(object3);

// console.log(Object.keys(object3));
// console.log(Object.getOwnPropertySymbols(object3));
// console.log(object3[Object.getOwnPropertySymbols(object3)[0]]); //object3[FRONTEND_NAME]

// //з усього конкретно потрібного і зрозумілого це захист інформації при JSON претворенні
// console.log(JSON.stringify(object3));

// object3[UID] = uuid.v4() + '_new';
// console.log(object3);

// Object.defineProperty(object3, UID, {
//   enumerable: false,
//   configurable: false,
//   writable: false,
// });

// object3[UID] = uuid.v4() + '_new';
// console.log(object3);

/**
 * BigInt використання.
 */

// const simpleNumber = Number.MAX_SAFE_INTEGER;
// console.log(simpleNumber);
// console.log(simpleNumber + 1);
// console.log(simpleNumber + 2);
// console.log(simpleNumber + 1 === simpleNumber + 2);

// const someNumber = BigInt(Number.MAX_SAFE_INTEGER * Number.MAX_SAFE_INTEGER);
// const someNumber2 = 12345n;
// console.log(someNumber + someNumber2);
// console.log(someNumber + 1n === someNumber + 2n);

// alert(someNumber);

/**
 * _lodash використання.
 */

/**
 * _.chunk - коли треба, срупувати елементи у масив
 */

// const someString =
//   'Jhon, 8800-000-00-00, some1@domain.com, James, 8800-000-00-00, some2@domain.com, Eric, 8800-000-00-00, some3@domain.com, Fil, 8800-000-00-00, some4@domain.com';

// // // _.chunk(array, chunkSize);

// console.log(_.chunk(someString.split(','), 3));

/**
 * _.findLastIndex - навідмінно від findIndex - шукає останнє входження елемента.
 */

// const users = [
//   { user: 'barney', active: true },
//   { user: 'barney', active: false },
//   { user: 'barney', active: true },
//   { user: 'fred', active: false },
//   { user: 'pebbles', active: false },
//   { user: 'pebbles', active: true },
// ];

// console.log(
//   _.findLastIndex(users, function (o) {
//     return o.user == 'pebbles';
//   })
// );
// console.log(_.findLastIndex(users, { user: 'barney', active: true }));
// console.log(_.findLastIndex(users, ['active', false]));
// console.log(_.findLastIndex(users, 'active'));

/**
 * _.flatten(array) - підіймає масив на одну вкладеність.
 */

// const array = [1, [2, [3, [4]], 5]];
// console.log(_.flatten(array));

/**
 * RECURSION.
 */

// рекурсії
// const some = function (value) {
//   console.log(value);
//   let localValue = value + 1;
//   return localValue > 10 ? value : some(localValue);
// };
// console.log('RESULT: ', some(1));

// Використання _.flatten(array) та рекурсії для того щоб перетворит
// массив з будь якою влакеністю, на масив першого рівня вкладеності.

// const getLineArray = array => {
//   let status = false;
//   const newArray = _.flatten(array);
//   newArray.forEach(element => {
//     if (typeof element === 'object') {
//       status = true;
//     }
//   });
//   if (status) {
//     return getLineArray(newArray);
//   } else {
//     return newArray;
//   }
// };

// console.log(getLineArray(array));

/**
 *  _.flattenDeep(array) - метод, що робить массив з будь якою влакеністю, на масив першого рівня вкладеності.
 */

// console.log(_.flattenDeep([1, [2, [3, [4]], 5]]));

/**
 *  _.fromPairs([['a', 1], ['b', 2]]) - перетворює пари кладених мисивів на об'єкт
 */

// console.log(
//   _.fromPairs([
//     ['a', 1],
//     ['b', 2],
//   ])
// );

// const obj = {
//   name: 'James',
//   email: 'example@domain.com',
//   phone: '8800-800-80-80',
// };

// console.log(Object.entries(obj));
// console.log(_.fromPairs(Object.entries(obj)));

/**
 *  _.every(array, whatCheck); - аналог every в vanilla js
 */

// const users = [
//   { user: 'barney', age: 36, active: false, some: true },
//   { user: 'fred', age: 40, active: false, some: true },
// ];

// // // The `_.matches` iteratee shorthand.
// console.log(_.every(users, { user: 'barney', active: false }));

// // // The `_.matchesProperty` iteratee shorthand.
// console.log(_.every(users, ['active', false]));

// // // The `_.property` iteratee shorthand.
// console.log(_.every(users, 'some'));
// console.log(_.every(users, { some: true }));

/**
 *  _.orderBy(objects, config)
 */

// const users = [
//   { user: 'fred', age: 48 },
//   { user: 'fred', age: 51 },
//   { user: 'jorsh', age: 34 },
//   { user: 'jorsh', age: 70 },
//   { user: 'fred', age: 40 },
//   { user: 'ashly', age: 36 },
// ];

// // // Sort by `user` in ascending order and by `age` in descending order.
// console.log(_.orderBy(users, ['age', 'user'], ['asc', 'desc']));

/**
 *  _.sample(array) - повертає рандомний елемнт з колекції
 */

// const users = [
//   { user: 'fred', age: 48 },
//   { user: 'fred', age: 51 },
//   { user: 'jorsh', age: 34 },
//   { user: 'jorsh', age: 70 },
//   { user: 'fred', age: 40 },
//   { user: 'ashly', age: 36 },
// ];

// console.log(_.sample(users));

/**
 *  _.shuffle(array) - премішую коллекцію
 */

// console.log(_.shuffle([1, 2, 3, 4]));

/**
 *  _.size(array) - повертае довжину масива, строки, або кількість ключів в об'єкті
 */

// console.log('length: ', _.size([1, 2, 3]));
// console.log('length: ', _.size({ a: 1, b: 2 }));
// console.log('Object.keys: ', Object.keys({ a: 1, b: 2 }).length);
// console.log('length: ', _.size('pebbles'));

/**
 *  _.some(array) - аналог some з vanilla js
 */

// const users = [
//   { user: 'barney', active: true },
//   { user: 'fred', active: false },
// ];

// // // The `_.matches` iteratee shorthand.
// console.log(_.some(users, { user: 'barney', active: false }));
// // // The `_.matchesProperty` iteratee shorthand.
// console.log(_.some(users, ['active', false]));
// // // The `_.property` iteratee shorthand.
// console.log(_.some(users, 'active'));

/**
 *  _.isEqual(object1, object2); - порівнює обьекти
 */

// const object1 = {
//   name: ' SomeName',
//   age: 15,
//   contact: {
//     phone: '80808080',
//     email: 'asdasd@asd.asd',
//     coords: {
//       x: 1,
//       y: 1,
//     },
//   },
// };

// const object2 = {
//   name: ' SomeName',
//   age: 15,
//   contact: {
//     phone: '80808080',
//     email: 'asdasd@asd.asd',
//     coords: {
//       x: 1,
//       y: 1,
//     },
//   },
// };

// console.log(_.isEqual(object1, object2));

// const object3 = {
//   name: ' SomeName',
//   age: 15,
// };
// const object4 = {
//   name: ' SomeName',
//   age: 15,
// };

// console.log(object1 === object2);
// console.log(object3 === object4);

/**
 *  moment.js
 */

// const vanillaTime = new Date();
// console.log(vanillaTime);

// const time = moment();
// // console.log(time);

// console.log(time.format('MM.DD.yyyy hh:mm:ss'));
// console.log(time.format('DD-MM-yyyy hh:mm'));
// console.log(time.format('DD-&&-MM-==-yyyy mm:ss'));

// console.log(time.add('days', 5).format('DD.MM.yyyy hh:mm:ss'));

// console.log(time.unix());
// console.log(time.add('days', 30).unix());
