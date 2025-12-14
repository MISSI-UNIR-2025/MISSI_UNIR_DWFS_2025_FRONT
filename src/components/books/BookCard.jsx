import { Card, Rate, Tag, Typography, Button } from 'antd';
import { EyeOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import useCartStore from '../../store/useCartStore';

const { Title, Text } = Typography;

const BookCard = ({ book }) => {
  const navigate = useNavigate();
  const addToCart = useCartStore((s) => s.addToCart);

  return (
    <Card
      hoverable
      className="h-full rounded-2xl border-0 shadow-sm"
      cover={
        <div className="relative h-80 overflow-hidden">
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 flex items-center justify-center gap-4">
            <Button
              shape="circle"
              icon={<EyeOutlined />}
              onClick={() => navigate(`/book/${book.id}`)}
            />
            <Button
              shape="circle"
              type="primary"
              icon={<ShoppingCartOutlined />}
              onClick={() => addToCart(book)}
            />
          </div>

          <div className="absolute top-3 right-3">
            <Tag>${book.price}</Tag>
          </div>
        </div>
      }
    >
      <Tag color="blue">{book.category}</Tag>

      <Title level={5} className="line-clamp-1">
        {book.title}
      </Title>

      <Text type="secondary">{book.author}</Text>
      <Rate disabled defaultValue={4.5} />
    </Card>
  );
};

export default BookCard;
