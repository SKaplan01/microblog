import uuid from 'uuid/v4';
import axios from 'axios';

import {
  ADD_COMMENT,
  DELETE_COMMENT,
  LOAD_COMMENTS,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  LOAD_TITLES,
  LOAD_POST
} from './actionTypes';

const BASE_URL = 'http://localhost:5000/';

//For reference
/**********************************************/
// export function addPost(post) {
//   let id = uuid();
//   post.id = id;
//   post.comments = {};
//   return {
//     type: ADD_POST,
//     post
//   };
// }

// export function editPost(post) {
//   return {
//     type: EDIT_POST,
//     post
//   };
// }

// export function deletePost(postId) {
//   return {
//     type: DELETE_POST,
//     postId
//   };
// }

// export function addComment(comment, postId) {
//   return {
//     type: ADD_COMMENT,
//     postId,
//     comment
//   };
// }

// export function deleteComment(postId, commentId) {
//   return {
//     type: DELETE_COMMENT,
//     postId,
//     commentId
//   };
// }
/**********************************************/

function gotTitlesFromApi(titles) {
  return { type: LOAD_TITLES, titles };
}

//Redux thunk function that gets posts from backend API
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

//Redux thunk function that gets a specific post from API
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

//Redux thunk function that adds a post to backend - gets posts from API once new post added
//Updates redux state with titles
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

function editedPost(post) {
  return { type: EDIT_POST, post };
}

//Redux thunk function that edits a post in the backend - gets posts from API once post has been edited
//Updates redux state with titles
export function editPostApi(post, postId) {
  return async function(dispatch) {
    try {
      console.log(post);
      console.log(postId);
      let resp = await axios.put(`${BASE_URL}api/posts/${postId}`, post);
      await dispatch(editedPost(resp.data));
      await dispatch(getTitlesFromApi());
    } catch (err) {
      console.log(err);
    }
  };
}

function deletedPostFromStore(postId) {
  return { type: DELETE_POST, postId };
}

//Redux thunk function that deletes post from API - - gets posts from API once post has been deleted
//Updates redux state with titles
export function deletePostFromApi(postId) {
  return async function(dispatch) {
    try {
      await axios.delete(`${BASE_URL}api/posts/${postId}`);
      //Is this line of code needed?
      // await dispatch(deletedPostFromStore(postId));
      await dispatch(getTitlesFromApi());
    } catch (err) {
      console.log(err);
    }
  };
}

function gotCommentsFromApi(postId) {
  return { type: LOAD_COMMENTS, postId };
}

//Redux thunk function that gets all comments from API
export function getCommentsFromApi(postId) {
  return async function(dispatch) {
    try {
      await axios.get(`${BASE_URL}api/posts/${postId}/comments`);
      await dispatch(gotCommentsFromApi(postId));
    } catch (err) {
      console.log(err);
    }
  };
}

export function addedComment(comment, postId) {
  return {
    type: ADD_COMMENT,
    postId,
    comment
  };
}

//Redux thunk function that gets adds a comment to API
//Dispatch getCommentsFromApi to load comments after comment is added and update redux state
export function addCommentApi(comment, postId) {
  return async function(dispatch) {
    try {
      let resp = await axios.post(
        `${BASE_URL}api/posts/${postId}/comments`,
        comment
      );
      await dispatch(addedComment(resp.data, postId));
      // await dispatch(getCommentsFromApi(postId));
    } catch (err) {
      console.log(err);
    }
  };
}

export function deletedComment(postId, commentId) {
  return {
    type: DELETE_COMMENT,
    postId,
    commentId
  };
}

//Redux thunk function that gets deletes a comment from API
//Dispatch getCommentsFromApi to load comments after is comment is deleted and update redux state
export function deleteCommentApi(postId, commentId) {
  return async function(dispatch) {
    try {
      await axios.delete(
        `${BASE_URL}api/posts/${postId}/comments/${commentId}`
      );
      await dispatch(deletedComment(postId, commentId));
      // await dispatch(getCommentsFromApi(postId));
    } catch (err) {
      console.log(err);
    }
  };
}
