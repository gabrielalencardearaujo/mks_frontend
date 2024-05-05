import { useQuery } from '@tanstack/react-query';

const API_URL = 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1';

const fetchProducts = async (page = 1, rows = 8, sort = 'id', order = 'ASC') => {
  const uri = `${API_URL}/products?page=${page}&rows=${rows}&sortBy=${sort}&orderBy=${order}`;
  const response = await fetch(uri);
  return await response.json();
};

export const useProductsData = () => {
  const query = useQuery({
    queryFn: () => fetchProducts(),
    queryKey: ['all-products'],
  });

  console.log(query.data);
  return {
    ...query,
    data: query.data,
  };
};
