import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useCountdownRedirect = (seconds, redirectTo) => {
  const navigate = useNavigate();
  const [count, setCount] = useState(seconds);

  useEffect(() => {
    if (count <= 0) {
      navigate(redirectTo);
      return;
    }

    const timer = setTimeout(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count, navigate, redirectTo]);

  const goNow = () => navigate(redirectTo);

  return { count, goNow };
};
