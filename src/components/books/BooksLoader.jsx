import { useEffect, useRef } from 'react';
import { Spin, Typography } from 'antd';
import useBooksStore from '../../store/useBooksStore';
import { useGoogleBooks } from '../../hooks/useGoogleBooks';

const { Text } = Typography;

const BooksLoader = () => {
  const { loadMoreBooks, loading, hasMore } = useBooksStore();
  const { fetchBooks } = useGoogleBooks();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreBooks(fetchBooks); // ✅ AQUÍ está el cambio clave
        }
      },
      { threshold: 1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [fetchBooks, loadMoreBooks]);

  return (
    <div ref={ref} className="py-10 flex justify-center">
      {loading && <Spin size="large" />}
      {!loading && !hasMore && <Text>No more books</Text>}
    </div>
  );
};

export default BooksLoader;
