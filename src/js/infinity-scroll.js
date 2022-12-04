// /https://codepen.io/desandro/pen/YzGazmq

import InfiniteScroll from 'infinite-scroll';
const BASE_URL = 'https://api.unsplash.com';
const API_KEY = '_qTG6-PYsqqQghIiyqCV2T_m0kPrw6S64iJ18ECz_84';

const container = document.querySelector('.container');
const infScroll = new InfiniteScroll(container, {
  path: function () {
    const searchParams = new URLSearchParams({
      query: 'cat',
      page: this.pageIndex,
      per_page: 20,
      client_id: API_KEY,
    });

    return `${BASE_URL}/search/photos?${searchParams}`;
  },
  responseBody: 'json',
  status: '.scroll-status',
  history: false,
});

const proxyElem = document.createElement('div');

infScroll.on('load', function (body) {
  const itemsHTML = body.results.map(getItemHTML).join('');
  proxyElem.innerHTML = itemsHTML;
  container.append(...proxyElem.children);
});

function getItemHTML({ user, urls }) {
  return `
  <li class="photo-item">
    <img src="${urls.small}" width="180" height="300" alt="Photo by ${user.name}" />
  </li>`;
}

infScroll.loadNextPage();
