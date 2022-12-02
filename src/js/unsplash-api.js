export class UnsplashAPI {
  #BASE_URL = 'https://api.unsplash.com';
  #API_KEY = '_qTG6-PYsqqQghIiyqCV2T_m0kPrw6S64iJ18ECz_84';

  constructor() {
    this.page = 1;
    this.query = null;
  }

  fetchPhotosByQuery() {
    const searchParams = new URLSearchParams({
      query: this.query,
      page: this.page,
      per_page: 20,
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
