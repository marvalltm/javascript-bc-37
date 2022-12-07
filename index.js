class Pagination {
    constructor(options){
        this.root = options.root;
        this.baseUrl = options.baseUrl;
        this.per_page = options.per_page;
        this.client_id =  options.client_id;
        this.page = 1;
        this.makeCardMarkup = options.makeCardMarkup ? options.makeCardMarkup : this.makeCardMarkupDefault;
    }

    async fetchPhotos() {

        const response = await fetch(this.baseUrl + '?' + new URLSearchParams({
            page: this.page,
            per_page: this.per_page,
            client_id: this.client_id,
            query: this.query
        }))

        if(!response.ok) {
            throw new Error ("cann't get data")
        }

        const json = await response.json()

        this.root.innerHTML = this.makeCardMarkup(json.results)

        this.checkPaginaion(json.total_pages)
    }

    fetchByQueryString(value){
        this.page = 1;
        this.query = value;
        this.fetchPhotos();
    }

    makeCardMarkupDefault(array) {
        return array.map(item => {
            return `
                <img
                    src='${item.urls.small}'
                />
            `
        }).join('')
    }

    checkPaginaion(total_pages) {
        if(this.page === 1){
            this.makePaginaion(total_pages)
            this.paginationWrapper.addEventListener('click', (event) => {

                this.page = event.target.dataset.value;
                this.fetchPhotos()
            })
        } else {
            this.changePagination(total_pages)
        }

    }
    changePagination(total_pages){
        if(this.paginationWrapper) {
            [...this.paginationWrapper.children].forEach((el, index) => {
                el.dataset.value = index - 2 + Number(this.page)
                el.textContent = index - 2 + Number(this.page)
            })
        }else{
            throw new Error("I Have Some probleb")
        }
    }

    makePaginaion(total_pages) {
        const range = total_pages > 5 ? 6 : total_pages + 1
        const ul = document.createElement('ul')
        ul.className = 'ul__paginatoin_element';
        const liElements = []
        for(let i = 1; i < range; i += 1){
            liElements.push(`
                <li class="li__pagination_element" data-index=${i} data-value=${i}><span>${i}</span></li>
            `)
        }
        ul.insertAdjacentHTML('afterbegin', liElements.join(""))
        this.root.insertAdjacentElement('afterend', ul)
        this.paginationWrapper = ul
    }
}

export default Pagination