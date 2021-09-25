import { setupServer } from 'msw/node';

import propertyApiHandler from './handlers';

const server = setupServer(...propertyApiHandler);

export default server;
