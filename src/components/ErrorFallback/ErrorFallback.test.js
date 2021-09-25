import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { render, screen } from '@testing-library/react';

import ErrorFallback from './ErrorFallback';
import ErrorCreator from './ErrorFallback.utils';

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

afterEach(() => {
  console.error.mockRestore();
});

describe('<ErrorFallback />', () => {
  test('it renders with no error', () => {
    render(
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ErrorCreator />
      </ErrorBoundary>
    );

    expect(
      screen.queryByRole('heading', { name: 'Oops! Something went wrong. Click below to reload the page.' })
    ).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Reload Page' })).not.toBeInTheDocument();
  });

  test('it renders with an error', () => {
    render(
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ErrorCreator shouldThrow />
      </ErrorBoundary>
    );

    expect(
      screen.getByRole('heading', { name: 'Oops! Something went wrong. Click below to reload the page.' })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Reload Page' })).toBeInTheDocument();
  });
});
