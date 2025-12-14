import React, { useEffect, useState } from 'react';
import { ShoppingCartOutlined, BookOutlined } from '@ant-design/icons';

import { Badge, Button } from 'antd';
import { Link } from 'react-router-dom';
import useCartStore from '../../store/useCartStore';

const Navbar = () => {
    const {cart, openCart } = useCartStore((state) => state);
    const [totalItems, setTotalItems] = useState(0)
    useEffect(() => {

            setTotalItems(cart.length)
    }, [cart])

    return (
        <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/home" className="flex items-center gap-2 group">
                        <div className="p-2 bg-indigo-600 rounded-lg text-white group-hover:bg-indigo-700 transition-colors">
                            <BookOutlined className="text-xl" />
                        </div>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-indigo-600 to-violet-600">
                            BookStore
                        </span>
                    </Link>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-4">
                        <div className="cursor-pointer" onClick={openCart} >
                            <Badge count={totalItems} color="#4f46e5">
                                <Button
                                    shape="circle"
                                    icon={<ShoppingCartOutlined className="text-xl text-gray-600" />}
                                    size="large"
                                    className="hover:text-indigo-600 hover:border-indigo-600"
                                />
                            </Badge>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
