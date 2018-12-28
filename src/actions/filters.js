import { createAction } from 'redux-actions';

import { filterStrategy } from '@/helpers/filters';
import { filterUsersAction } from '@/actions/users';

export const APPLY_FILTER = '@/APPLY_FILTER';

export const applyFilterAction = createAction(APPLY_FILTER);

/**
 * Thunk action for applying filters.
 * @param {string} filterName The name of filter to be applied.
 * @param {any} filterValue The value of filter.
 * @param {boolean|undefined} requestResetPagination Flag for resetting pagination.
 * If set "true" the pagination will reset to first page.
 */
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
