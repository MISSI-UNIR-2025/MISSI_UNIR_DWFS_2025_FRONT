import { List, Typography } from 'antd';

const { Text } = Typography;

const CartItemRow = ({ item }) => (
  <List.Item>
    <List.Item.Meta
      avatar={
        <img
          src={item.image}
          alt={item.title}
          className="w-16 h-20 object-cover rounded bg-gray-100"
        />
      }
      title={<Text strong>{item.title}</Text>}
      description={`Qty: ${item.quantity}`}
    />
    <div className="text-right">
      <Text strong>${(item.price * item.quantity).toFixed(2)}</Text>
    </div>
  </List.Item>
);

export default CartItemRow;
