/* global it describe expect */

import React from 'react';
import { render, fireEvent, waitForElement } from 'react-testing-library';

import ReduxWrapper from '@/components/ReduxWrapper';
import { generateUsers } from '@/helpers/generators';
import { MAX_ITEMS_IN_SHORT_LIST } from '@/constants';

import UserSearchResults from './component';

describe('Search Results component', () => {
  const users = generateUsers(50);

  const component = render(
    <ReduxWrapper>
      <UserSearchResults
        users={users}
      />
    </ReduxWrapper>,
  );

  const componentWithNoUsers = render(
    <ReduxWrapper>
      <UserSearchResults
        users={[]}
      />
    </ReduxWrapper>,
  );

  it('should render with no error', () => {
    expect(component).toBeTruthy();
  });

  it('should render nothing if users list is empty', () => {
    expect(componentWithNoUsers.container.childNodes.length).toBe(0);
  });

  it('should render user name', () => {
    expect(component.getByText('Test')).toBeTruthy();
  });

  it('should load more avatars by click', async () => {
    expect(component.container.childNodes).toBeDefined();
    expect(component.container.childNodes.length).toBe(1);

    const containerDomElement = component.container.childNodes[0];
    expect(containerDomElement).toBeDefined();
    expect(containerDomElement.childNodes).toBeDefined();
    expect(containerDomElement.childNodes.length).toBe(MAX_ITEMS_IN_SHORT_LIST + 1);

    fireEvent.click(component.getByText('Show more...'));
    await waitForElement(() => component.getByTestId('show-more'));

    expect(containerDomElement.childNodes.length).toBe((MAX_ITEMS_IN_SHORT_LIST * 2) + 1);
  });
});
