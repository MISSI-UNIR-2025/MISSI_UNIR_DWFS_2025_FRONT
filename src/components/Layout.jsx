import React, { useState } from 'react';
import Navbar from './Navbar';
import CartDrawer from './CartDrawer';
import { Layout as AntLayout } from 'antd';

const { Content, Footer } = AntLayout;

const Layout = ({ children }) => {
    const [cartOpen, setCartOpen] = useState(false);

    return (
        <AntLayout className="min-h-screen bg-gray-50">
            <Navbar onOpenCart={() => setCartOpen(true)} />
            <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

            <Content className="site-layout">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {children}
                </div>
            </Content>

            <Footer className="text-center bg-white text-gray-500 border-t border-gray-100">
                BookStore ©{new Date().getFullYear()} Created by DWFS 2025 Grupo 6
            </Footer>
        </AntLayout>
    );
};

export default Layout;
