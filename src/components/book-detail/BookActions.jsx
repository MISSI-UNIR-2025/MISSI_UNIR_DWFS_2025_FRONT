import { Typography, Button } from 'antd';
import { ShoppingCartOutlined, ArrowLeftOutlined } from '@ant-design/icons';

const { Text } = Typography;

const BookActions = ({ price, onAdd, onBack }) => (
  <div className="flex items-center gap-8 border-t border-gray-100 pt-8">
    <div className="flex flex-col">
      <Text type="secondary" className="text-sm">Price</Text>
      <Text className="text-3xl font-bold text-gray-900">
        ${price}
      </Text>
    </div>

    <div className="flex gap-4">
      <Button
        type="primary"
        size="large"
        icon={<ShoppingCartOutlined />}
        onClick={onAdd}
        className="bg-indigo-600 hover:bg-indigo-700 h-14 px-8 text-lg rounded-xl shadow-lg shadow-indigo-200"
      >
        Add to Cart
      </Button>

      <Button
        size="large"
        icon={<ArrowLeftOutlined />}
        onClick={onBack}
        className="h-14 px-6 text-lg rounded-xl border-gray-200 hover:border-indigo-600 hover:text-indigo-600"
      >
        Back
      </Button>
    </div>
  </div>
);

export default BookActions;
