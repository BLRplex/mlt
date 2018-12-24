import {
  REQUEST_USERS,
  RESPONSE_USERS,
  RESPONSE_USERS_FAILURE,
  FILTER_USERS,
} from '../actions/users';

const initialState = {
  isLoading: false,
  isLoaded: false,
  data: [],
  filteredUsers: [],
  error: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_USERS: return Object.assign({}, {
      isLoading: true,
      isLoaded: false,
      data: [],
      filteredUsers: [],
      error: '',
    });

    case RESPONSE_USERS: return Object.assign({}, {
      isLoading: false,
      isLoaded: true,
      data: action.payload,
      filteredUsers: action.payload,
      error: '',
    });

    case RESPONSE_USERS_FAILURE: return Object.assign({}, {
      isLoading: false,
      isLoaded: false,
      data: [],
      filteredUsers: [],
      error: action.payload,
    });

    case FILTER_USERS: return Object.assign({}, state, {
      filteredUsers: action.payload,
    });

    default: return state;
  }
}
