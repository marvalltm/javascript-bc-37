'use strict';
/*
? Напиши скрипт, который, для объекта user, последовательно:
? добавляет поле mood со значением 'happy'
? заменяет значение hobby на 'skydiving'
? заменяет значение premium на false
? выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
*/

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = !user.premium;

// const userKeys = Object.keys(user);

// for (const key of userKeys) {
//   console.log(`${key}: ${user[key]}`);
// }

/*
? У нас есть объект, в котором хранятся зарплаты нашей команды.
? Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.
? Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.
*/

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const salariesValues = Object.values(salaries);

// let total = 0;

// for (const value of salariesValues) {
//   total += value;
// }

// console.log(total);

/*
? Напишите ф-цию calcTotalPrice(stones, stoneName), которая принимает массив обьектов и строку с названием камня.
? Ф-ция считает и возвращает общую стоимость камней с таким именем.
*/

// const stones = [
//   { name: 'Изумруд', price: 1300, quantity: 4 },
//   { name: 'Бриллиант', price: 2700, quantity: 3 },
//   { name: 'Сапфир', price: 400, quantity: 7 },
//   { name: 'Щебень', price: 200, quantity: 2 },
// ];

// const calcTotalPrice = function (stones, stoneName) {
//   for (const stone of stones) {
//     if (stone.name === stoneName) {
//       return stone.price * stone.quantity;
//     }
//   }

//   return 'Такого камня не найдено';
// };

// console.log(calcTotalPrice(stones, 'Изумруд')); // 5200
// console.log(calcTotalPrice(stones, 'Бриллиант')); // 8100
// console.log(calcTotalPrice(stones, 'Аконит')); // Такого камня не найдено

/*
? Напиши скрипт управления личным кабинетом интернет банка.
? Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.
?
? Типов транзацкий всего два:
? Можно положить либо снять деньги со счета.
?
? Каждая транзакция это объект со свойствами: id, type и amount
*/

// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// const account = {
//   // Текущий баланс счета
//   balance: 0,
//   // Начальный id для транзакции
//   startId: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type) {
//     return {
//       amount,
//       type,
//       id: this.generateId(),
//     };
//   },

//   // Генерация id для транзакции
//   generateId() {
//     return (this.startId += 1);
//   },

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {
//     this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
//     this.balance += amount;
//   },

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {
//     if (this.balance >= amount) {
//       this.transactions.push(
//         this.createTransaction(amount, Transaction.WITHDRAW)
//       );
//       this.balance -= amount;
//     } else {
//       console.log('Снятие такой суммы не возможно, недостаточно средств.');
//     }
//   },

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }

//     return 'Такой транзакции не существует';
//   },

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {
//     let totalAmount = 0;

//     for (const transaction of this.transactions) {
//       if (type === transaction.type) {
//         totalAmount += transaction.amount;
//       }
//     }

//     return totalAmount;
//   },
// };

// account.deposit(200);
// account.deposit(300);
// account.withdraw(200);
// account.withdraw(200);

// console.log(account.getBalance());
// console.log(account.transactions);
// console.log(account.getTransactionDetails(5));
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));
