import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, Button, Tag, Rate, Breadcrumb, message } from 'antd';
import { ShoppingCartOutlined, ArrowLeftOutlined, CheckOutlined } from '@ant-design/icons';
import Layout from '../components/Layout';
import { books } from '../data/books';
import useCartStore from '../store/useCartStore';

const { Title, Text, Paragraph } = Typography;

const BookDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const addToCart = useCartStore((state) => state.addToCart);

    const book = books.find((b) => b.id === parseInt(id));

    if (!book) {
        return (
            <Layout>
                <div className="text-center py-20">
                    <Title level={3}>Book not found</Title>
                    <Button onClick={() => navigate('/home')}>Return to Library</Button>
                </div>
            </Layout>
        );
    }

    const handleAddToCart = () => {
        addToCart(book);
        message.success({
            content: 'Added to cart',
            icon: <CheckOutlined className="text-green-500" />,
            className: 'mt-10',
        });
    };

    return (
        <Layout>
            <div className="mb-8">
                <Breadcrumb
                    items={[
                        { title: <a onClick={() => navigate('/home')}>Home</a> },
                        { title: book.title },
                    ]}
                />
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    {/* Image Section */}
                    <div className="md:col-span-4 lg:col-span-3">
                        <div className="relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                            <img
                                src={book.image}
                                alt={book.title}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="md:col-span-8 lg:col-span-9 flex flex-col justify-center">
                        <div className="mb-2">
                            <Tag color="purple" className="px-3 py-1 rounded-full text-sm font-medium">
                                {book.category}
                            </Tag>
                        </div>

                        <Title level={1} className="!mb-2 !text-4xl font-bold text-gray-900">
                            {book.title}
                        </Title>

                        <Text className="text-xl text-gray-500 mb-6 block">
                            by <span className="text-indigo-600 font-medium">{book.author}</span>
                        </Text>

                        <div className="flex items-center gap-4 mb-8">
                            <Rate disabled defaultValue={4.5} className="text-yellow-400" />
                            <Text type="secondary" className="text-sm">(128 reviews)</Text>
                        </div>

                        <Paragraph className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-8">
                            {book.description}
                        </Paragraph>

                        <div className="flex items-center gap-8 border-t border-gray-100 pt-8">
                            <div className="flex flex-col">
                                <Text type="secondary" className="text-sm">Price</Text>
                                <Text className="text-3xl font-bold text-gray-900">
                                    ${book.price}
                                </Text>
                            </div>

                            <div className="flex gap-4">
                                <Button
                                    type="primary"
                                    size="large"
                                    icon={<ShoppingCartOutlined />}
                                    onClick={handleAddToCart}
                                    className="bg-indigo-600 hover:bg-indigo-700 h-14 px-8 text-lg rounded-xl shadow-lg shadow-indigo-200"
                                >
                                    Add to Cart
                                </Button>
                                <Button
                                    size="large"
                                    icon={<ArrowLeftOutlined />}
                                    onClick={() => navigate('/home')}
                                    className="h-14 px-6 text-lg rounded-xl border-gray-200 hover:border-indigo-600 hover:text-indigo-600"
                                >
                                    Back
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default BookDetailPage;
