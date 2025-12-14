import { List, Typography, Divider } from 'antd';
import CartItemRow from './CartItemRow';

const { Title, Text } = Typography;

const OrderSummary = ({ cart, total }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
    <div className="p-8">
      <Title level={4} className="mb-6">Order Summary</Title>

      <List
        itemLayout="horizontal"
        dataSource={cart}
        renderItem={(item) => <CartItemRow item={item} />}
      />

      <Divider />

      <div className="flex justify-between items-center mb-8">
        <Text className="text-xl text-gray-600">Total Amount</Text>
        <Text className="text-3xl font-bold text-indigo-600">
          ${total.toFixed(2)}
        </Text>
      </div>
    </div>
  </div>
);

export default OrderSummary;
