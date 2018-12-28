/* global it describe expect */

import { asyncNopFunction } from '@/helpers/nop';
import { filterValues } from './filters';

describe('Filter actions', () => {
  it('should has "filterValue" action', () => {
    expect(typeof filterValues).toBe('function');
  });
});

describe('Filter Value action', () => {
  it('should return async function', () => {
    const actionResult = filterValues('test', 'test');

    expect(typeof actionResult).toBe('function');
    expect(actionResult.constructor.name).toBe('AsyncFunction');
  });

  it('should run', async () => {
    const executionResult = await filterValues('test', 'test')(asyncNopFunction, () => ({
      users: {
        data: [],
      },
      filters: {
        appliedFilters: [],
      },
    }));

    expect(executionResult).toBeUndefined();
  });
});
