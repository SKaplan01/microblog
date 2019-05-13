import { LOAD_TITLES } from '../actionTypes';

function titlesReducer(state = [], action) {
  switch (action.type) {
    case LOAD_TITLES:
      return [...action.titles];

    default:
      return state;
  }
}

export default titlesReducer;
