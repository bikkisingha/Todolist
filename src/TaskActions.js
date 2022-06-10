import {
  INIT,
  SET_LOADING,
  TOGGLE_TASK,
  UPDATE_TASK_LIST,
  FETCH_TASK_DETAILS,
  FETCH_TASK_DETAILS_COMPLETE,
} from "./constants";
import { selectTaskList } from "./TaskSelectors";
import { getTaskList, getTaskDetails } from "./services/ApiService/apis";

export function initApp() {
  return {
    type: INIT,
    payload: {
      tasks: [],
      loading: false,
      taskIdDetails: {},
      loadingTaskId: false,
    },
  };
}

export function setLoading() {
  return {
    type: SET_LOADING,
  };
}

export function setTasks(taskList) {
  return {
    type: UPDATE_TASK_LIST,
    payload: taskList,
  };
}
export function fetchTaskDetailsAction(taskId) {
  return {
    type: FETCH_TASK_DETAILS,
  };
}

export function fetchTaskDetailsCompleteAction(taskDetails) {
  return {
    type: FETCH_TASK_DETAILS_COMPLETE,
    payload: taskDetails,
  };
}
export function toggleTask(id) {
  return (dispatch, getState) => {
    const state = getState();
    const taskList = selectTaskList(state);
    const updatedTasks = taskList.map((each) => {
      if (each.id === id) {
        return {
          ...each,
          completed: !each.completed,
        };
      }
      return each;
    });
    dispatch(setTasks(updatedTasks));
  };
}

export function fetchTaskList() {
  return async (dispatch) => {
    dispatch(setLoading());
    let taskList = [];
    try {
      const result = await getTaskList();
      taskList = result.slice(0, 20);
    } catch (error) {
      console.log(error);
      taskList = [];
    }
    dispatch(setTasks(taskList));
  };
}

export function fetchTaskDetails(taskId) {
  return async (dispatch, getState) => {
    dispatch(fetchTaskDetailsAction());
    let taskDetails = {};
    try {
      const Iddetails = await getTaskDetails({ id: taskId });
      taskDetails = Iddetails;
      console.log(Iddetails);
    } catch (error) {
      console.log(error);
      taskDetails = {};
    }
    dispatch(fetchTaskDetailsCompleteAction(taskDetails));
  };
}
//posts
