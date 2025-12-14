import { Button } from 'antd';
import { CreditCardOutlined } from '@ant-design/icons';

const CheckoutFooter = ({ onPay }) => (
  <Button
    type="primary"
    size="large"
    block
    icon={<CreditCardOutlined />}
    onClick={onPay}
    className="bg-indigo-600 hover:bg-indigo-700 h-14 text-lg font-medium shadow-lg shadow-indigo-200 rounded-xl"
  >
    Pay Now
  </Button>
);

export default CheckoutFooter;
