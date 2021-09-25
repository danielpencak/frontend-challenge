const propertyData = [
  {
    id: '74fb4c4f',
    status: 'EXPIRED',
    companyName: "Cat Posters R' Us",
    startDate: '2012-04-01',
    inclusiveEndDate: '2018-04-30',
    contacts: {
      'Hrafn Miomir': { id: 'bcb83cfc', phone: '555-060-3403', email: 'hrafn@cprus.com', tags: ['PRIMARY', 'TENANT'] },
    },
  },
  {
    id: '83e1688c',
    status: 'EXPIRED',
    companyName: 'Mars Travel Agency',
    startDate: '2018-06-01',
    inclusiveEndDate: '2020-05-31',
    contacts: {
      'Kimberly Garland': {
        id: '610b27eb',
        phone: '555-012-0457',
        email: 'kgarland@marsta.com',
        tags: ['PRIMARY', 'TENANT'],
      },
      'Roman Matías': {
        id: '46add1ec',
        phone: '555-045-7021',
        email: 'rmatias@marsta.com',
        tags: ['TENANT, EMERGENCY'],
      },
    },
  },
  {
    id: '6b5926d4',
    status: 'ACTIVE',
    companyName: 'Juice for Days',
    startDate: '2020-08-01',
    inclusiveEndDate: '2028-07-31',
    contacts: {
      'Gisila Virva': { id: '945638c2', phone: '555-046-2998', email: 'gvirva@j4days.com', tags: ['TENANT'] },
      'Masoomeh Narcissa': { id: '592def02', phone: '555-039-1312', email: 'mnarcissa@j4days.com', tags: ['TENANT'] },
      'Enora Jonas': { id: '5947fde7', phone: '555-053-6923', email: 'ejonas@j4days.com', tags: ['TENANT'] },
      'Rebeca Theodotos': { id: '6cec5a40', phone: '555-092-0549', email: 'rtheodotos@j4days.com', tags: ['TENANT'] },
    },
  },
  {
    id: '727c976d',
    status: 'UPCOMING',
    companyName: 'Space Falcon',
    startDate: '2022-01-01',
    inclusiveEndDate: '2026-12-31',
    contacts: {
      'Dorotea Idunn': { id: '12b59dc7', phone: '555-854-0507', email: 'didunn@spacefalcon.com', tags: ['TENANT'] },
      'Melisende Irena': {
        id: '673fb2c3',
        phone: '555-034-1345',
        email: 'mirena@spacefalcon.com',
        tags: ['PRIMARY', 'TENANT'],
      },
    },
  },
];

export default propertyData;
