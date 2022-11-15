'use strict';
//* Об'єкти window і document
// console.log(window);
// console.log(document);
// console.log(location);
// console.log(navigator);

//* Cтарі методи пошуку елементів (getElementBy...)

// const titleElement = document.getElementById('title');
// const listItemElement = document.getElementsByClassName('list__item');

// console.log(titleElement);
// console.log(listItemElement);
// * Сучасні методи пошуку елементів (querySelector, querySelectorAll)

// const ref = {
//   titleElement: document.querySelector('#title'),
//   listItemElements: document.querySelectorAll('.list__item'),
// };

// const titleElement = document.querySelector('#title');
// const listItemElements = document.querySelectorAll('.list__item');

// // console.log(ref.titleElement);
// console.log(listItemElements);

//* Навігації по DOM дереву
// elem.parentNode - вибере батьківський elem.
// elem.childNodes - псевдомасив, зберігає всі дочірні елементи, включно з текстовими.
// elem.children - псевдомасив, зберігає тільки дочірні вузли-елементи, тобто ті, що відповідають тегам.
// elem.firstChild - вибере перший дочірній елемент всередині elem, включно з текстовими вузлами.
// elem.firstElementChild - вибере перший дочірній вузол-елемент всередині elem.
// elem.lastChild - вибере останній дочірній елемент всередині elem, включно з текстовими вузлами.
// elem.lastElementChild - вибере останній дочірній вузол-елемент всередині elem.
// elem.previousSibling - вибере елемент «зліва» від elem (його попереднього сусіда).
// elem.previousElementSibling - вибере вузол-елемент «зліва» від elem (його попереднього сусіда).
// elem.nextSibling - вибере елемент «праворуч» від elem (його наступного сусіда)
// elem.nextElementSibling - вибере вузол-елемент «праворуч» від elem (його наступного сусіда).

// const listElement = document.querySelector('.list');
// console.log(listElement.nextElementSibling);
/**
 * Атрибути як властивості.
 */

// const imageElement = document.querySelector('#baseImage');
// console.log(imageElement);
// imageElement.src = 'https://picsum.photos/id/6/200/300';
// imageElement.title = 'notebook';
// imageElement.alt = 'notebook';
// imageElement.width = 300;

// https://picsum.photos/200/300
// const actionButtonElement = document.querySelector('.action');
// actionButtonElement.addEventListener('click', e => {
//   imageElement.src = `https://picsum.photos/id/${Math.floor(
//     Math.random() * 1000
//   )}/200/300`;
//   imageElement.alt = 'random image';
// });

/*
 * Доступ до атрибутів
 *
 * elem.hasAttribute(name)
 * elem.getAttribute(name)
 * elem.setAttribute(name, value)
 * elem.removeAttribute(name)
 * elem.attributes
 */

// const imageElement = document.querySelector('#baseImage');
// // console.log(imageElement.removeAttribute('class'));
// console.log(imageElement.hasAttribute('class'));
// console.log(imageElement.getAttribute('class'));

/**
 *  Об'єкт style, cssText
 */
// const titleElement = document.getElementById('title');
// console.log(titleElement);
// titleElement.style.color = '#777777';
// titleElement.style.fontSize = '50px';
// titleElement.style.backgroundColor = '#caffdd';
// titleElement.style.padding = '20px';

// titleElement.style.cssText = `color: #777777;
//   font-size: 30px;
//   background-color: #caffdd;
//   padding: 20pх
//   `;
// titleElement.style = `color: #777777;
// font-size: 30px;
// background-color: #caffdd;
// padding: 20pх
// `;

// console.log(titleElement);

//* Методи об'єкту classList (add, remove, toggle, contains)

// const rootElement = document.querySelector('.root');
// console.log(rootElement.classList);
// rootElement.classList.add('red');
// rootElement.classList.remove('red');
// console.log(rootElement.classList.contains('red'));
// console.log(rootElement.className);
// rootElement.classList.toggle('green');

// const modalElement = document.querySelector('.modal');
// const openModalButton = document.querySelector('.openModal');
// const closeModalButton = document.querySelector('.closeModal');

// const callback = () => {
//   modalElement.classList.toggle('hidden');
// };

// openModalButton.addEventListener('click', callback);
// closeModalButton.addEventListener('click', callback);

/**
 * Card of Gallery
 */

/*
<li class="gallery-item">
  <a href="#">
    <img src="https://picsum.photos/id/237/200/300" alt="Labrador">
    <p>Some Description</p>
  </a>
</li>
*/

// const galleryRoot = document.querySelector('#rootList');

// const makeGalleryItem = function () {
//   const li = document.createElement('li');
//   li.classList.add('gallery-item');

//   const a = document.createElement('a');
//   a.href = '#';
//   li.append(a);

//   const img = document.createElement('img');
//   img.src = 'https://picsum.photos/id/237/200/300';
//   img.alt = 'random image';
//   a.append(img);
//   const p = document.createElement('p');
//   p.textContent = 'Some Description';
//   a.append(p);
//   return li;
// };
// galleryRoot.append(makeGalleryItem());

/**
 * Створити галерею на основі масиву pictures
 */

/*
  <li class="gallery-item">
    <a href="#">
      <img src="https://picsum.photos/id/237/200/300" alt="Labrador" width="" height="">
      <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non laudantium nostrum, aliquid impedit sit repellendus neque minima
            repudiandae nulla sed dolorem dolore corporis consectetur quam magni
            vel numquam. Ipsam, ut?
      </p>
    </a>
  </li>
  */

// Створити карточку на основі document.createElement
// Перебір масиву pictures через map
// Вставка колекції карток на сторінку за допомогою append(...args);

//pictures
// console.log(pictures[0]);
// const galleryRoot = document.querySelector('#rootList');
// const makeGalleryItem = function ({
//   classList,
//   width,
//   alt,
//   description,
//   height,
//   url,
// }) {
//   const li = document.createElement('li');
//   li.classList.add(classList);

//   const a = document.createElement('a');
//   a.href = '#';
//   li.append(a);

//   const img = document.createElement('img');
//   img.src = url;
//   img.alt = alt;
//   img.width = width;
//   img.height = height;
//   a.append(img);
//   const p = document.createElement('p');
//   p.textContent = description;
//   a.append(p);
//   return li;
// };
// const elements = pictures.map((el, index, array) => makeGalleryItem(el));
// const elements = pictures.map(makeGalleryItem);
// galleryRoot.append(...pictures.map(makeGalleryItem));

// Створити карточку на основі шаблонної строки
// Вставка колекції карток на сторінку за допомогою innerHTML;
// Вставка колекції карток на сторінку за допомогою insertAdjacentHTML('afterbegin', [array].join(''));

// console.log(pictures);

// const galleryRoot = document.querySelector('#rootList');
// const makeGalleryItem = function (picture) {
//   return `
//   <li class="${picture.classList}">
//     <a href="#">
//       <img
//         src="${picture.url}"
//         alt="${picture.alt}"
//         width="${picture.width}"
//         height="${picture.height}"
//       >
//       <p>${picture.description}</p>
//     </a>
//   </li>
//   `;
// };
// console.log(galleryRoot.innerHTML);
// // const elements = pictures.map((el, index, array) => makeGalleryItem(el));
// // galleryRoot.innerHTML = elements.join('');
// // galleryRoot.textContent = pictures.map(makeGalleryItem).join('');
// galleryRoot.innerHTML = pictures.map(makeGalleryItem).join('');
// console.log(pictures.map(makeGalleryItem).join(''));

// const root = document.querySelector('.root');
// root.innerHTML = `  <li class="gallery-item">
// <a href="#">
//   <img src="https://picsum.photos/id/237/200/300" alt="Labrador" width="" height="">
//   <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Non laudantium nostrum, aliquid impedit sit repellendus neque minima
//         repudiandae nulla sed dolorem dolore corporis consectetur quam magni
//         vel numquam. Ipsam, ut?
//   </p>
// </a>
// </li>`;

// galleryRoot.insertAdjacentHTML(
//   'afterbegin',
//   pictures.map(makeGalleryItem).join('')
// );

// console.log(galleryRoot);
