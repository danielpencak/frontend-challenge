import { useCallback } from 'react';

import useFetchWithState from '../useFetchWithState/useFetchWithState';
import { config, propertiesApiBaseUrl } from './usePropertyApi.constants';

const usePropertyApi = () => {
  const {
    loading: loadingProperties,
    data: propertiesData,
    error: errorGettingProperties,
    enderFetchWithState: getPropertiesData,
  } = useFetchWithState();
  const {
    loading: loadingProperty,
    data: propertyData,
    error: errorGettingProperty,
    enderFetchWithState: getPropertyData,
  } = useFetchWithState();

  const getProperties = useCallback(() => {
    getPropertiesData(propertiesApiBaseUrl, config);
  }, [getPropertiesData]);

  /**
   * @param  {Number} propertyId
   */
  const getProperty = useCallback(
    (propertyId) => {
      getPropertyData(`${propertiesApiBaseUrl}/${propertyId}/leases`, config);
    },
    [getPropertyData]
  );

  return {
    getProperties,
    propertiesData,
    loadingProperties,
    errorGettingProperties,
    getProperty,
    propertyData,
    loadingProperty,
    errorGettingProperty,
  };
};

export default usePropertyApi;
