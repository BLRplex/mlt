/* global it describe expect */

import { SET_HAIR_COLORS_LIST, RESET_HAIR_COLORS_LIST } from '@/actions/hairColors';

import hairColorsReducer from './hairColors';

describe('Hair Color reducer', () => {
  const initialState = {
    list: [],
  };

  it('should has initial state', () => {
    expect(hairColorsReducer(initialState, { type: 'TEST_ACTION' })).toEqual({
      list: [],
    });
  });

  it('should put items from payload', () => {
    const action = {
      type: SET_HAIR_COLORS_LIST,
      payload: ['Red', 'Black', 'White'],
    };

    expect(hairColorsReducer(initialState, action)).toEqual({
      list: ['Red', 'Black', 'White'],
    });
  });

  it('should be able to reset items', () => {
    const action = {
      type: RESET_HAIR_COLORS_LIST,
    };

    expect(hairColorsReducer(initialState, action)).toEqual({
      list: [],
    });
  });
});
