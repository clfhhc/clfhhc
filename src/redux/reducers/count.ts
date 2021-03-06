import { Reducer } from 'redux';
import actionTypes from '../actions/actionTypes';

export const initialState = {
  count: 5,
};

const reducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case actionTypes.MINUS:
      return {
        ...state,
        count: state.count - action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
