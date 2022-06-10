import React from "react";
import { Outlet } from "react-router-dom";

const PostPart = () => {
  return (
    <div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default PostPart;
