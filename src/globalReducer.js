import {
  INIT,
  INITIAL_STATE,
  SET_LOADING,
  TOGGLE_TASK,
  UPDATE_TASK_LIST,
  FETCH_TASK_DETAILS,
  FETCH_TASK_DETAILS_COMPLETE,
} from "./constants";

function AppReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INIT:
      return {
        ...state,
        ...action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_TASK_LIST:
      return {
        ...state,
        loading: false,
        tasks: action.payload,
      };
    case FETCH_TASK_DETAILS:
      return {
        ...state,
        loadingTaskDetails: true,
      };
    case FETCH_TASK_DETAILS_COMPLETE:
      return {
        ...state,
        loadingTaskDetails: false,
        taskDetails: action.payload,
      };
    default:
      return state;
  }
}

export default AppReducer;
