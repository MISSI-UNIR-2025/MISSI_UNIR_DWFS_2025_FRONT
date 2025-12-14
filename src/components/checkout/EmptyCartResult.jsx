import { Result, Button } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

const EmptyCartResult = ({ onHome }) => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <Result
      status="info"
      title="Your cart is empty"
      subTitle="Looks like you haven't added any books yet."
      extra={
        <Button type="primary" onClick={onHome} icon={<HomeOutlined />}>
          Go Home
        </Button>
      }
    />
  </div>
);

export default EmptyCartResult;
