import { Typography } from 'antd';

const { Title, Text } = Typography;

const LandingContent = () => {
  return (
    <>
      <div className="mb-8 relative inline-block">
        <div className="absolute inset-0 bg-indigo-500 blur-2xl opacity-20 rounded-full"></div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png"
          alt="Book Icon"
          className="w-32 h-32 relative animate-bounce-slow"
        />
      </div>

      <Title className="text-6xl! font-black! mb-4! bg-clip-text text-transparent bg-linear-to-r from-indigo-600 to-violet-600 tracking-tight">
        BookStore
      </Title>

      <Text className="text-xl text-gray-600 block mb-12 font-light">
        Discover your next favorite story in our curated collection.
      </Text>
    </>
  );
};

export default LandingContent;
