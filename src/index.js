/**
 * Task 1
 * Додати функціонал вибору теми на сайті. Здерегти його до localStorage
 */

// const body = document.querySelector('body')
// const changeTheme = document.querySelector('.theme')

// document.addEventListener('DOMContentLoaded', () => {
//     const theme = localStorage.getItem('theme')
//     body.className = theme;
// })

// const saveTheme = function (theme) {
//     localStorage.setItem('theme', theme)
// }

// const changeThemeHandler = function () {
//     const theme = body.className === 'dark' ? 'light' : 'dark'
//     body.className = theme;
//     saveTheme(theme)
// }

// changeTheme.addEventListener('click', changeThemeHandler)

/**
 * Task 2
 * Обробити данні форми. Зберігати введені данні до localStorage
 * в один ключ userData. Збирати данні до одного обьекту.
 */
// const userData = {
//     name: null,
//     email: null,
//     phone: null, 
// }
// const name = document.querySelector("#name")
// const email = document.querySelector("#email")
// const phone = document.querySelector("#phone")
// const form = document.querySelector(".form")

// document.addEventListener('DOMContentLoaded', () => {
//     const data = JSON.parse(localStorage.getItem('userData'))

//     for (const key in data) {
//         if (data[key]) {
//             document.querySelector(`#${key}`).value = data[key];
//             userData[key] = data[key];
//         }
//     }
// })

// form.addEventListener('change', (e) => {
//     userData[e.target.id] = e.target.value;
//     localStorage.setItem("userData", JSON.stringify(userData))
// })


// ============================== async ================================================

/**
 * Example 1
 * setTimeout(), setInterval() Розібрати,
 * що це за механізми. як працюють, як видалити інтервал.
 */

// let intervarId = null;
// let count = 0;
// const callback = () => {
//     console.log("OUR CALLBACK", intervarId)
//     count += 1;
//     if (count === 10) {
//         clearInterval(intervarId)
//     }
// }
// const delay = 1000
// // setTimeout(callback, delay)

// const button = document.querySelector('.action')
// const handler = function () {
//     if (intervarId) {
//         clearInterval(intervarId)
//     }
//    intervarId = setInterval(callback, delay)
// }
    
// button.addEventListener('click', handler)
// const intervarId = setInterval(callback, delay)

/**
 * Example 2
 * Асинхронність в javascipt. Відкладення подій, до того моменту поки не виконається основний поток.
 */
// console.log("init process")

// setTimeout(() => {
//     console.log("It first timeout")
// }, 10)

// for (let i = 0; i < 1000; i += 1){
//     console.log("our index in for: ", i)
// }

// setTimeout(() => {
//     console.log("It second timeout")
// }, 10)

/**
 * Example 3
 * Помилки для setIntervel, чи буде виконуватись інтервал,
 * якщо за ним будуть помилки основного потоку.
 */

// const idInterval = setInterval(()=> {
//     console.log("interval work")
// }, 1000)

// // //інструкція яка викликає помилку.
// number = number + 1

/**
 * Example 4
 * Що так workers, на прикладі операційної системи. (процесы) Абстракнта модель.
 * Теоритично на прикладі Laravel.
 * На скільки webworkers потрібно знати junior розробнику.
 */

/**
 * Example 5
 * Тестове завдання з якоїсь компанії
 * https://docs.google.com/document/d/146E1Rna-cfooGKfPCfWwnQ4ZK_Y4UKG4LFcwixMEfSI/edit?usp=sharing
 */

/**
 * Example 6
 * Робота з moment.js та основні задачі.
 */

// 1. Інсталяція момент як иодулю.

// 2. Імпорт момент як иодулю.
import moment from 'moment';
// console.log(moment())
// 3. Базові конструкції.

// const time = moment()
// const time = moment(1000)
// const time = moment("11.11.2011")
// const time = moment().unix() //unix

// const time = moment().date() //число
// const time = moment().day() //день тижня
// const time = moment().month() // мысяць -1
// const time = moment().year() // рік
// const time = moment().hour() // година
// const time = moment().minutes() // хвилина
// const time = moment().seconds() // секунда
// const time = moment().milliseconds() // мілісекунда

// console.log(time)

// UTC - це світовий рівномірний формат часу. метод utc буквально поверне час по 0-му мерідіану.
// const time = moment().utc()

// const time = moment().utc().date() //число
// const time = moment().utc().day() //день тижня
// const time = moment().utc().month() // мысяць -1
// const time = moment().utc().year() // рік
// const time = moment().utc().hour() // година
// const time = moment().utc().minutes() // хвилина
// const time = moment().utc().seconds() // секунда
// const time = moment().utc().milliseconds() // мілісекунда

// console.log(time)

//Get та Set для moment

// console.log(moment().get('year'));
// console.log(moment().get('month'));  // 0 to 11
// console.log(moment().get('date'));
// console.log(moment().get('hour'));
// console.log(moment().get('minute'));
// console.log(moment().get('second'));
// console.log(moment().get('millisecond'));

// console.log(moment().set('year', 2013));
// console.log(moment().set('month', 3));  // April
// console.log(moment().set('date', 1));
// console.log(moment().set('hour', 13));
// console.log(moment().set('minute', 20));
// console.log(moment().set('second', 30));
// console.log(moment().set('millisecond', 123));

// format https://momentjs.com/docs/#/displaying/format/

// const time = moment().format();                                // "2014-09-08T08:02:17-05:00" (ISO 8601, no fractional seconds)
// const time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); // "Sunday, February 14th 2010, 3:25:50 pm"
// const time = moment().format("ddd, hA");                       // "Sun, 3PM"
// const time = moment().format("[Today is] dddd");               // "Today is Sunday"

// console.log(time)
/**
 * TASK 1
 * Написати таймер для акції
 */

const root = document.querySelector('.time');

function makeTimer(root) {
    const current = moment('10.10.2000 00:00:00');
  const toDate = current.clone().add(1, 'minutes');

    console.log(current.format("hh:mm:ss"))
    console.log(toDate.format("hh:mm:ss"))
  const interval = setInterval(() => {
    if (toDate.isSame(current)) {
      clearInterval(interval);
      root.textContent = 'Time is over';
    } else {
      root.textContent = toDate.format(' mm : ss');
      toDate.subtract(1, 'seconds');
    }
  }, 1000);
}

makeTimer(root);
