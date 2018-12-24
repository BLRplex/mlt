import { createAction } from 'redux-actions';

import { filterUsersAction } from './users';
import { filterStrategy } from '../helpers/filters';

export const APPLY_FILTER = '@/APPLY_FILTER';

export const applyFilterAction = createAction(APPLY_FILTER);

export const filterValues = (
  filterName,
  filterValue,
  requestResetPagination = false,
) => async (dispatch, getState) => {
  await dispatch(applyFilterAction({ filterName, filterValue, requestResetPagination }));

  const state = getState();
  const filteredUsers = filterStrategy(state.users.data, state.filters.appliedFilters);

  dispatch(filterUsersAction(filteredUsers));
};
