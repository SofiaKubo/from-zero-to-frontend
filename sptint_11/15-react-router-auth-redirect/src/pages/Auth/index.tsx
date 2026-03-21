import { useSearchParams, Navigate } from 'react-router-dom';

export const Auth = () => {
  // Получаем значение из SearchParams
  const [searchParams] = useSearchParams();
  const authToken = searchParams.get('authToken');

  return !authToken ? <Navigate to="/sign-in" /> : <Navigate to="/" />;
};
