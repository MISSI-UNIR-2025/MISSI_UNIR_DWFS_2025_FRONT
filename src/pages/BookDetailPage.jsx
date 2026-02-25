import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

import useCartStore from '../store/useCartStore';

import BookBreadcrumb from '../components/book-detail/BookBreadcrumb';
import BookNotFound from '../components/book-detail/BookNotFound';
import BookCover from '../components/book-detail/BookCover';
import BookMeta from '../components/book-detail/BookMeta';
import BookActions from '../components/book-detail/BookActions';
import { useApiBooks } from '../hooks/useApiBooks';

const BookDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const addToCart = useCartStore((s) => s.addToCart);

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const { fetchBookById } = useApiBooks();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        setLoading(true);
        const data = await fetchBookById(id);
       
        setBook(data);
      } catch (error) {
        console.error('Error fetching book:', error);
        setBook(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]); 

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
          <BookCover image={book.imageUrl} title={book.title} />

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