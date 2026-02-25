import { Drawer, List, Button, Typography, Empty } from 'antd';
import { DeleteOutlined, ShoppingOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';

import { useNavigate } from 'react-router-dom';
import useCartStore from '../../store/useCartStore';

const { Text, Title } = Typography;

const CartDrawer = () => {
    const {
        cart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        closeCart,
        modalCartStatus,
    } = useCartStore(); const navigate = useNavigate();

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleCheckout = () => {
        closeCart();
        navigate('/checkout');
    };

    return (
        <Drawer
            title={
                <div className="flex items-center gap-2 text-indigo-900">
                    <ShoppingOutlined />
                    <span className="font-bold">Your Cart</span>
                </div>
            }
            placement="right"
            onClose={closeCart}
            open={modalCartStatus}

            className="backdrop-blur-sm"
        >
            {cart === undefined ? (
                <div className="h-full flex flex-col items-center justify-center">
                    <Empty
                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                        description={<Text type="secondary">Your cart is empty</Text>}
                    />
                    <Button type="primary" onClick={closeCart} className="mt-4 bg-indigo-600">
                        Start Shopping
                    </Button>
                </div>
            ) : (
                <div className="flex flex-col h-full">
                    <div className="flex-1 overflow-y-auto">
                        <List
                            itemLayout="horizontal"
                            dataSource={cart}
                            renderItem={(item) => (
                                <List.Item
                                    actions={[
                                        <Button
                                            type="text"
                                            danger
                                            icon={<DeleteOutlined />}
                                            onClick={() => removeFromCart(item.id)}
                                        />,
                                    ]}
                                    className="hover:bg-gray-50 transition-colors p-2 rounded-lg mb-2"
                                >
                                    <List.Item.Meta
                                        avatar={
                                            <img
                                                src={item.imageUrl}
                                                alt={item.title}
                                                className="w-16 h-20 object-cover rounded shadow-sm"
                                            />
                                        }
                                        title={<Text strong className="text-gray-800">{item.title}</Text>}
                                        description={
                                            <div className="flex flex-col gap-1">
                                                <Text type="secondary" className="text-xs">{item.author}</Text>
                                                <div className="flex justify-between items-center">
                                                    <Text className="text-indigo-600 font-medium">
                                                        ${item.price.toFixed(2)}
                                                    </Text>
                                                    <div className="flex items-center gap-2">
                                                        <Button
                                                            size="small"
                                                            icon={<MinusOutlined />}
                                                            onClick={() => decreaseQty(item.id)}
                                                            disabled={item.quantity === 1}
                                                        />

                                                        <Text className="w-6 text-center">{item.quantity}</Text>

                                                        <Button
                                                            size="small"
                                                            icon={<PlusOutlined />}
                                                            onClick={() => increaseQty(item.id)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    />
                                </List.Item>
                            )}
                        />
                    </div>

                    <div className="border-t pt-4 mt-4 bg-white">
                        <div className="flex justify-between items-center mb-4">
                            <Text className="text-lg font-medium text-gray-600">Total</Text>
                            <Title level={3} className="m-0! text-indigo-700!">
                                ${total.toFixed(2)}
                            </Title>
                        </div>
                        <Button
                            type="primary"
                            size="large"
                            block
                            onClick={handleCheckout}
                            className="bg-indigo-600 hover:bg-indigo-700 h-12 text-lg font-medium shadow-lg shadow-indigo-200"
                        >
                            Proceed to Checkout
                        </Button>
                    </div>
                </div>
            )}
        </Drawer>
    );
};

export default CartDrawer;
