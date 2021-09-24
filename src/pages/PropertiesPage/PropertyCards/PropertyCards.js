import React, { useEffect } from 'react';

import usePropertyApi from '../../../hooks/usePropertyApi/usePropertyApi';
import SpinnerComponent from '../../../components/SpinnerComponent/SpinnerComponent';

const PropertyCards = () => {
  const { loadingProperties, propertiesData, errorGettingProperties, getProperties } = usePropertyApi();

  useEffect(() => {
    getProperties();
  }, [getProperties]);

  if (loadingProperties) {
    return <SpinnerComponent />;
  }

  if (errorGettingProperties) {
    return <p>There was an issue loading the properties.</p>;
  }

  return 'Hello';
};

export default PropertyCards;
