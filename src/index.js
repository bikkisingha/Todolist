import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {
  BrowserRouter,
  Outlet,
  Route,
  Router,
  Routes,
  useParams,
} from "react-router-dom";
import { initApp } from "./TaskActions";
import { initAppPost } from "./PostAction";
import App from "./App";
import PostApi from "./AppPost";
import AppContainer from "./AppContainer";
import { INITIAL_STATE } from "./constants";
import { INITIAL_STATE_POST } from "./constants";
import BaseComponent from "./containers/BaseRoute";
import NotFoundComponent from "./containers/NotFound";
import TodoListItem from "./containers/TodoListItem";
import TodoListWrapper from "./containers/TodoListWrapper";
import PostListItem from "./containers/PostListItem";
import configureStore from "./store";
import { createStore } from "redux";
const rootElement = document.getElementById("root");

const store = configureStore(INITIAL_STATE, INITIAL_STATE_POST);
store.dispatch(initApp());
store.dispatch(initAppPost());

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppContainer />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  rootElement
);
