import React from "react";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { fetchPostComments } from "./PostAction";
import Comment from "./components/Comment";

import Postlist from "./components/Postcomponent";
import {
  selectLoadingPostComments,
  selectPostCommentDetailsDetails,
} from "./PostSelectors";
import styles from "./styles.module.css";

export default function PostCommentList() {
  const dispatch = useDispatch();

  const PostComments = useSelector(selectPostCommentDetails);
  const loadingPost = useSelector(selectLoadingPostComments);

  function handleClick(postId) {
    dispatch(postId);
  }

  useEffect(() => {
    dispatch(fetchPostComments());
  }, [dispatch]);

  return (
    <div className="PostComments">
      {loadingPost && <div>Loading PostComments....</div>}
      {!loadingPost && (
        <div className={styles.posts_container}>
          {PostComments.map((each) => (
            <Postlist
              key={each.id}
              id={each.id}
              postId={each.postId}
              body={each.body}
              name={each.name}
              onClick={handleClick}
            />
          ))}
        </div>
      )}
    </div>
  );
}
