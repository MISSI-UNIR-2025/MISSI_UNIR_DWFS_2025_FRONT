import { useEffect } from 'react';
import BooksGrid from '../components/books/BooksGrid';
import BooksLoader from '../components/books/BooksLoader';
import BooksSearch from '../components/books/BooksSearch';
import { useApiBooks } from '../hooks/useApiBooks';
import useBooksStore from '../store/useBooksStore';

const HomePage = () => {

    const { fetchFacets } = useApiBooks();
    const { loadFacets } = useBooksStore();

    useEffect(() => {
        loadFacets(fetchFacets);
    }, []);


    return (
        <>
            <BooksSearch />
            <BooksGrid />
            <BooksLoader />
        </>
    );
};

export default HomePage;
