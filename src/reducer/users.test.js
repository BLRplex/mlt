/* global it describe expect */

import {
  REQUEST_USERS,
  RESPONSE_USERS,
  RESPONSE_USERS_FAILURE,
  FILTER_USERS,
} from '@/actions/users';

import { generateUser } from '@/helpers/generators';

import usersReducer from './users';

describe('Users reducer', () => {
  const initialState = {
    isLoading: false,
    isLoaded: false,
    data: [],
    filteredUsers: [],
    error: '',
  };

  it('should has initial state', () => {
    expect(usersReducer(initialState, { type: 'TEST_ACTION' })).toEqual({
      isLoading: false,
      isLoaded: false,
      data: [],
      filteredUsers: [],
      error: '',
    });
  });

  it('should enable loader and clean users due loading', () => {
    const action = {
      type: REQUEST_USERS,
    };

    expect(usersReducer(initialState, action)).toEqual({
      isLoading: true,
      isLoaded: false,
      data: [],
      filteredUsers: [],
      error: '',
    });
  });

  it('should disable loader and set users list when data loaded', () => {
    const user = generateUser();

    const action = {
      type: RESPONSE_USERS,
      payload: [user],
    };

    expect(usersReducer(initialState, action)).toEqual({
      isLoading: false,
      isLoaded: true,
      data: [user],
      filteredUsers: [user],
      error: '',
    });
  });

  it('should disable loader, reset users and set error when data loading has crashed', () => {
    const action = {
      type: RESPONSE_USERS_FAILURE,
      payload: 'Error message',
    };

    expect(usersReducer(initialState, action)).toEqual({
      isLoading: false,
      isLoaded: false,
      data: [],
      filteredUsers: [],
      error: 'Error message',
    });
  });

  it('should set filtered users', () => {
    const user = generateUser();

    const action = {
      type: FILTER_USERS,
      payload: [user],
    };

    expect(usersReducer(initialState, action)).toEqual({
      isLoading: false,
      isLoaded: false,
      data: [],
      filteredUsers: [user],
      error: '',
    });
  });
});
