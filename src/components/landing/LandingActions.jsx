import { Spin, Typography } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const { Text } = Typography;

const LandingActions = ({ seconds, onEnter }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />

      <Text type="secondary" className="text-sm">
        Redirecting to library in <b>{seconds}</b> seconds...
      </Text>

      <button
        onClick={onEnter}
        className="mt-4 px-8 py-3 bg-white border border-gray-200 rounded-full text-indigo-600 font-medium hover:bg-gray-50 hover:shadow-md transition-all duration-300"
      >
        Enter Now
      </button>
    </div>
  );
};

export default LandingActions;
