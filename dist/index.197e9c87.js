/**
 *  BINANCE TASK 1
 *  Заброаты пары монеток, вивести поточный куст.
 *  Створити оновлення пар по інтервалу. Малювати стріточку ↓ залежно від курсу ↑
 */ // const baseURL = 'https://api.binance.com';
// const priceRoute = '/api/v3/ticker/price';
// const root = document.querySelector('.root');
// let lastData = [];
// let nextData = [];
// const filterPairs = (array, part) => {
//   return array.filter(item => item.symbol.includes(part)).slice(0, 9);
// };
// const makeMarkup = array => {
//   const rows = array
//     .map((item, index) => {
//       return `
//             <tr>
//                 <td class="table__item">${item.symbol}</td>
//                 <td class="table__item  ${item.status}">${item.price}</td>
//             </tr>
//         `;
//     })
//     .join('');
//   return `
//     <table>
//         <thead>
//             <tr>
//                 <th class="table__item">NAME</th>
//                 <th class="table__item">PRICE</th>
//             </tr>
//         </thead>
//         <tbody>
//             ${rows}
//         </tbody>
//     </table>
//     `;
// };
// const renderPairs = array => {
//   root.innerHTML = '';
//   root.insertAdjacentHTML('afterbegin', makeMarkup(array));
// };
// const makeCurrentPairsStatus = (lastArray, nextArray) => {
//   return nextArray.map((item, index) => {
//     return {
//       ...item,
//       status: item.price > lastArray[index].price ? 'green' : 'red',
//     };
//   });
// };
// const processBinanceData = data => {
//   const filteredData = filterPairs(data, 'USDT');
//   if (!lastData.length) {
//     lastData = filteredData;
//   } else {
//     lastData = nextData;
//   }
//   nextData = filteredData;
//   renderPairs(makeCurrentPairsStatus(lastData, nextData));
// };
// const id = setInterval(() => {
//   fetch(`${baseURL}${priceRoute}`)
//     .then(response => response.json())
//     .then(data => processBinanceData(data));
// }, 5000);
// setTimeout(() => {
//   clearInterval(id);
// }, 60000);
/**
 *  BINANCE TASK 2
 *  Знайти найвигідніші пропозицій по парі монеток. Розрахувати приблизний профіт якщо купити і зразу продати монетку.
 *  Створити умовну пагінацію для пар з USDT
 */ // fetch('http://localhost:3000')
//     .then(response => response.json())
//     .then(data => console.log(data))

//# sourceMappingURL=index.197e9c87.js.map
