import { SET_HAIR_COLORS_LIST, RESET_HAIR_COLORS_LIST } from '../actions/hairColors';

const initialState = {
  list: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_HAIR_COLORS_LIST: return Object.assign({}, {
      list: action.payload,
    });

    case RESET_HAIR_COLORS_LIST: return Object.assign({}, {
      list: [],
    });

    default: return state;
  }
}
