import { useCallback, useEffect, useRef, useState } from 'react';

import useFetch from '../useFetch/useFetch';

const useFetchWithState = () => {
  const isMounted = useRef(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const { enderFetch } = useFetch();

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  /**
   * @param  {String} url - full API endpoint path
   * @param  {Object} options - fetch options
   */
  const enderFetchWithState = useCallback(
    async (url, options) => {
      try {
        setLoading(true);
        setError(null);

        const responseData = await enderFetch(url, options);

        if (isMounted.current) {
          setData(responseData);
          setLoading(false);
        }

        return responseData;
      } catch (error) {
        if (isMounted.current) {
          setError(error);
          setLoading(false);
        }

        return error;
      }
    },
    [enderFetch]
  );

  return {
    loading,
    data,
    error,
    enderFetchWithState,
  };
};

export default useFetchWithState;
