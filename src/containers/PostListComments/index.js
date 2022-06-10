import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import Comment from "../../components/Comment";
import { fetchPostComments } from "../../PostAction";

import {
  selectLoadingPostComments,
  selectPostCommentDetails,
} from "../../PostSelectors";

export default function PostListComments(props) {
  const params = useParams();
  console.log(params);

  const dispatch = useDispatch();
  const postCommentDetails = useSelector(selectPostCommentDetails);
  const loadingPost = useSelector(selectLoadingPostComments);
  useEffect(() => {
    const postsId = params.postId;
    dispatch(fetchPostComments(postsId));
  }, []);
  return (
    <div>
      {loadingPost && <div>loading posts...</div>}

      {!loadingPost && (
        <div>
          {postCommentDetails.map((each) => (
            <Comment
              key={each.id}
              id={each.id}
              postId={each.postId}
              body={each.body}
              title={each.name}
            />
          ))}
        </div>
      )}
    </div>
  );
}
