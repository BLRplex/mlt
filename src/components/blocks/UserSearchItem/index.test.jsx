/* global it describe expect */

import React from 'react';
import { render } from 'react-testing-library';

import ReduxWrapper from '@/components/ReduxWrapper';
import { generateUser } from '@/helpers/generators';

import UserSearchItem from './component';

describe('Professions List component', () => {
  const user = generateUser(1);
  user.professions = ['Test-Profession-1', 'Test-Profession-2'];
  user.name = 'Test User';

  const component = render(
    <ReduxWrapper>
      <UserSearchItem
        user={user}
      />
    </ReduxWrapper>,
  );

  it('should render with no error', () => {
    expect(component).toBeTruthy();
  });

  it('should render user name and professions list', () => {
    expect(component.getByText('Test User')).toBeTruthy();
    expect(component.getByText('Test-Profession-2')).toBeTruthy();
  });
});
