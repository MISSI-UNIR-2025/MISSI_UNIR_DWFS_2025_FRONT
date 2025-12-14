import BooksGrid from '../components/books/BooksGrid';
import BooksLoader from '../components/books/BooksLoader';
import BooksSearch from '../components/books/BooksSearch';

const HomePage = () => {
    return (
        <>
            <BooksSearch />
            <BooksGrid />
            <BooksLoader />
        </>
    );
};

export default HomePage;
