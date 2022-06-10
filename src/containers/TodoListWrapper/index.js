import { Outlet } from "react-router-dom";

export default function TodoListWrapper(props) {
    return (
      <div>
        <Outlet />
      </div>
    )
  }