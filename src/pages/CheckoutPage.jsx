import { Typography, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import useCartStore from '../store/useCartStore';

import EmptyCartResult from '../components/checkout/EmptyCartResult';
import OrderSummary from '../components/checkout/OrderSummary';
import CheckoutFooter from '../components/checkout/CheckoutFooter';

const { Title } = Typography;

const CheckoutPage = () => {
  const { cart, clearCart } = useCartStore();
  const navigate = useNavigate();

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handlePayment = () => {
    message.loading({ content: 'Processing payment...', key: 'payment' });

    setTimeout(() => {
      message.success({
        content: 'Payment successful! Order placed.',
        key: 'payment',
        duration: 2,
      });

      clearCart();

      setTimeout(() => navigate('/home'), 2000);
    }, 1500);
  };

  if (cart.length === 0) {
    return <EmptyCartResult onHome={() => navigate('/home')} />;
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Title level={2} className="mb-8 text-center">
        Checkout
      </Title>

      <OrderSummary cart={cart} total={total} />

      <div className="mt-8">
        <CheckoutFooter onPay={handlePayment} />
      </div>
    </div>
  );
};

export default CheckoutPage;
