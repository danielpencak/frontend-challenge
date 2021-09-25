import React from 'react';
import { screen, render } from '@testing-library/react';
import { rest } from 'msw';
import userEvent from '@testing-library/user-event';

import PropertiesPage from './PropertiesPage';
import server from '../../mocks/server';

const setupPropertiesPage = () => {
  const view = render(<PropertiesPage />);

  return { ...view };
};

describe('<PropertiesPage />', () => {
  test('it should mount and load property cards', async () => {
    setupPropertiesPage();

    expect(await screen.findByText('Star Tower')).toBeInTheDocument();
    expect(screen.getByText('The Brand New Corner Gables')).toBeInTheDocument();
    expect(screen.getByText('Mazer Mall 3')).toBeInTheDocument();
    expect(screen.getByText('Click on a card above to see the leases for that property.')).toBeInTheDocument();
  });

  test('it should display an error message when the cards fail to load', async () => {
    server.use(rest.post('https://talent.ender.com/fe-challenge/properties'), (req, res, ctx) => {
      return res(ctx.status(500));
    });

    setupPropertiesPage();

    expect(await screen.findByText('There was an issue loading the properties.'));
    expect(screen.queryByText('Star Tower')).not.toBeInTheDocument();
    expect(screen.queryByText('The Brand New Corner Gables')).not.toBeInTheDocument();
    expect(screen.queryByText('Mazer Mall 3')).not.toBeInTheDocument();
  });

  test('it should display the table of leases when a card is clicked', async () => {
    setupPropertiesPage();

    const card = await screen.findByText('Mazer Mall 3');

    userEvent.click(card);

    expect(await screen.findByText('Mazer Mall 3 Leases'));
    expect(screen.getByText('Tenant')).toBeInTheDocument();
    expect(screen.getByText('Start Date')).toBeInTheDocument();
    expect(screen.getByText('End Date')).toBeInTheDocument();
    expect(screen.getByText('Lease Status')).toBeInTheDocument();
    expect(screen.getByText('Primary Contact')).toBeInTheDocument();
  });

  test('it should display an error message when the table fails to load', async () => {
    setupPropertiesPage();

    const card = await screen.findByText('The Brand New Corner Gables');

    server.use(rest.post('https://talent.ender.com/fe-challenge/properties/:propertyId/leases'), (req, res, ctx) => {
      return res(ctx.status(500));
    });

    userEvent.click(card);

    expect(await screen.findByText('There was an issue loading the property.'));
    expect(screen.queryByText('Tenant')).not.toBeInTheDocument();
    expect(screen.queryByText('Start Date')).not.toBeInTheDocument();
    expect(screen.queryByText('End Date')).not.toBeInTheDocument();
    expect(screen.queryByText('Lease Status')).not.toBeInTheDocument();
    expect(screen.queryByText('Primary Contact')).not.toBeInTheDocument();
  });
});
