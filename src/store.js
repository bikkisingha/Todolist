import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import PostReducer from "./PostReducer";
import AppReducer from "./globalReducer";

function getComposeEnhancer() {
  if (
    process.env.NODE_ENV === "development" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ) {
    return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  }
  return compose;
}

const composeEnhancer = getComposeEnhancer();

function configureStore(initialState) {
  const store = createStore(
    combineReducers({
      global: AppReducer,
      PostReducer,
    }),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
  );
  return store;
}

export default configureStore;
