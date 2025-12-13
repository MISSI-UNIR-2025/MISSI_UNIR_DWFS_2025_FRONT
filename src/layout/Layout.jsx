import Navbar from '../components/layout/Navbar';
import CartDrawer from '../components/CartDrawer';
import { Outlet } from "react-router-dom";
import { Layout as AntLayout } from 'antd';
import FooterApp from '../components/layout/Footer';

const { Content } = AntLayout;

const Layout = () => {
  return (
    <AntLayout className="h-screen flex flex-col bg-gray-50">
      <Navbar />
      <CartDrawer />
      <Content className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Outlet />
        </div>
      </Content>

      <FooterApp />
    </AntLayout>
  );
};

export default Layout;
