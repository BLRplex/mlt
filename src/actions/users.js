/* global fetch */
import { createAction } from 'redux-actions';

import { setProfessionsListAction } from './professions';
import { setHairColorsListAction } from './hairColors';

import mapUsers from '../helpers/mapUsersArray';
import { API_URL } from '../constants';

export const REQUEST_USERS = '@/REQUEST_USERS';
export const RESPONSE_USERS = '@/RESPONSE_USERS';
export const RESPONSE_USERS_FAILURE = '@/RESPONSE_USERS_FAILURE';
export const FILTER_USERS = '@/FILTER_USERS';

export const requestUsersAction = createAction(REQUEST_USERS);
export const responseUsersAction = createAction(RESPONSE_USERS);
export const responseUsersFailureAction = createAction(RESPONSE_USERS_FAILURE);
export const filterUsersAction = createAction(FILTER_USERS);

export const requestUsers = () => async (dispatch) => {
  dispatch(requestUsersAction());

  try {
    const response = await fetch(API_URL)
      .then(fetchResponse => fetchResponse.json());

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
    dispatch(responseUsersFailureAction(error));

    throw error;
  }
};
