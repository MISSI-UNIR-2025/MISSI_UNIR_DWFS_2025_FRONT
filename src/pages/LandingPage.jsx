import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const LandingPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/home');
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-indigo-50 via-white to-purple-50 overflow-hidden relative">
            {/* Decorative blobs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

            <div className="text-center z-10 p-8 max-w-2xl mx-auto">
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

                <div className="flex flex-col items-center gap-4">
                    <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
                    <Text type="secondary" className="text-sm">
                        Redirecting to library in 5 seconds...
                    </Text>

                    <button
                        onClick={() => navigate('/home')}
                        className="mt-4 px-8 py-3 bg-white border border-gray-200 rounded-full text-indigo-600 font-medium hover:bg-gray-50 hover:shadow-md transition-all duration-300"
                    >
                        Enter Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
