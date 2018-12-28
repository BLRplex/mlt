import { SET_PROFESSIONS_LIST, RESET_PROFESSIONS_LIST } from '@/actions/professions';

const initialState = {
  list: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_PROFESSIONS_LIST: return Object.assign({}, {
      list: action.payload,
    });

    case RESET_PROFESSIONS_LIST: return Object.assign({}, {
      list: [],
    });

    default: return state;
  }
}
