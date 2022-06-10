export const TASK_LIST_API_CONFIG = {
  method: "GET",
  baseURL: "https://jsonplaceholder.typicode.com/",
  url: "todos",
};
export const TASK_ID = {
  method: "GET",
  baseURL: "https://jsonplaceholder.typicode.com/todos/",
  url: "id",
};

export const POST_DETAILS = {
  method: "GET",
  baseURL: "https://jsonplaceholder.typicode.com/",
  url: "posts",
};
export const POST_ID_DETAILS = {
  method: "GET",
  baseURL: "https://jsonplaceholder.typicode.com/posts/",
  url: "id",
};
export const POST_COMMENT_DETAILS = {
  method: "GET",
  baseURL: "https://jsonplaceholder.typicode.com/posts/:postId/",
  url: "comments",
};

export const INITIAL_STATE = {};

export const INIT = "src/INIT";
export const SET_LOADING = "src/SET_LOADING";
export const UPDATE_TASK_LIST = "src/UPDATE_TASK_LIST";
export const FETCH_TASK_DETAILS = "src/FETCH_TASK_DETAILS";
export const FETCH_TASK_DETAILS_COMPLETE = "src/FETCH_TASK_DETAILS_COMPLETE";

//posts: ""
export const INITIAL_STATE_POST = {};
export const INITIA = "src/INITIA";
export const SET_LOADING_POST = "src/SET_LOADING_POST";
export const UPDATE_POST_LIST = "src/UPDATE_POST_LIST";
export const FETCH_POST_DETAILS = "src/FETCH_POST_DETAILS";
export const FETCH_POST_DETAILS_COMPLETE = "src/FETCH_POST_DETAILS_COMPLETE";
export const FETCH_POST_COMMENTS = "src/FETCH_POST_COMMENTS";
export const FETCH_POST_COMMENTS_COMPLETE = "src/FETCH_POST_COMMENTS_COMPLETE";
