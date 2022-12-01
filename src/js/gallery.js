// https://unsplash.com/

import { UnsplashAPI } from './unsplash-api';
import createGalleryCards from '../templates/gallery-card.hbs';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loadMoreBtnEl = document.querySelector('.js-load-more');

const unsplashAPI = new UnsplashAPI();

const onSearchFormSubmit = event => {
  event.preventDefault();

  unsplashAPI.query = event.currentTarget.elements['user-search-query'].value;
  unsplashAPI.page = 1;

  unsplashAPI
    .fetchPhotosByQuery()
    .then(data => {
      console.log(data);

      if (data.results.length === 0) {
        galleryEl.innerHTML = '';
        loadMoreBtnEl.classList.add('is-hidden');
        event.target.reset();
        return;
      }

      galleryEl.innerHTML = createGalleryCards(data.results);

      loadMoreBtnEl.classList.remove('is-hidden');
    })
    .catch(err => {
      console.log(err);
    });
};

const onLoadMoreBtnClick = event => {
  unsplashAPI.page += 1;

  unsplashAPI
    .fetchPhotosByQuery()
    .then(data => {
      if (unsplashAPI.page === data.total_pages) {
        loadMoreBtnEl.classList.add('is-hidden');
      }

      galleryEl.insertAdjacentHTML(
        'beforeend',
        createGalleryCards(data.results)
      );
    })
    .catch(err => {
      console.log(err);
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);
