// FRONT PART

// XMLHttpRequest

// const url = "http://localhost:3000"
// const xhr = new XMLHttpRequest();
// xhr.open('GET', url);
// xhr.send();
//   xhr.addEventListener('load', () => {
//   if (xhr.status !== 200) {
//     console.log(xhr.status);
//   } else {
//     console.log(xhr.responseText);
//   }
// });

// const url = "http://localhost:3000"
// fetch(url).then(response => response.text()).then(data => console.log(data))
// fetch(url).then(response => response.json()).then(data => console.log(data))

//axios

import axios from 'axios';
const url = 'http://localhost:3000';
axios
  .get(url)
  .then(({ data }) => console.log(data))
  .catch(err => console.log(err));

/**
 *  BINANCE TASK 1
 *  Заброаты пары монеток, вивести поточный куст.
 *  Створити оновлення пар по інтервалу. Малювати стріточку ↓ залежно від курсу ↑
 */

/**
 *  BINANCE TASK 2
 *  Знайти найвигідніші пропозицій по парі монеток. Розрахувати приблизний профіт якщо купити і зразу продати монетку.
 */
