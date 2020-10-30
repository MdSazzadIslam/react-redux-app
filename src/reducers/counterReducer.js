import { INCREMENT, DECREMENT } from "../actions/counterAction";

const initialState = {
  count: 0,
};

export default function counterReducer(state = initialState, action) {
  debugger;
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
}
