/* global it describe expect */

import React from 'react';
import { render } from 'react-testing-library';

import ReduxWrapper from '@/components/ReduxWrapper';

import NotFoundPage from './component';

describe('Not Found page component', () => {
  const component = render(
    <ReduxWrapper>
      <NotFoundPage />
    </ReduxWrapper>,
  );

  it('should render with no errors', () => {
    expect(component).toBeTruthy();
  });
});
