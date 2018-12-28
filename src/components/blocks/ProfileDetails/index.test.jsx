/* global it describe expect */

import React from 'react';
import { render } from 'react-testing-library';

import ReduxWrapper from '@/components/ReduxWrapper';
import { generateUser } from '@/helpers/generators';

import ProfileDetails from './component';

describe('Professions List component', () => {
  const user = generateUser(1);

  const component = render(
    <ReduxWrapper>
      <ProfileDetails
        user={user}
      />
    </ReduxWrapper>,
  );

  it('should render with no error', () => {
    expect(component).toBeTruthy();
  });
});
