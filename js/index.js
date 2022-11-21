'use strict';

// const root = document.querySelector('.root');
// const content = [];

// const multiplyText = (text, count) => {
//   let result = '';
//   for (let i = 0; i < count; i += 1) {
//     result += text;
//   }
//   return result;
// };

// const makeImages = function (url) {
//   const randomCount = Math.floor(Math.random() * 5);
//   let result = '<div class="image__wrapper">';
//   for (let i = 0; i < randomCount; i += 1) {
//     result += `
//       <img class="image animation" src="${url.replace(
//         '[id]',
//         Math.floor(Math.random() * 100)
//       )}" data-image="true">
//     `;
//   }

//   return result + '</div>';
// };

// for (let i = 0; i < 10; i += 1) {
//   content.push(`
//   <section class="section" style="background-color:
//     #${Math.floor(Math.random() * 16777215).toString(16)}
//   ">
//     <h2 class="title">
//       ${initData.title} ${i}
//     </h2>
//     <div class="wrapper">
//       <p class="description">
//         ${multiplyText(initData.description, 10)}
//       </p>
//       ${makeImages(initData.url)}
//     </div>
//   </section>
//   `);
// }

// root.insertAdjacentHTML('afterbegin', content.join(''));

// const scrollHandler = function () {
//   console.log('HELLO');
//   const screenTop = document.scrollingElement.scrollTop;
//   const screenBottom = screenTop + innerHeight;
//   const images = document.querySelectorAll('[data-image]');
//   images.forEach((item, index) => {
//     {
//       const sectionBootom =
//         item.parentNode.parentNode.parentNode.getBoundingClientRect().bottom;
//       if (sectionBootom < screenBottom) {
//         setTimeout(() => {
//           item.classList.add('active-animation');
//         }, 200 + index * 50);
//       }
//     }
//   });
// };

/**
 *  ================ Example 1 ==================
 * Для рутового елементу додати слушач події. Вивести в логи виклик scrollHandler,
 * щоб показати яку кількість разів викликається наша функція.
 *
 */
// const scrollHandler = function () {
//   console.log('HELLO');
// };

// root.addEventListener('scroll', _.throttle(scrollHandler, 1000));

/**
 *  ================ Example 2 ==================
 * Під'єднання lodash cdn
 * Обернути наш викли scrollHandler до _.trottle
 *
 * Додати removeEventListener('scroll', _.trottle).
 * Проблема з тим, що trottle поверне нам нову функцію.
 * І для того щоб його видалити необхідно спочатку trottle записати до якоїсь змінної
 */

// const scrollHandler = function () {
//   console.log('scrollHandler work');

//   const screenTop = document.scrollingElement.scrollTop;
//   const screenBottom = screenTop + innerHeight;
//   const images = document.querySelectorAll('[data-image]');
//   images.forEach((item, index) => {
//     {
//       const sectionBootom =
//         item.parentNode.parentNode.parentNode.getBoundingClientRect().bottom;
//       if (sectionBootom < screenBottom) {
//         setTimeout(() => {
//           item.classList.add('active-animation');
//         }, 200 + index * 50);
//       }
//     }
//   });

//   const trottleFunction = _.throttle(scrollHandler, 1000);
// };

// // root.addEventListener('scroll', _.throttle(scrollHandler, 1000)); //так робити не треба.
// // root.removeEventListener('scroll', _.throttle(scrollHandler, 1000));

// const trottleFunction = _.throttle(scrollHandler, 1000);
// root.addEventListener('scroll', trottleFunction);

/**
 *  ================ Example 3 ==================
 * Під'єднання lodash cdn
 * Вкористовуючи _.debounce знайти реалізувати пошук країни. Створити оброблення помилок.
 *
 */

// const searchInputEl = document.querySelector('.js-search-input');
// const outputError = document.querySelector('.js-output-error');
// const countryCardEl = document.querySelector('.js-country-card');

// const createCountryCard = ({ name, capital, population, area } = {}) => {
//   return `<li class="country-card__item"><strong>Країна:</strong> ${name}</li>
//      <li class="country-card__item"><strong>Столиця:</strong> ${capital}</li>
//      <li class="country-card__item"><strong>Населення:</strong> ${population}</li>
//      <li class="country-card__item"><strong>Площа:</strong> ${area}км<sup>2</sup></li>`;
// };

// const onSearchElInput = event => {
//   const searchQuery = event.target.value.trim();
//   console.log(searchQuery);
//   if (!searchQuery) {
//     outputError.innerHTML = '';
//     countryCardEl.innerHTML = '';
//     return;
//   }
//   const country = countries.find(el => {
//     return el.name.toLowerCase() === searchQuery.toLowerCase();
//   });
//   if (!country) {
//     outputError.textContent = 'Такої країни не знайдено';
//     countryCardEl.innerHTML = '';
//     return;
//   }
//   countryCardEl.innerHTML = createCountryCard(country);
//   outputError.innerHTML = '';
//   console.log(country);
// };

// searchInputEl.addEventListener('input', _.debounce(onSearchElInput, 2000));

/**
 *  ================ Example 3 ==================
 * Image lazyloading
 */

const gallery = document.querySelector('.gallery');
const banner = document.querySelector('.banner__img');

// const makeMarkUp = function () {
//   return images
//     .map(item => {
//       return `
//     <li class="gallery__item">
//       <a href="#" class="gallery__link">
//         <img
//           src="${item.url}"
//           data-banner-url="${item.urlLarge}"
//           alt="some image"
//         />
//       </a>
//     </li>
//     `;
//     })
//     .join('');
// };

// Зробити заміну оснровного фото по кліку на картинку галереї

// Додати lezyloading img використовуючи тег loading="lazy"

const makeMarkUp = function () {
  return images
    .map(item => {
      return `
    <li class="gallery__item">
      <a href="#" class="gallery__link">
        <img
          src="${item.url}"
          data-banner-url="${item.urlLarge}"
          alt="some image"
          loading="lazy"
          height="500"
          width="400"
        />
      </a>
    </li>
    `;
    })
    .join('');
};

// Додати lezyloading img використовуючи тег lazysizes

// const makeMarkUp = function () {
//   return images
//     .map(item => {
//       return `
//     <li class="gallery__item">
//       <a href="#" class="gallery__link">
//         <img
//           data-src="${item.url}"
//           data-banner-url="${item.urlLarge}"
//           alt="some image"
//           class="lazyload"
//         />
//       </a>
//     </li>
//     `;
//     })
//     .join('');
// };

const initGallery = function () {
  banner.src = images[0].urlLarge;
  gallery.insertAdjacentHTML('afterbegin', makeMarkUp());
};
initGallery();

const imageCheckHandler = event => {
  event.preventDefault();
  banner.src = event.target.dataset.bannerUrl;
};

gallery.addEventListener('click', imageCheckHandler);
