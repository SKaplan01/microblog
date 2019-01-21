import deepFreeze from 'deep-freeze';
import rootReducer from './rootReducer';
import {
  ADD_COMMENT,
  DELETE_COMMENT,
  ADD_POST,
  EDIT_POST,
  DELETE_POST
} from './actionTypes';

const post1 = {
  postTitle: 'first',
  postDescription: 'a post',
  postBody: 'hi',
  id: 1,
  comments: {}
};

const post2 = {
  postTitle: 'second',
  postDescription: 'a new post',
  postBody: 'hello',
  comments: {},
  id: 2
};

const editedPost1 = {
  postTitle: 'first',
  postDescription: 'a GREAT post',
  postBody: 'hi',
  id: 1,
  comments: {}
};

describe('rootReducer', function() {
  it('should ADD_POST and be a pure function', function() {
    let initial_state = {
      posts: {
        1: post1
      }
    };
    let action = {
      type: ADD_POST,
      post: post2
    };
    let expectedState = { posts: { 1: post1, 2: post2 } };

    deepFreeze(initial_state);
    deepFreeze(action);

    expect(rootReducer(initial_state, action)).toEqual(expectedState);
  });

  it('should EDIT_POST and be a pure function', function() {
    let initial_state = {
      posts: {
        1: post1
      }
    };
    let action = {
      type: EDIT_POST,
      post: editedPost1
    };

    deepFreeze(initial_state);
    deepFreeze(action);

    let expectedState = { posts: { 1: editedPost1 } };
    expect(rootReducer(initial_state, action)).toEqual(expectedState);
  });

  it('should DELETE_POST and be a pure function', function() {
    let initial_state = {
      posts: {
        1: post1
      }
    };
    let action = {
      type: DELETE_POST,
      postId: '1'
    };

    deepFreeze(initial_state);
    deepFreeze(action);

    let expectedState = { posts: {} };
    expect(rootReducer(initial_state, action)).toEqual(expectedState);
  });

  it('should ADD_COMMENT and be a pure function', function() {
    let initial_state = {
      posts: {
        1: post1
      }
    };
    let action = {
      type: ADD_COMMENT,
      postId: '1',
      comment: { text: 'good', id: 1 }
    };
    let expectedState = { posts: { 1: { ...post1, comments: { 1: 'good' } } } };

    deepFreeze(initial_state);
    deepFreeze(action);

    expect(rootReducer(initial_state, action)).toEqual(expectedState);
  });

  it('should DELETE_COMMENT and be a pure function', function() {
    let initial_state = {
      posts: {
        1: { ...post1, comments: { 1: 'short-term comment' } }
      }
    };
    let action = {
      type: DELETE_COMMENT,
      postId: '1',
      commentId: '1'
    };
    let expectedState = { posts: { 1: { ...post1, comments: {} } } };

    deepFreeze(initial_state);
    deepFreeze(action);

    expect(rootReducer(initial_state, action)).toEqual(expectedState);
  });
});
