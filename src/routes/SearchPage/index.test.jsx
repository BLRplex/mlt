/* global it describe expect */

import React from 'react';
import { render } from 'react-testing-library';

import ReduxWrapper from '@/components/ReduxWrapper';
import { generateUsers } from '@/helpers/generators';

import SearchPage from './component';

describe('Search page component', () => {
  const users = {
    data: generateUsers(50),
    isLoading: false,
    isLoaded: true,
    error: '',
  };

  const usersWithError = {
    data: [],
    isLoading: false,
    isLoaded: false,
    error: 'Error message',
  };

  const component = render(
    <ReduxWrapper>
      <SearchPage
        users={users}
        match={{
          params: {
            query: 'test',
          },
        }}
      />
    </ReduxWrapper>,
  );

  const componentWithError = render(
    <ReduxWrapper>
      <SearchPage
        users={usersWithError}
        match={{
          params: {
            query: '',
          },
        }}
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
