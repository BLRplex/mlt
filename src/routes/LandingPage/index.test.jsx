/* global it describe expect */

import React from 'react';
import { render } from 'react-testing-library';

import ReduxWrapper from '@/components/ReduxWrapper';
import { generateUsers } from '@/helpers/generators';
import { nopFunction } from '@/helpers/nop';

import LandingPage from './component';

describe('Landing page component', () => {
  const generatedUsers = generateUsers(50);
  const users = {
    data: generatedUsers,
    isLoading: false,
    isLoaded: true,
    error: '',
    filteredUsers: generatedUsers,
  };

  const usersWithError = {
    data: [],
    isLoading: false,
    isLoaded: false,
    error: 'Error message',
    filteredUsers: [],
  };

  const filters = {
    appliedFilters: {
      rowsPerPage: 10,
      page: 0,
    },
  };

  const onFilterValues = nopFunction;

  const component = render(
    <ReduxWrapper>
      <LandingPage
        users={users}
        match={{
          params: {
            query: 'test',
          },
        }}
        filters={filters}
        onFilterValues={onFilterValues}
      />
    </ReduxWrapper>,
  );

  const componentWithError = render(
    <ReduxWrapper>
      <LandingPage
        users={usersWithError}
        match={{
          params: {
            query: '',
          },
        }}
        filters={filters}
        onFilterValues={onFilterValues}
      />
    </ReduxWrapper>,
  );

  it('should render with no errors', () => {
    expect(component).toBeTruthy();
  });

  it('should show network error', async () => {
    expect(componentWithError.getByText('Sorry, something went wrong')).toBeTruthy();
  });
});
