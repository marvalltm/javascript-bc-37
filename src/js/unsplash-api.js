export class UnsplashAPI {
  #BASE_URL = 'https://api.unsplash.com';
  #API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';

  constructor() {
    this.page = 1;
    this.query = null;
  }

  fetchPhotosByQuery() {
    const searchParams = new URLSearchParams({
      query: this.query,
      page: this.page,
      per_page: 10,
      client_id: this.#API_KEY,
    });

    return fetch(`${this.#BASE_URL}/search/photos?${searchParams}`).then(
      response => {
        if (!response.ok) {
          throw new Error(response.status);
        }

        return response.json();
      }
    );
  }
}
