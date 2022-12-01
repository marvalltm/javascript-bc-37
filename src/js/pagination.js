// https://jsonplaceholder.typicode.com/

import { JsonPlaceholderApi } from './jsonplaceholder-api';
import createPostCards from '../templates/posts.hbs';

const postsGalleryEl = document.querySelector('.js-posts');
const loadMoreBtnEl = document.querySelector('.js-load-more');

const jsonPlaceholderApi = new JsonPlaceholderApi();

const renderPosts = () => {
  jsonPlaceholderApi
    .fetchPosts()
    .then(data => {
      postsGalleryEl.innerHTML = createPostCards(data);
    })
    .catch(err => {
      console.log(err);
    });
};

renderPosts();

const onLoadMoreBtnClick = event => {
  jsonPlaceholderApi.page += 1;

  jsonPlaceholderApi
    .fetchPosts()
    .then(data => {
      postsGalleryEl.insertAdjacentHTML('beforeend', createPostCards(data));
    })
    .catch(err => {
      console.log(err);
    });
};

loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);
