import { useEffect, useRef } from 'react';
import { Spin, Typography } from 'antd';
import useBooksStore from '../../store/useBooksStore';

const { Text } = Typography;

const BooksLoader = () => {
  const { loadMoreBooks, loading, hasMore } = useBooksStore();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreBooks();
        }
      },
      { threshold: 1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="py-10 flex justify-center">
      {loading && <Spin size="large" />}
      {!loading && !hasMore && <Text>No more books</Text>}
    </div>
  );
};

export default BooksLoader;
