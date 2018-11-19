import {
  ADD_COMMENT,
  DELETE_COMMENT,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  LOAD_POST
} from '../actionTypes';

function postsReducer(state = {}, action) {
  console.log('posts reducer ran; state & action:', state, action);

  switch (action.type) {
    //destructure posts from existing redux state and add key/value for new post
    case ADD_POST:
      return { ...state.posts, [action.post.id]: action.post };

    //destructure posts from existing redux state and overwrite post to update with new value
    case EDIT_POST:
      return { ...state.posts, [action.post.id]: action.post };

    //destructures post to delete and stores in "deletedPost"
    //destructures all other posts as "posts" --> only returns "posts"
    case DELETE_POST:
      let { [action.postId]: deletedPost, ...posts } = state;
      return state;

    case ADD_COMMENT:
      return {
        //destructures all posts from redux state
        ...state,
        //overwrites post that is being commented on
        [action.postId]: {
          //destructures all other keys for this post besides comments
          ...state[action.postId],
          comments: {
            //destructures all comments for this post from redux state
            ...state[action.postId].comments,
            //adds new comment
            [action.comment.id]: action.comment.text
          }
        }
      };

    case DELETE_COMMENT:
      //destructures comment to delete and stores in "deletedComment"
      //destructures all other comments as "comments"
      let { [action.commentId]: deletedComment, ...comments } = state[
        action.postId
      ].comments;
      return {
        //destructures all posts from redux state
        ...state,
        //overwrites post that is having comment deleted from it's commentList
        [action.postId]: {
          ...state[action.postId],
          //passed the "comments" from line 51
          comments
        }
      };

    case LOAD_POST:
      return { ...state.posts, [action.post.id]: action.post };

    default:
      return state;
  }
}

export default postsReducer;
