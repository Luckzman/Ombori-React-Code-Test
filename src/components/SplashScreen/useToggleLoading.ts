import { useEffect, useState } from 'react';

export default function useToggleLoading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return isLoading;
}
