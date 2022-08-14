import types from '../actions/actionTypes';

const initialState = {
  item: null,
  loading: false,
  error: null,
};

export default function serviceReducer(state = initialState, action) {
  switch (action.type) {
    case types.getRequest:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.getFail:
      const { error } = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
    case types.getSuccess:
      const { item } = action.payload;
      return {
        ...state,
        item,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}
