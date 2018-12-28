/* global it describe expect */

import { APPLY_FILTER } from '@/actions/filters';
import { ROWS_PER_PAGE_OPTIONS } from '@/constants';

import filterReducer from './filters';

describe('Filter reducer', () => {
  const initialState = {
    appliedFilters: {
      rowsPerPage: ROWS_PER_PAGE_OPTIONS[0],
      page: 0,
    },
  };

  it('should has initial state', () => {
    expect(filterReducer(initialState, { type: 'TEST_ACTION' })).toEqual({
      appliedFilters: {
        rowsPerPage: ROWS_PER_PAGE_OPTIONS[0],
        page: 0,
      },
    });
  });

  it('should add filter from payload', () => {
    const action = {
      type: APPLY_FILTER,
      payload: {
        filterName: 'testName',
        filterValue: 'testValue',
      },
    };

    expect(filterReducer(initialState, action)).toEqual({
      appliedFilters: {
        rowsPerPage: ROWS_PER_PAGE_OPTIONS[0],
        page: 0,
        testName: 'testValue',
      },
    });
  });

  it('should be able to reset pagination', () => {
    const action = {
      type: APPLY_FILTER,
      payload: {
        filterName: 'testName',
        filterValue: 'testValue',
        requestResetPagination: true,
      },
    };

    initialState.appliedFilters.page = 10;

    expect(filterReducer(initialState, { type: 'TEST_ACTION' })).toEqual({
      appliedFilters: {
        rowsPerPage: ROWS_PER_PAGE_OPTIONS[0],
        page: 10,
      },
    });

    expect(filterReducer(initialState, action)).toEqual({
      appliedFilters: {
        rowsPerPage: ROWS_PER_PAGE_OPTIONS[0],
        page: 0,
        testName: 'testValue',
      },
    });
  });
});
