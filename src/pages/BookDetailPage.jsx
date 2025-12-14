import { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

import useCartStore from '../store/useCartStore';
import useBooksStore from '../store/useBooksStore';

import BookBreadcrumb from '../components/book-detail/BookBreadcrumb';
import BookNotFound from '../components/book-detail/BookNotFound';
import BookCover from '../components/book-detail/BookCover';
import BookMeta from '../components/book-detail/BookMeta';
import BookActions from '../components/book-detail/BookActions';

const mapGoogleVolumeToBook = (item) => {
  const info = item?.volumeInfo ?? {};
  return {
    id: item.id,
    title: info.title ?? 'Untitled',
    author: info.authors?.join(', ') ?? 'Unknown author',
    image:
      info.imageLinks?.thumbnail ??
      'https://via.placeholder.com/300x450?text=No+Cover',
    description: info.description ?? '',
    category: info.categories?.[0] ?? 'General',
    price: +(Math.random() * (40 - 10) + 10).toFixed(2),
  };
};

const BookDetailPage = () => {
  const { id } = useParams(); // Google Books volumeId
  const navigate = useNavigate();

  const addToCart = useCartStore((s) => s.addToCart);
  const books = useBooksStore((s) => s.books);

  const bookFromStore = useMemo(() => books.find((b) => b.id === id), [books, id]);
  const [book, setBook] = useState(bookFromStore ?? null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (bookFromStore) {
      setBook(bookFromStore);
      setLoading(false);
     
    }


  }, [ bookFromStore]);

  const handleAddToCart = () => {
    if (!book) return;
    addToCart(book);
    message.success({
      content: 'Added to cart',
      icon: <CheckOutlined className="text-green-500" />,
      className: 'mt-10',
    });
  };

  if (loading) {
    return <div className="py-24 text-center">Loading...</div>;
  }

  if (!book) {
    return <BookNotFound onBack={() => navigate('/home')} />;
  }

  return (
    <>
      <BookBreadcrumb onHome={() => navigate('/home')} title={book.title} />

      <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <BookCover image={book.image} title={book.title} />

          <div className="md:col-span-8 lg:col-span-9">
            <BookMeta book={book} />

            <BookActions
              price={book.price}
              onAdd={handleAddToCart}
              onBack={() => navigate('/home')}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetailPage;
