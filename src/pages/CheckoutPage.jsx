import { Typography, List, Button, Divider, message, Result } from 'antd';
import { CreditCardOutlined, HomeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import useCartStore from '../store/useCartStore';

const { Title, Text } = Typography;

const CheckoutPage = () => {
    const { cart, clearCart } = useCartStore();
    const navigate = useNavigate();

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handlePayment = () => {
        message.loading({ content: 'Processing payment...', key: 'payment' });

        setTimeout(() => {
            message.success({ content: 'Payment successful! Order placed.', key: 'payment', duration: 2 });
            clearCart();

            // Show success state briefly before redirecting
            setTimeout(() => {
                navigate('/home');
            }, 2000);
        }, 1500);
    };

    if (cart.length === 0) {
        return (
            
                <div className="min-h-[60vh] flex items-center justify-center">
                    <Result
                        status="info"
                        title="Your cart is empty"
                        subTitle="Looks like you haven't added any books yet."
                        extra={
                            <Button type="primary" onClick={() => navigate('/home')} icon={<HomeOutlined />}>
                                Go Home
                            </Button>
                        }
                    />
                </div>
           
        );
    }

    return (
       
            <div className="max-w-3xl mx-auto">
                <Title level={2} className="mb-8 text-center">Checkout</Title>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-8">
                        <Title level={4} className="mb-6">Order Summary</Title>

                        <List
                            itemLayout="horizontal"
                            dataSource={cart}
                            renderItem={(item) => (
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
                            )}
                        />

                        <Divider />

                        <div className="flex justify-between items-center mb-8">
                            <Text className="text-xl text-gray-600">Total Amount</Text>
                            <Text className="text-3xl font-bold text-indigo-600">
                                ${total.toFixed(2)}
                            </Text>
                        </div>

                        <Button
                            type="primary"
                            size="large"
                            block
                            icon={<CreditCardOutlined />}
                            onClick={handlePayment}
                            className="bg-indigo-600 hover:bg-indigo-700 h-14 text-lg font-medium shadow-lg shadow-indigo-200 rounded-xl"
                        >
                            Pay Now
                        </Button>
                    </div>
                </div>
            </div>
      
    );
};

export default CheckoutPage;
