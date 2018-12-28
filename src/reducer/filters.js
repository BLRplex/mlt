import { APPLY_FILTER } from '@/actions/filters';
import { ROWS_PER_PAGE_OPTIONS } from '@/constants';

const initialState = {
  appliedFilters: {
    rowsPerPage: ROWS_PER_PAGE_OPTIONS[0],
    page: 0,
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case APPLY_FILTER: return Object.assign({}, state, {
      appliedFilters: Object.assign(
        {},
        state.appliedFilters,
        { [action.payload.filterName]: action.payload.filterValue },
        action.payload.requestResetPagination ? initialState.appliedFilters : {},
      ),
    });

    default: return state;
  }
}
