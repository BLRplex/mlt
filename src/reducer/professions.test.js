/* global it describe expect */

import { SET_PROFESSIONS_LIST, RESET_PROFESSIONS_LIST } from '@/actions/professions';

import professionsReducer from './professions';

describe('Professions reducer', () => {
  const initialState = {
    list: [],
  };

  it('should has initial state', () => {
    expect(professionsReducer(initialState, { type: 'TEST_ACTION' })).toEqual({
      list: [],
    });
  });

  it('should put items from payload', () => {
    const action = {
      type: SET_PROFESSIONS_LIST,
      payload: ['Profession 1', 'Profession 2', 'Profession 3'],
    };

    expect(professionsReducer(initialState, action)).toEqual({
      list: ['Profession 1', 'Profession 2', 'Profession 3'],
    });
  });

  it('should be able to reset items', () => {
    const action = {
      type: RESET_PROFESSIONS_LIST,
    };

    expect(professionsReducer(initialState, action)).toEqual({
      list: [],
    });
  });
});
