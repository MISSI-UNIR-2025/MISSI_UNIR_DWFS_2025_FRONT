import { Typography, Tag, Rate } from 'antd';

const { Title, Text, Paragraph } = Typography;

const BookMeta = ({ book }) => (
  <div className="md:col-span-8 lg:col-span-9 flex flex-col justify-center">
    <div className="mb-2">
      <Tag color="purple" className="px-3 py-1 rounded-full text-sm font-medium">
        {book.category}
      </Tag>
    </div>

    <Title level={1} className="mb-2! text-4xl! font-bold text-gray-900">
      {book.title}
    </Title>

    <Text className="text-xl text-gray-500 mb-6 block">
      by <span className="text-indigo-600 font-medium">{book.author}</span>
    </Text>

    <div className="flex items-center gap-4 mb-8">
      <Rate disabled defaultValue={4.5} className="text-yellow-400" />
      <Text type="secondary" className="text-sm">(128 reviews)</Text>
    </div>

    <Paragraph className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-8">
      {book.description}
    </Paragraph>
  </div>
);

export default BookMeta;
