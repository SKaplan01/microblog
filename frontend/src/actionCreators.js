import uuid from 'uuid/v4';
import axios from 'axios';

import {
  ADD_COMMENT,
  DELETE_COMMENT,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  LOAD_TITLES,
  LOAD_POST
} from './actionTypes';

const BASE_URL = 'http://localhost:5000/';

// export function addPost(post) {
//   let id = uuid();
//   post.id = id;
//   post.comments = {};
//   return {
//     type: ADD_POST,
//     post
//   };
// }

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

function gotTitlesFromApi(titles) {
  return { type: LOAD_TITLES, titles };
}

export function getTitlesFromApi() {
  return async function(dispatch) {
    try {
      let resp = await axios.get(`${BASE_URL}api/posts`);
      dispatch(gotTitlesFromApi(resp.data));
    } catch (err) {
      console.log(err);
    }
  };
}

function gotPostFromApi(post) {
  return { type: LOAD_POST, post };
}

export function getOnePostFromApi(postId) {
  return async function(dispatch) {
    try {
      let resp = await axios.get(`${BASE_URL}api/posts/${postId}`);
      dispatch(gotPostFromApi(resp.data));
    } catch (err) {
      console.log(err);
    }
  };
}

function addedPostToApi(post) {
  return { type: ADD_POST, post };
}

export function addPostToApi(post) {
  return async function(dispatch) {
    try {
      let resp = await axios.post(`${BASE_URL}api/posts`, post);
      await dispatch(addedPostToApi(resp.data));
      await dispatch(getTitlesFromApi());
    } catch (err) {
      console.log(err);
    }
  };
}
