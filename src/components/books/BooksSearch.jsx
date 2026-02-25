import { Input, Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import useBooksStore from '../../store/useBooksStore';
import { useApiBooks } from '../../hooks/useApiBooks';

const { Title, Text } = Typography;

const BooksSearch = () => {
  const { fetchBooks } = useApiBooks();
  const { inputValue, setInputValue, searchBooks, query } = useBooksStore();

  const onChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    searchBooks(fetchBooks);


  };

  return (
    <div className="mb-12 text-center">
      <Title level={1} className="mb-2! text-4xl! font-bold text-gray-800">
        Library Collection
      </Title>

      <Text className="text-gray-500 text-lg">
        Explore our handpicked selection of timeless classics and modern hits.
      </Text>

      <div className="max-w-xl mx-auto mt-8">
        <Input
          size="large"
          value={query.query}
          placeholder="Search by book title (min 5 chars)"
          prefix={<SearchOutlined />}
          onChange={onChange}
          className="rounded-full px-6 py-3"
        />
      </div>
    </div>
  );
};

export default BooksSearch;
