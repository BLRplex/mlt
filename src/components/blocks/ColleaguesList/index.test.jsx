/* global it describe expect */

import React from 'react';
import { render } from 'react-testing-library';

import ReduxWrapper from '@/components/ReduxWrapper';
import { generateUsers } from '@/helpers/generators';

import ColleaguesList from './component';

describe('Colleagues List component', () => {
  const professions = ['Test Profession'];
  const users = { data: generateUsers(50) };

  const component = render(
    <ReduxWrapper>
      <ColleaguesList
        users={users}
        professions={professions}
      />
    </ReduxWrapper>,
  );

  const componentWithNoUsers = render(
    <ReduxWrapper>
      <ColleaguesList
        users={{ data: [] }}
        professions={professions}
      />
    </ReduxWrapper>,
  );

  const wrappedComponent = render(
    <ReduxWrapper>
      <ColleaguesList
        users={users}
        professions={professions}
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
