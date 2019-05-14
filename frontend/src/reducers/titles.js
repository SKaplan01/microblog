import {
  LOAD_TITLES,
  ADD_VOTE,
  ADD_POST,
  EDIT_POST,
  DELETE_POST
} from '../actionTypes';

function sortByVote(posts) {
  return posts.sort((a, b) => b.votes - a.votes);
}

function makeTitleFromPost({ id, title, description, votes }) {
  return { id, title, description, votes };
}

function titlesReducer(state = [], action) {
  switch (action.type) {
    case LOAD_TITLES:
      return sortByVote([...action.titles]);

    case ADD_POST:
      return sortByVote([...state, makeTitleFromPost(action.post)]);

    case DELETE_POST:
      return state.filter(title => title.id !== action.postId);

    case EDIT_POST:
      return state.map(title =>
        title.id === action.post.id ? makeTitleFromPost(action.post) : title
      );

    case ADD_VOTE:
      return sortByVote(
        state.map(title =>
          title.id === action.postId ? { ...title, votes: action.votes } : title
        )
      );
    default:
      return state;
  }
}

export default titlesReducer;
