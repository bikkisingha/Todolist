import ApiService from ".";
import {
  POST_LIST_API_CONFIG,
  POST_DETAILS_API_CONFIG,
  POST_COMMENTS_API_CONFIG,
  TASK_DETAILS_API_CONFIG,
  TASK_LIST_API_CONFIG,
} from "./constants";

export const getTaskList = ApiService(TASK_LIST_API_CONFIG);
export const getTaskDetails = ApiService(TASK_DETAILS_API_CONFIG);
//posts
export const getPostList = ApiService(POST_LIST_API_CONFIG);
export const getPostDetails = ApiService(POST_DETAILS_API_CONFIG);
export const getPostCommentDetails = ApiService(POST_COMMENTS_API_CONFIG);
