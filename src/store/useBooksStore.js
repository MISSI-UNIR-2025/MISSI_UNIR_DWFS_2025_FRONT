import { create } from 'zustand';
import { buildQuery } from '../services/buildQueryService';


const PAGE_SIZE = 20;
const MIN_SEARCH_CHARS = 5;



const useBooksStore = create((set, get) => ({
  books: [],
  inputValue: '',
  query: {
    query: "",
    autocomplete: "",
    categoryName: "",
    authorId: "",
    rating: "",
    minRating: "",
    minPrice: "",
    maxPrice: "",
    sortBy: "publicationDate",
    sortOrder: "desc",
    page: 0,
    size: 10,
  },
  startIndex: 0,
  loading: false,
  hasMore: true,

  setInputValue: (value) =>  {

    let { query } = get();
    query.query = value;
    query.page = 0;

    set({ inputValue: value, query: query });

  },

  resetSearch: () =>
    set({
      books: [],
      startIndex: 0,
      hasMore: true,
    }),

  loadMoreBooks: async (fetchBooks) => {
    
     const { loading, hasMore, query } = get();
     if (loading || !hasMore) return;

     set({ loading: true });

     const booksApi = await fetchBooks({ query });
     const newBooks = booksApi.content.map((book) => ({
       id: book.id,
       title: book.title,
       author: book.author.name,
       image: book.imageUrl,
       description: book.description,
       category: book.category.name,
       price: book.price,
       rating: book.rating,
     }));

    set((state) => ({
      books: [...state.books, ...newBooks],
      hasMore: newBooks.length > 0,
      loading: false,
      query: query,
    }));
  },

  searchBooks: async (fetchBooks) => {
   
  

const { query } = get();

     set({ loading: true });
   set({
     
      books: [],
     
      hasMore: true,
    });
     const booksApi = await fetchBooks({ query });
     const newBooks = booksApi.content.map((book) => ({
       id: book.id,
       title: book.title,
       author: book.author.name,
       image: book.imageUrl,
       description: book.description,
       category: book.category.name,
       price: book.price,
       rating: book.rating,
     }));

    set((state) => ({
      books: [...state.books, ...newBooks],
      hasMore: newBooks.length > 0,
      loading: false,
      query: query,
    }));



   },

  changequery:(page)=>{
    const { query } = get();
    query.page = page;
    set({
      query: query
     
    });
  }

}));

export default useBooksStore;
