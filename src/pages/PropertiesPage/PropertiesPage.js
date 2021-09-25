import React, { useState } from 'react';
import { Container } from 'reactstrap';

import PropertyCards from './PropertyCards/PropertyCards';
import PropertyLeasesTable from './PropertyLeasesTable/PropertyLeasesTable';

const PropertiesPage = () => {
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);

  console.log('selected id ', selectedPropertyId);

  return (
    <main className="mt-5 mb-4">
      <Container>
        <PropertyCards setSelectedPropertyId={setSelectedPropertyId} />
        <PropertyLeasesTable selectedPropertyId={selectedPropertyId} />
      </Container>
    </main>
  );
};

export default PropertiesPage;
