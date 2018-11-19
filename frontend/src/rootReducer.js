import postsReducer from './reducers/posts.js';
import titlesReducer from './reducers/titles.js';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  posts: postsReducer,
  titles: titlesReducer
});

export default rootReducer;
