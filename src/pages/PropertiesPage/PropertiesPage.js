import { useEffect } from 'react';
import usePropertyApi from '../../hooks/usePropertyApi/usePropertyApi';

const PropertiesPage = () => {
  const {
    loadingProperties,
    errorGettingProperties,
    propertiesData,
    getProperties,
    getProperty,
    loadingProperty,
    propertyData,
    errorGettingProperty,
  } = usePropertyApi();

  useEffect(() => {
    getProperties();
    getProperty(1);
  }, [getProperties, getProperty]);

  useEffect(() => {
    if (propertiesData) {
      console.log('properties data', propertiesData);
    }
  }, [propertiesData]);

  useEffect(() => {
    if (propertyData) {
      console.log('property data', propertyData);
    }
  }, [propertyData]);

  return 'Hello';
};

export default PropertiesPage;
