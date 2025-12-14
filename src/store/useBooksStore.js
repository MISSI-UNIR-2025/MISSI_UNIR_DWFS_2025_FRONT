import { create } from 'zustand';
import { fetchGoogleBooks } from '../services/googleBooks.service';

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

  setInputValue: (value) => {
    set({ inputValue: value });
  },

  searchBooks: async () => {
    const { inputValue } = get();
    const query = buildQuery(inputValue);

    set({
      query,
      startIndex: 0,
      books: [],
      hasMore: true,
    });

    await get().loadMoreBooks(true);
  },

  loadMoreBooks: async (reset = false) => {
    const { loading, hasMore, query, startIndex } = get();
    if (loading || (!hasMore && !reset)) return;

    set({ loading: true });

    const books = await fetchGoogleBooks({
      query,
      startIndex: reset ? 0 : startIndex,
      limit: PAGE_SIZE,
    });

    set((state) => ({
      books: reset ? books : [...state.books, ...books],
      startIndex: reset ? PAGE_SIZE : state.startIndex + PAGE_SIZE,
      hasMore: books.length > 0,
      loading: false,
    }));
  },
}));

export default useBooksStore;
