// =============== imports ===================
import Pagination from "./index.js";

// ==== fech old code ========================




// ==================== Client Part =====================
const searchFormEl = document.querySelector('.js-search-form');
const root = document.querySelector('.root')

const createGalleryCards = function (array){
  return array.map(item => {
      return `
      <li class='gallery__item'>
          <img
              src='${item.urls.small}'
              alt='${item.alt_description}'
              class='gallery-img'
          />
      </li>
      `
  }).join('')
}

const pagination = new Pagination({
    root: root,
    per_page: 20,
    client_id: '_qTG6-PYsqqQghIiyqCV2T_m0kPrw6S64iJ18ECz_84',
    baseUrl: 'https://api.unsplash.com//search/photos',
    makeCardMarkup: createGalleryCards
})

const onSearchFormSubmit = event => {
    event.preventDefault();
  
    const query = event.currentTarget.elements['user-search-query'].value;
    pagination.fetchByQueryString(query)
  };
  
searchFormEl.addEventListener('submit', onSearchFormSubmit);