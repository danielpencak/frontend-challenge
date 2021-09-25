import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import SpinnerComponent from '../../../components/SpinnerComponent/SpinnerComponent';
import usePropertyApi from '../../../hooks/usePropertyApi/usePropertyApi';
import { buildPropertyTableRowsData } from './PropertyLeasesTableWrapper.utils';
import PropertyLeasesTable from './PropertyLeasesTable/PropertyLeasesTable';

const PropertyLeasesTableWrapper = ({ selectedPropertyId, selectedPropertyName }) => {
  const { loadingProperty, errorGettingProperty, getProperty, propertyData } = usePropertyApi();
  const [tableRowsData, setTableRowsData] = useState([]);

  useEffect(() => {
    if (selectedPropertyId) {
      getProperty(selectedPropertyId);
    }
  }, [getProperty, selectedPropertyId]);

  useEffect(() => {
    setTableRowsData(buildPropertyTableRowsData(propertyData));
  }, [propertyData]);

  if (!selectedPropertyId) {
    return <p>Click on a card above to see the leases for that property.</p>;
  }

  if (loadingProperty) {
    return <SpinnerComponent />;
  }

  if (errorGettingProperty) {
    return <p>There was an issue loading the property.</p>;
  }

  if (tableRowsData.length === 0) {
    return <p>There is no lease information for {selectedPropertyName}</p>;
  }

  return (
    <>
      <h4 className="mb-3">{selectedPropertyName} Leases</h4>
      <PropertyLeasesTable data={tableRowsData} />
    </>
  );
};

PropertyLeasesTableWrapper.defaultProps = {
  selectedPropertyId: null,
};

PropertyLeasesTableWrapper.propTypes = {
  selectedPropertyId: PropTypes.number,
  selectedPropertyName: PropTypes.string.isRequired,
};

export default PropertyLeasesTableWrapper;
