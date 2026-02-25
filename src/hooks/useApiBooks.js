import { useCallback } from 'react';
import { buildQuery } from '../services/buildQueryService';
import { API } from '../const/apis';


export const useApiBooks = () => {
    const fetchBooks = useCallback(async ({ query }) => {
        const res = await fetch(`${API.BASE_URL}${API.apis.BooksSearch}?${buildQuery(query)}`);
        const data = await res.json();
        return data;

    }, []);

    const fetchBookById = useCallback(async (id) => {
        const res = await fetch(`${API.BASE_URL}${API.apis.BookById(id)}`);
        const data = await res.json();
        return data;

    }, []);

    const fetchFacets = useCallback(async () => {
        const res = await fetch(`${API.BASE_URL}${API.apis.Facets}`);
        const data = await res.json();
        return data;

    },  []);

    return { fetchBooks, fetchBookById , fetchFacets};
};
