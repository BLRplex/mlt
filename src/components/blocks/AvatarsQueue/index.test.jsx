/* global it describe expect */

import React from 'react';
import { render, fireEvent, waitForElement } from 'react-testing-library';

import ReduxWrapper from '@/components/ReduxWrapper';
import { MAX_ITEMS_IN_SHORT_LIST } from '@/constants';
import { generateUsers } from '@/helpers/generators';

import AvatarsQueue from './component';

describe('Avatars Queue component', () => {
  const component = render(
    <ReduxWrapper>
      <AvatarsQueue
        users={generateUsers(50)}
      />
    </ReduxWrapper>,
  );

  const componentWithNoUsers = render(
    <ReduxWrapper>
      <AvatarsQueue
        users={[]}
      />
    </ReduxWrapper>,
  );

  it('should render with no error', () => {
    expect(component).toBeTruthy();
  });

  it('should return empty component if there are no users', () => {
    expect(componentWithNoUsers.container.innerHTML).toBe('');
  });

  it('should create user avatars', () => {
    expect(component.getByText('Test')).toBeDefined();
  });

  it('should load more avatars by click', async () => {
    expect(component.container.childNodes).toBeDefined();
    expect(component.container.childNodes.length).toBe(1);

    const containerDomElement = component.container.childNodes[0];
    expect(containerDomElement).toBeDefined();
    expect(containerDomElement.childNodes).toBeDefined();
    expect(containerDomElement.childNodes.length).toBe(MAX_ITEMS_IN_SHORT_LIST + 1);

    fireEvent.click(component.getByText('Show more'));
    await waitForElement(() => component.getByTestId('show-more'));

    expect(containerDomElement.childNodes.length).toBe((MAX_ITEMS_IN_SHORT_LIST * 2) + 1);
  });
});
