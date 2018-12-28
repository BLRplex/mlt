/* global it describe expect */

import { asyncNopFunction } from '@/helpers/nop';
import { requestUsers } from './users';

describe('Users actions', () => {
  it('should has "requestUsers" action', () => {
    expect(typeof requestUsers).toBe('function');
  });
});

describe('Filter Value action', () => {
  it('should return async function', () => {
    const actionResult = requestUsers();

    expect(typeof actionResult).toBe('function');
    expect(actionResult.constructor.name).toBe('AsyncFunction');
  });

  it('should run', async () => {
    const executionResult = await requestUsers()(asyncNopFunction, () => ({}));

    expect(executionResult).toBeUndefined();
  });
});
