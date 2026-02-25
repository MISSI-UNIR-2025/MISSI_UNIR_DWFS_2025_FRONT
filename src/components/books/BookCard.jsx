import { Card, Rate, Tag, Typography, Button } from 'antd';
import { EyeOutlined, ShoppingCartOutlined, BookOutlined } from '@ant-design/icons';
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
                <div className="relative h-80 overflow-hidden group bg-gray-100">
                    {book.image && book.image !== 'emptyImage' ? (
                        <img
                            src={book.image}
                            alt={book.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                            }}
                        />
                    ) : null}

                    <div
                        className="absolute inset-0 flex flex-col items-center justify-center text-gray-400"
                        style={{
                            display: book.image && book.image !== 'emptyImage' ? 'none' : 'flex',
                        }}
                    >
                        <BookOutlined style={{ fontSize: 48 }} />
                        <span className="text-sm mt-2">Sin imagen</span>
                    </div>

                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                        <Button
                            shape="circle"
                            size="large"
                            icon={<EyeOutlined />}
                            onClick={() => navigate(`/book/${book.id}`)}
                            className="shadow-lg"
                        />
                        <Button
                            shape="circle"
                            size="large"
                            type="primary"
                            icon={<ShoppingCartOutlined />}
                            onClick={() => addToCart(book)}
                            className="shadow-lg"
                        />
                    </div>

                    <div className="absolute top-3 right-3">
                        <Tag className="text-base font-semibold">${book.price}</Tag>
                    </div>
                </div>
            }
        >
            <Tag color="blue">{book.category}</Tag>

            <Title level={5} className="line-clamp-1 mt-2">
                {book.title}
            </Title>

            <Text type="secondary" className="block mb-2">
                {book.author}
            </Text>

            <Rate disabled value={book.rating} className="text-sm" />
        </Card>
    );
};

export default BookCard;