/* global it describe expect */

import React from 'react';
import { render } from 'react-testing-library';

import ReduxWrapper from '@/components/ReduxWrapper';
import { generateUsers } from '@/helpers/generators';

import FriendsList from './component';

describe('Friends List component', () => {
  const users = { data: generateUsers(50) };
  users.data[0].friends = [users.data[1].name];
  const currentUser = { ...users.data[0] };

  const component = render(
    <ReduxWrapper>
      <FriendsList
        users={users}
        currentUser={currentUser}
      />
    </ReduxWrapper>,
  );

  const componentWithNoUsers = render(
    <ReduxWrapper>
      <FriendsList
        users={{ data: [] }}
        currentUser={currentUser}
      />
    </ReduxWrapper>,
  );

  const wrappedComponent = render(
    <ReduxWrapper>
      <FriendsList
        users={users}
        currentUser={currentUser}
        wrapWithBlock
      />
    </ReduxWrapper>,
  );

  it('should render with no error', () => {
    expect(component).toBeTruthy();
  });

  it('should be empty if there are no users', () => {
    expect(componentWithNoUsers.container.childNodes.length).toBe(0);
  });

  it('should be filled if users has sent', () => {
    expect(component.container.childNodes.length).toBe(1);
  });

  it('should not wrap with block', () => {
    expect(component.container.childNodes).toBeDefined();
    expect(component.container.childNodes.length).toBe(1);
    expect(component.container.childNodes[0].classList).toBeDefined();
    expect(component.container.childNodes[0].classList.length).toBe(0);
  });

  it('should wrap with block', () => {
    expect(wrappedComponent.container.childNodes).toBeDefined();
    expect(wrappedComponent.container.childNodes.length).toBe(1);
    expect(wrappedComponent.container.childNodes[0].classList).toBeDefined();
    expect(wrappedComponent.container.childNodes[0].classList.length).toBeGreaterThan(0);

    const classList = Array.from(wrappedComponent.container.childNodes[0].classList);
    expect(classList.some(className => className.indexOf('MuiPaper') !== -1)).toBeTruthy();
  });
});
