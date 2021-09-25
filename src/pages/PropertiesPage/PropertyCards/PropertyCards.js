import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import usePropertyApi from '../../../hooks/usePropertyApi/usePropertyApi';
import SpinnerComponent from '../../../components/SpinnerComponent/SpinnerComponent';
import PropertyCard from '../PropertyCard/PropertyCard';
import { CardDeck } from 'reactstrap';

const PropertyCards = ({
  setSelectedPropertyId,
  setIsLoadingCardData,
  setCardData,
  setErrorGettingCardData,
  setSelectedPropertyName,
}) => {
  const { loadingProperties, propertiesData, errorGettingProperties, getProperties } = usePropertyApi();

  useEffect(() => {
    getProperties();
  }, [getProperties]);

  useEffect(() => {
    setIsLoadingCardData(loadingProperties);
  }, [setIsLoadingCardData, loadingProperties]);

  useEffect(() => {
    setCardData(propertiesData);
  }, [setCardData, propertiesData]);

  useEffect(() => {
    setErrorGettingCardData(errorGettingProperties);
  }, [setErrorGettingCardData, errorGettingProperties]);

  if (loadingProperties) {
    return <SpinnerComponent />;
  }

  if (errorGettingProperties) {
    return <p>There was an issue loading the properties.</p>;
  }

  return (
    <CardDeck className="mb-5">
      {propertiesData?.map((propertyData) => {
        return (
          <PropertyCard
            data={propertyData}
            key={propertyData.id}
            setSelectedPropertyId={setSelectedPropertyId}
            setSelectedPropertyName={setSelectedPropertyName}
          />
        );
      })}
    </CardDeck>
  );
};

PropertyCards.propTypes = {
  setSelectedPropertyId: PropTypes.func.isRequired,
  setIsLoadingCardData: PropTypes.func.isRequired,
  setErrorGettingCardData: PropTypes.func.isRequired,
  setCardData: PropTypes.func.isRequired,
  setSelectedPropertyName: PropTypes.func.isRequired,
};

export default PropertyCards;
