import { rest } from 'msw';

import propertyData from './propertyData';
import propertiesData from './propertiesData';

const propertyApiHandler = [
  rest.post('https://talent.ender.com/fe-challenge/properties', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(propertiesData));
  }),
  rest.post('https://talent.ender.com/fe-challenge/properties/:propertyId/leases', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(propertyData));
  }),
];

export default propertyApiHandler;
