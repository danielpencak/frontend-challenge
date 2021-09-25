import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import usePropertyApi from '../../../hooks/usePropertyApi/usePropertyApi';
import SpinnerComponent from '../../../components/SpinnerComponent/SpinnerComponent';
import PropertyCard from '../PropertyCard/PropertyCard';
import { CardDeck } from 'reactstrap';

const PropertyCards = ({ setSelectedPropertyId }) => {
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

  return (
    <CardDeck>
      {propertiesData?.map((propertyData) => {
        return <PropertyCard data={propertyData} key={propertyData.id} setSelectedPropertyId={setSelectedPropertyId} />;
      })}
    </CardDeck>
  );
};

PropertyCards.propTypes = {
  setSelectedPropertyId: PropTypes.func.isRequired,
};

export default PropertyCards;
