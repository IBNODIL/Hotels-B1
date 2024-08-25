import { SET_KEY_VALUE } from './actions';

const initialState = {
  key: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_KEY_VALUE:
      return {
        ...state,
        key: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
