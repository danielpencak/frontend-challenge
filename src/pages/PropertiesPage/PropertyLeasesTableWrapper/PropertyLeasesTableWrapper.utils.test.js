import { buildPropertyTableRowsData, determinePrimaryContactInfo } from './PropertyLeasesTableWrapper.utils';
import contactsData from '../../../mocks/contactsData';
import propertyData from '../../../mocks/propertyData';

describe('determinePrimaryContactInfo', () => {
  const expectedReturn = 'Melisende Irena: mirena@spacefalcon.com | 555-034-1345';

  test('it should return a formatted string containing the contact information', () => {
    expect(determinePrimaryContactInfo(contactsData)).toEqual(expectedReturn);
  });

  test('it should return an empty string', () => {
    expect(determinePrimaryContactInfo(undefined)).toEqual('');
  });
});

describe('buildPropertyTableRowsData', () => {
  test('it should return data needed for the table', () => {
    const expectedReturn = [
      {
        tenant: "Cat Posters R' Us",
        endDate: '2018-04-30',
        startDate: '2012-04-01',
        status: 'Expired',
        primaryContact: 'Hrafn Miomir: hrafn@cprus.com | 555-060-3403',
      },
      {
        tenant: 'Mars Travel Agency',
        endDate: '2020-05-31',
        startDate: '2018-06-01',
        status: 'Expired',
        primaryContact: 'Kimberly Garland: kgarland@marsta.com | 555-012-0457',
      },
      {
        tenant: 'Juice for Days',
        endDate: '2028-07-31',
        startDate: '2020-08-01',
        status: 'Active',
        primaryContact: '',
      },
      {
        tenant: 'Space Falcon',
        endDate: '2026-12-31',
        startDate: '2022-01-01',
        status: 'Upcoming',
        primaryContact: 'Melisende Irena: mirena@spacefalcon.com | 555-034-1345',
      },
    ];

    expect(buildPropertyTableRowsData(propertyData)).toStrictEqual(expectedReturn);
  });

  test('it should return an empty array', () => {
    expect(buildPropertyTableRowsData()).toEqual([]);
    expect(buildPropertyTableRowsData(undefined)).toEqual([]);
    expect(buildPropertyTableRowsData([])).toEqual([]);
  });
});
