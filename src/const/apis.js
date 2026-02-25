export const API ={
    BASE_URL:import.meta.env.VITE_API_URL,

    apis:{
        BooksSearch:"/ms-books-catalogue/api/books/open-search",
        BookById: (id)=>`/ms-books-catalogue/api/books/${id}`
    }
}