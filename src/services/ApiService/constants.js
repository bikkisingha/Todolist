const BASE_URL = "https://jsonplaceholder.typicode.com/";

export const TASK_LIST_API_CONFIG = {
  method: "GET",
  baseURL: BASE_URL,
  url: "todos",
};

export const TASK_DETAILS_API_CONFIG = {
  method: "GET",
  baseURL: BASE_URL,
  url: "todos/:id",
};

export const POST_LIST_API_CONFIG = {
  method: "GET",
  baseURL: BASE_URL,
  url: "posts",
};
export const POST_DETAILS_API_CONFIG = {
  method: "GET",
  baseURL: BASE_URL,
  url: "posts/:id",
};
export const POST_COMMENTS_API_CONFIG = {
  method: "GET",
  baseURL: BASE_URL,
  url: "posts/:postId/comments",
};
