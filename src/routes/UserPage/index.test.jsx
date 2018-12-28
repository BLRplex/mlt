/* global it describe expect */

import React from 'react';
import { render } from 'react-testing-library';

import ReduxWrapper from '@/components/ReduxWrapper';
import { generateUsers } from '@/helpers/generators';
import { nopFunction } from '@/helpers/nop';

import UserPage from './component';

describe('User page component', () => {
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

  const history = {
    push: nopFunction,
  };

  const component = render(
    <ReduxWrapper>
      <UserPage
        users={users}
        match={{
          params: {
            userId: '1',
          },
        }}
        history={history}
      />
    </ReduxWrapper>,
  );

  const componentWithWrongUser = render(
    <ReduxWrapper>
      <UserPage
        users={users}
        match={{
          params: {
            userId: '100',
          },
        }}
        history={history}
      />
    </ReduxWrapper>,
  );

  const componentWithError = render(
    <ReduxWrapper>
      <UserPage
        users={usersWithError}
        match={{
          params: {
            userId: '100',
          },
        }}
        history={history}
      />
    </ReduxWrapper>,
  );

  it('should render with no errors', () => {
    expect(component).toBeTruthy();
  });

  it('should render error if user not found', () => {
    expect(componentWithWrongUser.container.childNodes.length).toBe(0);
  });

  it('should show network error', async () => {
    expect(componentWithError.getByText('Sorry, something went wrong')).toBeTruthy();
  });
});
