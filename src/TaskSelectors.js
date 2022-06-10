export const selectGlobalState = (state) => state.global;

export const selectLoadingTasks = (state) => {
  console.log("here", state.global);

  return selectGlobalState(state).loading || false;
};

export const selectTaskList = (state) => selectGlobalState(state).tasks || [];

export const selectTaskDetails = (state) =>
  selectGlobalState(state).taskDetails || {};
export const selectLoadingTaskDetails = (state) =>
  selectGlobalState(state).loadingTaskDetails || false;
//posts
