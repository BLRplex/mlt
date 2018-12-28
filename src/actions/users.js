/* global fetch */
import { createAction } from 'redux-actions';

import { setProfessionsListAction } from '@/actions/professions';
import { setHairColorsListAction } from '@/actions/hairColors';

import mapUsers from '@/helpers/mapUsersArray';
import mockUsers from '@/mocks/users.json';
import { API_URL } from '@/constants';

export const REQUEST_USERS = '@/REQUEST_USERS';
export const RESPONSE_USERS = '@/RESPONSE_USERS';
export const RESPONSE_USERS_FAILURE = '@/RESPONSE_USERS_FAILURE';
export const FILTER_USERS = '@/FILTER_USERS';

export const requestUsersAction = createAction(REQUEST_USERS);
export const responseUsersAction = createAction(RESPONSE_USERS);
export const responseUsersFailureAction = createAction(RESPONSE_USERS_FAILURE);
export const filterUsersAction = createAction(FILTER_USERS);

const isTestsEnvironment = process.env.NODE_ENV === 'test';

/**
 * Request wrapper with supporting mocks (usefull for making tests in offline mode).
 */
const usersRequest = () => {
  if (isTestsEnvironment) {
    return mockUsers;
  }

  return fetch(API_URL).then(fetchResponse => fetchResponse.json());
};

/**
 * Thunk action for getting users from remote URL (supports tests).
 */
export const requestUsers = () => async (dispatch) => {
  dispatch(requestUsersAction());

  try {
    const response = await usersRequest();

    if (!response || Object.keys(response).lenght === 0) {
      throw new Error('Unexpected error');
    }

    const townUsers = response[Object.keys(response)[0]];
    const usersMap = mapUsers(townUsers);

    const { users, professions, hairColors } = usersMap;

    dispatch(setProfessionsListAction(professions));
    dispatch(setHairColorsListAction(hairColors));

    dispatch(responseUsersAction(users));
  } catch (error) {
    dispatch(responseUsersFailureAction(error.message));

    throw error;
  }
};
