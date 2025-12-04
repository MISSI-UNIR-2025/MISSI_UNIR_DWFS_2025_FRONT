import React, { useState } from 'react';
import { Input, Card, Rate, Tag, Typography, Button } from 'antd';
import { SearchOutlined, ShoppingCartOutlined, EyeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { books } from '../data/books';
import useCartStore from '../store/useCartStore';

const { Title, Text } = Typography;
const { Meta } = Card;

const HomePage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const addToCart = useCartStore((state) => state.addToCart);

    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Layout>
            {/* Hero / Header Section */}
            <div className="mb-12 text-center">
                <Title level={1} className="!mb-2 !text-4xl font-bold text-gray-800">
                    Library Collection
                </Title>
                <Text className="text-gray-500 text-lg">
                    Explore our handpicked selection of timeless classics and modern hits.
                </Text>

                <div className="max-w-xl mx-auto mt-8">
                    <Input
                        size="large"
                        placeholder="Search by book title..."
                        prefix={<SearchOutlined className="text-gray-400" />}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="rounded-full px-6 py-3 shadow-sm hover:shadow-md transition-shadow border-gray-200"
                    />
                </div>
            </div>

            {/* Book Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredBooks.map((book) => (
                    <div key={book.id} className="group relative">
                        <Card
                            hoverable
                            className="h-full overflow-hidden rounded-2xl border-0 shadow-sm hover:shadow-xl transition-all duration-300 bg-white"
                            cover={
                                <div className="relative h-80 overflow-hidden bg-gray-100">
                                    <img
                                        alt={book.title}
                                        src={book.image}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                        <Button
                                            shape="circle"
                                            size="large"
                                            icon={<EyeOutlined />}
                                            onClick={() => navigate(`/book/${book.id}`)}
                                            className="bg-white text-gray-800 border-0 hover:scale-110 transition-transform"
                                        />
                                        <Button
                                            shape="circle"
                                            size="large"
                                            type="primary"
                                            icon={<ShoppingCartOutlined />}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                addToCart(book);
                                            }}
                                            className="bg-indigo-600 border-0 hover:scale-110 transition-transform"
                                        />
                                    </div>
                                    <div className="absolute top-3 right-3">
                                        <Tag color="rgba(255, 255, 255, 0.9)" className="backdrop-blur-sm text-gray-800 font-medium border-0 m-0 px-3 py-1 rounded-full">
                                            ${book.price}
                                        </Tag>
                                    </div>
                                </div>
                            }
                        >
                            <div className="flex flex-col h-full">
                                <div className="mb-2">
                                    <Tag color="blue" className="mr-0 rounded-full px-2 text-xs border-0 bg-blue-50 text-blue-600">
                                        {book.category}
                                    </Tag>
                                </div>
                                <Title level={5} className="!mb-1 line-clamp-1" title={book.title}>
                                    {book.title}
                                </Title>
                                <Text type="secondary" className="mb-2 block text-sm">
                                    {book.author}
                                </Text>
                                <Rate disabled defaultValue={4.5} className="text-sm text-yellow-400" />
                            </div>
                        </Card>
                    </div>
                ))}
            </div>

            {filteredBooks.length === 0 && (
                <div className="text-center py-20">
                    <Text type="secondary" className="text-lg">No books found matching "{searchTerm}"</Text>
                </div>
            )}
        </Layout>
    );
};

export default HomePage;
