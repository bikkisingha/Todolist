import {
  FETCH_POST_DETAILS,
  FETCH_POST_DETAILS_COMPLETE,
  FETCH_POST_COMMENTS,
  FETCH_POST_COMMENTS_COMPLETE,
  INITIA,
  INITIAL_STATE_POST,
  SET_LOADING_POST,
  UPDATE_POST_LIST,
} from "./constants";

function PostReducer(state = INITIAL_STATE_POST, action) {
  switch (action.type) {
    case INITIA:
      return {
        ...state,
        ...action.payload,
      };
    case SET_LOADING_POST:
      return {
        ...state,
        loadingPost: true,
      };
    case UPDATE_POST_LIST:
      return {
        ...state,
        loadingPost: false,
        posts: action.payload,
      };
    case FETCH_POST_DETAILS:
      return {
        ...state,
        loadingPostDetails: true,
      };
    case FETCH_POST_DETAILS_COMPLETE:
      return {
        ...state,
        loadingPostDetails: false,
        postDetails: action.payload,
      };
    case FETCH_POST_COMMENTS:
      return {
        ...state,
        loadingPostComments: true,
      };
    case FETCH_POST_COMMENTS_COMPLETE:
      return {
        ...state,
        loadingPostComments: false,
        postCommentDetails: action.payload,
      };
    default:
      return state;
  }
}

export default PostReducer;
