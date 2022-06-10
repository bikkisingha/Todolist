export const selectGlobalState = (state) => state.PostReducer;

export const selectLoadingPosts = (state) => {
  console.log("here", state.PostReducer);

  return selectGlobalState(state).loadingPost || false;
};
export const selectPostList = (state) => selectGlobalState(state).posts || [];
export const selectPostDetails = (state) =>
  selectGlobalState(state).postDetails || {};
export const selectLoadingPostDetails = (state) =>
  selectGlobalState(state).loadingPostDetails || false;
export const selectPostCommentDetails = (state) =>
  selectGlobalState(state).postCommentDetails || {};
export const selectLoadingPostComments = (state) =>
  selectGlobalState(state).loadingPostComments || false;
