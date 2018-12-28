/* global it describe expect */

import React from 'react';
import { render } from 'react-testing-library';

import ReduxWrapper from '@/components/ReduxWrapper';
import { generateUser } from '@/helpers/generators';

import UserTile from './component';

describe('Search Results component', () => {
  const user = generateUser();

  const component = render(
    <ReduxWrapper>
      <UserTile
        data={user}
      />
    </ReduxWrapper>,
  );

  it('should render with no error', () => {
    expect(component).toBeTruthy();
  });

  it('should render user name', () => {
    expect(component.getByText('Test')).toBeTruthy();
  });
});
