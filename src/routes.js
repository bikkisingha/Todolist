import App from "./App";

import BaseComponent from "./containers/BaseRoute";
import NotFoundComponent from "./containers/NotFound";
import TodoListItem from "./containers/TodoListItem";
import TodoListWrapper from "./containers/TodoListWrapper";

import PostListItem from "./containers/PostListItem";
import AppPost from "./AppPost";

import PostPart from "./containers/PostListWrapper";
import Comment from "./components/Comment";
import PostListComments from "./containers/PostListComments";

const ROUTES = [
  {
    path: "/",
    element: <BaseComponent />,
  },
  {
    path: "/posts",
    element: <PostPart />,
    children: [
      {
        index: true,
        element: <AppPost />,
      },
      {
        path: "/posts/:Id",
        element: <PostListItem />,
      },
      {
        path: "/posts/:postId/comments",
        element: <PostListComments />,
      },
    ],
  },
  {
    path: "/todo-list",
    element: <TodoListWrapper />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/todo-list/:todoId",
        element: <TodoListItem />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundComponent />,
  },
];

export default ROUTES;
