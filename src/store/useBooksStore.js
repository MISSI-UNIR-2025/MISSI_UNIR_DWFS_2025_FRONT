import { create } from 'zustand';

const PAGE_SIZE = 20;
const MIN_SEARCH_CHARS = 5;

const buildQuery = (text) => {
  const t = text.trim();
  if (t.length >= MIN_SEARCH_CHARS) {
    return `intitle:"${t}"`;
  }
  return 'subject:fiction';
};

const useBooksStore = create((set, get) => ({
  books: [],
  inputValue: '',
  query: 'subject:fiction',
  startIndex: 0,
  loading: false,
  hasMore: true,

  setInputValue: (value) => set({ inputValue: value }),

  resetSearch: () =>
    set({
      books: [],
      startIndex: 0,
      hasMore: true,
    }),

  loadMoreBooks: async (fetchBooks) => {
    const { loading, hasMore, query, startIndex } = get();
    if (loading || !hasMore) return;

    set({ loading: true });

    const newBooks = await fetchBooks({ query, startIndex });

    set((state) => ({
      books: [...state.books, ...newBooks],
      startIndex: state.startIndex + PAGE_SIZE,
      hasMore: newBooks.length > 0,
      loading: false,
    }));
  },

  searchBooks: async (fetchBooks) => {
    const { inputValue } = get();
    const query = buildQuery(inputValue);

    set({
      query,
      books: [],
      startIndex: 0,
      hasMore: true,
    });

    const newBooks = await fetchBooks({ query, startIndex: 0 });

    set({
      books: newBooks,
      startIndex: PAGE_SIZE,
      hasMore: newBooks.length > 0,
      loading: false,
    });
  },
}));

export default useBooksStore;
