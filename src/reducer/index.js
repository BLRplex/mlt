import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';

import usersReducer from './users';
import professionsReducer from './professions';
import hairColorsReducer from './hairColors';
import filtersReducer from './filters';

export default combineReducers({
  users: usersReducer,
  professions: professionsReducer,
  hairColors: hairColorsReducer,
  filters: filtersReducer,
  toastr: toastrReducer,
});
