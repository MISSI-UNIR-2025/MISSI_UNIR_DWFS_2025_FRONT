import { Typography, Button } from 'antd';

const { Title } = Typography;

const BookNotFound = ({ onBack }) => (
  <div className="text-center py-20">
    <Title level={3}>Book not found</Title>
    <Button onClick={onBack}>Return to Library</Button>
  </div>
);

export default BookNotFound;
