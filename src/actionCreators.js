import uuid from 'uuid/v4';
import {
  ADD_COMMENT,
  DELETE_COMMENT,
  ADD_POST,
  EDIT_POST,
  DELETE_POST
} from './actionTypes';

export function addPost(post) {
  let id = uuid();
  post.id = id;
  post.comments = {};
  return {
    type: ADD_POST,
    post
  };
}

export function editPost(post) {
  return {
    type: EDIT_POST,
    post
  };
}

export function deletePost(postId) {
  return {
    type: DELETE_POST,
    postId
  };
}

export function addComment(comment, postId) {
  return {
    type: ADD_COMMENT,
    postId,
    comment
  };
}

export function deleteComment(postId, commentId) {
  return {
    type: DELETE_COMMENT,
    postId,
    commentId
  };
}
