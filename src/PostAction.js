import {
  INITIA,
  SET_LOADING_POST,
  FETCH_POST_DETAILS,
  UPDATE_POST_LIST,
  FETCH_POST_DETAILS_COMPLETE,
  FETCH_POST_COMMENTS,
  FETCH_POST_COMMENTS_COMPLETE,
} from "./constants";
import { selectPostList } from "./PostSelectors";
import {
  getPostList,
  getPostDetails,
  getPostCommentDetails,
} from "./services/ApiService/apis";

export function initAppPost() {
  return {
    type: INITIA,
    payload: {
      posts: [],
      loadingPost: false,
      postIdDetails: {},
      loadingPostId: false,
      postCommentDetails: [],
      loadingPostComments: false,
    },
  };
}

export function setLoadingPost() {
  return {
    type: SET_LOADING_POST,
  };
}
export function setPosts(postList) {
  return {
    type: UPDATE_POST_LIST,
    payload: postList,
  };
}

export function fetchPostDetailsAction(postsId) {
  return {
    type: FETCH_POST_DETAILS,
  };
}

export function fetchPostDetailsCompleteAction(postDetails) {
  return {
    type: FETCH_POST_DETAILS_COMPLETE,
    payload: postDetails,
  };
}

export function setLoadingPostComments() {
  return {
    type: FETCH_POST_COMMENTS,
  };
}
export function setPostCommentDetails(postComments) {
  return {
    type: FETCH_POST_COMMENTS_COMPLETE,
    payload: postComments,
  };
}

export function fetchPostList() {
  return async (dispatch, getState) => {
    const state = getState();
    //const postList = selectPostList(state);
    dispatch(setLoadingPost());
    let postList = [];
    try {
      const result = await getPostList();
      postList = result.slice(0, 20);
    } catch (error) {
      console.log(error);
      postList = [];
    }
    dispatch(setPosts(postList));
  };
}

export function fetchPostDetails(postsId) {
  return async (dispatch, getState) => {
    dispatch(fetchPostDetailsAction());
    let postDetails = {};
    try {
      const Iddetail = await getPostDetails({ id: postsId });
      postDetails = Iddetail;
      console.log(Iddetail);
    } catch (error) {
      console.log(error);
      postDetails = {};
    }
    dispatch(fetchPostDetailsCompleteAction(postDetails));
  };
}

export function fetchPostComments(postsId) {
  return async (dispatch, getState) => {
    const state = getState();
    dispatch(setLoadingPostComments());
    let postComments = [];
    try {
      const result = await getPostCommentDetails({ postId: postsId });
      postComments = result.slice(0, 2);
    } catch (error) {
      console.log(error);
      postComments = [];
    }
    dispatch(setPostCommentDetails(postComments));
  };
}
