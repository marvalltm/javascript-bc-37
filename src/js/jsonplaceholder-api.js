export class JsonPlaceholderApi {
  constructor() {
    this.page = 1;
  }

  fetchPosts() {
    return fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${this.page}`
    ).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    });
  }
}
