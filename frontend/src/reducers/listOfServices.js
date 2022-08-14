import types from '../actions/actionTypes';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case types.fetchRequest:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.fetchFail:
      const { error } = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
    case types.fetchSuccess:
      const { items } = action.payload;
      return {
        ...state,
        items,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}
