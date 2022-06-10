import React from "react";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { fetchPostList, togglePost } from "./PostAction";
import Comment from "./components/Comment";

import Postlist from "./components/Postcomponent";
import { selectLoadingPosts, selectPostList } from "./PostSelectors";
import styles from "./styles.module.css";

export default function AppPost() {
  const dispatch = useDispatch();

  const Posts = useSelector(selectPostList);
  const loadingPost = useSelector(selectLoadingPosts);

  function handleClick(id) {
    dispatch(id);
  }
  function handleClick(postId) {
    dispatch(postId);
  }
  useEffect(() => {
    dispatch(fetchPostList());
  }, [dispatch]);

  return (
    <div className="Posts">
      {loadingPost && <div>Loading Posts....</div>}
      {!loadingPost && (
        <div className={styles.posts_container}>
          {Posts.map((each) => (
            <Postlist
              key={each.id}
              id={each.id}
              postId={each.postId}
              body={each.body}
              title={each.title}
              onClick={handleClick}
            />
          ))}
        </div>
      )}
    </div>
  );
}
