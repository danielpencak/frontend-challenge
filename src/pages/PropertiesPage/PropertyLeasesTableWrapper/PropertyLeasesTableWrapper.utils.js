/**
 * @param  {Array} propertyData
 * @return {Array} - array of objects with data in each object needed for a row of the property table
 */
export const buildPropertyTableRowsData = (propertyData = []) => {
  return (
    propertyData?.map((property) => ({
      tenant: property.companyName,
      endDate: property.inclusiveEndDate,
      startDate: property.startDate,
      status: `${property.status?.charAt(0).toUpperCase()}${property.status?.substr(1).toLowerCase()}`,
      primaryContact: determinePrimaryContactInfo(property.contacts),
    })) || []
  );
};

/**
 * @param  {Object} contacts
 * @return {String} - formatted string containing primary contact information
 */
export const determinePrimaryContactInfo = (contacts) => {
  if (!contacts) {
    return '';
  }

  for (const contact in contacts) {
    const contactData = contacts[contact];
    const { email, phone, tags } = contactData;

    if (tags.includes('PRIMARY')) {
      return `${contact}: ${email} | ${phone}`;
    }
  }

  return '';
};
