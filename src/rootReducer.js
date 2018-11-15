import {
  ADD_COMMENT,
  DELETE_COMMENT,
  ADD_POST,
  EDIT_POST,
  DELETE_POST
} from './actionTypes';

function rootReducer(state = {}, action) {
  console.log('reducer ran; state & action:', state, action);

  switch (action.type) {
    case ADD_POST:
      return { ...state, [action.post.id]: action.post };

    // case EDIT_POST:
    //   return { ...state, count: state.count - 1 };
    //   this.props.history.push('/');

    case DELETE_POST:
      return { ...state, count: state.count - 1 };

    case ADD_COMMENT:
      return { ...state, count: state.count - 1 };

    case DELETE_COMMENT:
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
}

export default rootReducer;
