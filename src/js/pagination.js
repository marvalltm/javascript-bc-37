// https://jsonplaceholder.typicode.com/

import { JsonPlaceholderApi } from './jsonplaceholder-api';
import createPostCards from '../templates/posts.hbs';

// console.log("createPostCards", createPostCards)

const postsGalleryEl = document.querySelector('.js-posts');
const loadMoreBtnEl = document.querySelector('.js-load-more');

const jsonPlaceholderApi = new JsonPlaceholderApi();
console.log(jsonPlaceholderApi)
const renderPosts = () => {
  jsonPlaceholderApi
    .fetchPosts()
    .then(data => {
      // console.log("DATA IN THEN: ", data)
      postsGalleryEl.innerHTML = createPostCards(data);
    })
    .catch(err => {
      console.log(err);
    });
};

renderPosts();

const onLoadMoreBtnClick = event => {
  jsonPlaceholderApi.page += 1;


  console.log(jsonPlaceholderApi)
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
