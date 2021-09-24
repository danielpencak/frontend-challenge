import React, { useState } from 'react';
import { Container } from 'reactstrap';

import PropertyCards from './PropertyCards/PropertyCards';
import PropertyLeasesTable from './PropertyLeasesTable/PropertyLeasesTable';

const PropertiesPage = () => {
  const selectedPropertyId = useState(null);

  return (
    <main className="mt-5 mb-4">
      <Container>
        <PropertyCards />
        <PropertyLeasesTable />
      </Container>
    </main>
  );
};

export default PropertiesPage;
