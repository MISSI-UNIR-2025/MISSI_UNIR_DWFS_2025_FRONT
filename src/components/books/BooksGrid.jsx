import useBooksStore from '../../store/useBooksStore';
import BookCard from './BookCard';

const BooksGrid = () => {
  const books = useBooksStore((s) => s.books);

  if (!books.length) {
    return (
      <div className="text-center py-20 text-gray-500">
        Start typing to search books 📚
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BooksGrid;
