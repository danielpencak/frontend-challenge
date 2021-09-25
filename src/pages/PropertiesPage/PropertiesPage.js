import React, { useState } from 'react';
import { Container } from 'reactstrap';

import PropertyCards from './PropertyCards/PropertyCards';
import PropertyLeasesTableWrapper from './PropertyLeasesTableWrapper/PropertyLeasesTableWrapper';

const PropertiesPage = () => {
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);
  const [selectedPropertyName, setSelectedPropertyName] = useState('');
  const [isLoadingCardData, setIsLoadingCardData] = useState(true);
  const [cardData, setCardData] = useState(null);
  const [errorGettingCardData, setErrorGettingCardData] = useState(null);

  return (
    <main className="mt-5 mb-4">
      <Container>
        <PropertyCards
          setSelectedPropertyId={setSelectedPropertyId}
          setIsLoadingCardData={setIsLoadingCardData}
          setErrorGettingCardData={setErrorGettingCardData}
          setSelectedPropertyName={setSelectedPropertyName}
          setCardData={setCardData}
        />
        {!isLoadingCardData && cardData && !errorGettingCardData && (
          <PropertyLeasesTableWrapper
            selectedPropertyId={selectedPropertyId}
            isLoadingCardData={isLoadingCardData}
            selectedPropertyName={selectedPropertyName}
          />
        )}
      </Container>
    </main>
  );
};

export default PropertiesPage;
