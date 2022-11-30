
/*
 * Проміси
 */
// let intervall;
// const promise = new Promise((resolve, reject) => {
//     intervall = setInterval(() => {
//         console.log("intervall tick")
//         const number = Math.floor(Math.random() * 10)
//         if (number > 10) {
//             resolve(number)
//         }
//     }, 1000);

//     setTimeout(() => {
//         reject("time lost")
//     }, 10000)
// })

// promise.then((data) => {
//    console.log(data)
// }).catch((err) => {
//    console.log(err)
// }).finally(() => {
//     console.log(promise)
//     clearInterval(intervall)
// })

//? конструктор new Promise(callback(resolve, reject));
// const promise = new Promise((resolve, reject) => {
//   const randomNumber = Math.random();

//   setTimeout(() => {
//     if (randomNumber > 0.5) {
//       resolve('Done');
//     } else {
//       reject('Error');
//     }
//   }, 1000);
// });

// console.log(promise);

//? then(onSuccess, onError)

//? ланцюжок промісів та catch(onError)

//? finally()
// promise
//   .then(data => {
//       console.log(data);
//       return "then end data"
//   })
//   .then(someData => {
//     console.log("2 then: ",someData);
//     return "then end data"
//   })
//   .then(someData => {
//       console.log("3 then: ", someData);
//       return "then end data"
//   })
//   .then(someData => {
//     console.log("4 then: ", someData);
//     return "then end data"
//   })
//   .then(someData => {
//     console.log("5 then: ", someData);
//     return "then end data"
//   })
//   .catch(err => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log('The end!');
//   });

// const result = promise
//   .then(data => {
//       console.log(data);
//       return "then end data"
//   })
//   .catch(err => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log('The end!');
//   });

// result.then(data => console.log(data))

//? TASK 01
// Чи можна "перевиконати" проміс?

// const promise = new Promise((resolve, reject) => {
//   resolve(1);

//   setTimeout(() => {
//     resolve(2);
//   }, 1000);
// });

// promise.then(result => {
//   console.log(result);
// });

//? TASK 02
// Що буде у консолі

// const promise = new Promise((resolve, reject) => {
//   resolve('1');
// });

// promise
//   .then(data => {
//     console.log(data); // '1'
//   })
//   .then(data => {
//     console.log(data); // undefined

//     return '2';
//   })
//   .then(data => {
//     console.log(data); // '2'
//   });

//? TASK 03
// Що буде у консолі

// const promise = new Promise((resolve, reject) => {
//   resolve('promise');
// });

// console.log("first console");

// promise
//   .then(data => {
//     setTimeout(() => {
//         console.log("Timeout log ", data)
//     }, 1000)
//   })
//   .then(data => {
//     setTimeout(() => {
//         console.log("Timeout log ", "some")
//     }, 0)
//   })
//     .then(() => { console.log("then") })

// setTimeout(() => {
//  console.log("Timeout log")
// }, 0)

// setTimeout(() => {
//  console.log("Timeout log 2")
// }, 1000)

// console.log("last console");

// ==================================================
// ==================================================
// ==================================================

// https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
// https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js
// https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js

/*
 * Завантаження скриптів
 */
//? Створіть функцію loadScript(url), яка буде створювати та додавати скрипт на сторінку

// const loadScript = (url, onSuccess, onError) => {
//   const script = document.createElement('script');

//   script.src = url;

//   document.body.append(script);

//   script.addEventListener('load', event => {
//     onSuccess(`Скрипт ${script.src} завантажився успішно! ${Date.now()}`);
//   });

//   script.addEventListener('error', event => {
//     onError(`Скрипт ${script.src} не завантажився`);
//   });
// };


// loadScript(
//   'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js',
//   message => {
//     console.log(message);

//     loadScript(
//       'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js',
//       message => {
//         console.log(message);

//         loadScript(
//           'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js',

//           message => {
//             console.log(message);
//           },
//           err => {
//             console.log(err);
//           }
//         );
//       },
//       err => {
//         console.log(err);
//       }
//     );
//   },
//   err => {
//     console.log(err);
//   }
// );

//? Передайте кобэк, який буде викликатися по завершеню завантаженя скрипта

//? Опрацюйте помилки

//? Завантаженя декількох скриптів

//? Пекельна піраміда колбеків

//? Рішення через проміси
// const loadScript = url => {
//     return new Promise((resolve, reject) => {

//         const script = document.createElement('script');
//         script.src = url;
//         document.body.append(script);

//         script.addEventListener('load', event => {
//             resolve(`Скрипт ${script.src} завантажився успішно!`);
//         });

//         script.addEventListener('error', event => {
//             reject(`Скрипт ${script.src} не завантажився`);
//         });
//     });
// };

// loadScript('https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js')
//     .then(message => {
//         console.log(message)
//         return loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js')
//     })
//     .then(message => {
//         console.log(message)
//         return loadScript('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js')
//     })
//     .then(message => {
//         console.log(message)
//     })
//     .catch(error => console.log(error))

// ========================================================
// ========================================================
// ========================================================

// https://api.github.com/users/marvall

// function myAsyncFunction(url) {
//   const promise = new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     //https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
      
//     xhr.open('GET', url);
//     xhr.send();
//       xhr.addEventListener('load', () => {
//       if (xhr.status !== 200) {
//         reject(xhr.status);
//       } else {
//         resolve(xhr.responseText);
//       }
//     });
//   });
    
//   return promise;
// }

// myAsyncFunction('https://api.github.com/users/marvall')
//   .then(data => {
//     console.log(JSON.parse(data));
//   })
//   .catch(err => {
//     console.log(err);
//   });

//? Запит за користувачем на колбэках
// const fetchUserByName = (name, onSuccess, onError) => {
//   console.log('Робимо запит на сервер...');

//   setTimeout(() => {
//     const isDone = Math.random();

//     if (isDone > 0.5) {
//       const user = {
//         firstName: name,
//         lastName: 'Francis',
//         age: 30,
//       };

//       onSuccess(user);
//     } else {
//       onError("Користувача з таким ім'ям не знайдено");
//     }
//   }, 2000);
// };

// const handleSuccessFetch = data => {
//   console.log(data);
// };

// const handleErrorFetch = err => {
//   console.log(err);
// };

// fetchUserByName('Ida', handleSuccessFetch, handleErrorFetch);

// ? Запит за користувачем на промісах
// const fetchUserByName = name => {
//   const promise = new Promise((resolve, reject) => {
//     console.log('Робимо запит на сервер...');

//     setTimeout(() => {
//       const isDone = Math.random();

//       if (isDone > 0.5) {
//         const user = {
//           firstName: name,
//           lastName: 'Francis',
//           age: 30,
//         };

//         resolve(user);
//       } else {
//         reject("Користувача з таким ім'ям не знайдено");
//       }
//     }, 2000);
//   });

//   return promise;
// };

// const promise = fetchUserByName('Ida');

// promise
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// ======================= Promis.all() ============================

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, {promise: "one", data: []});
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 500, {promise: "two", data: []});
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, {promise: "three", data: []});
// });

// const p4 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 4000, {promise: "four", data: []});
// });
// const p5 = new Promise((resolve, reject) => {
// // Этот промис прервёт Promise.all
//   reject("reject");
// });

// Promise.all([p1, p2, p3, p4, p5]).then(value => {
//     console.log(value);
// })

// Promise.any([p1, p2, p3, p4, p5]).then(value => {
//     console.log(value);
// })

// Promise.race([p5, p2]).then(value => {
//     console.log(value);
// })
// }, reason => {
//   console.log(reason)
// });

// let users = [];

// const p = new Promise((res, rej) => {
//     res([{n: 1}, {n: 2}])
// }).then((data) => users = data)

// function some() {
//    users.forEach()
// }

// const p = new Promise((res, rej) => {
//     res([{n: 1}, {n: 2}])
// }).then((data) => some(data))

// function some(users) {
//     users.forEach()    
//     // відображення в DOM 
// }