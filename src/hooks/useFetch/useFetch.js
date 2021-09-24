import { useCallback, useEffect, useRef } from 'react';

const useFetch = () => {
  const abortController = useRef(null);

  /**
   * @param  {String} url - full API endpoint path
   * @param  {Object} options - fetch options
   */
  const enderFetch = useCallback(async (url, options) => {
    if (!url) {
      throw new Error('A URL was not provided.');
    }

    abortController.current = new AbortController();

    const response = await fetch(url, { signal: abortController.current.signal, ...options });

    if (!response.ok) {
      throw response;
    }

    return response.json();
  }, []);

  // Abort active request.
  const memoizedAbortActiveRequest = useCallback(() => abortController.current?.abort(), []);

  // Abort active request when hook unmounts.
  useEffect(() => memoizedAbortActiveRequest, [memoizedAbortActiveRequest]);

  return {
    enderFetch,
  };
};

export default useFetch;
