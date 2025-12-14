import Navbar from '../components/layout/Navbar';
import CartDrawer from '../components/cart/CartDrawer';
import { Outlet } from "react-router-dom";
import { Layout as AntLayout } from 'antd';
import FooterApp from '../components/layout/Footer';
import { Background } from '../assets/Icons';

const { Content } = AntLayout;

const Layout = () => {
  return (
    <AntLayout className="h-screen flex flex-col">
      <Navbar />
      <CartDrawer />
      <Content className="flex-1 overflow-y-auto relative bg-linear-to-br from-indigo-50 via-blue-50 to-purple-50">
        <Background />
        <div  className="fixed inset-0 pointer-events-none opacity-35 purple-dot-background" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Outlet />
        </div>
      </Content>
      <FooterApp />
    </AntLayout>
  );
};

export default Layout;