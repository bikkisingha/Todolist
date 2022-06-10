import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import { fetchPostDetails } from "../../PostAction";
import {
  selectLoadingPostDetails,
  selectPostDetails,
} from "../../PostSelectors";

export default function PostListItem(props) {
  const params = useParams();
  console.log(params);
  const dispatch = useDispatch();
  const postDetails = useSelector(selectPostDetails);
  const loading_Post = useSelector(selectLoadingPostDetails);
  useEffect(() => {
    const postsId = params.Id;
    dispatch(fetchPostDetails(postsId));
  }, []);
  return (
    <div>
      {loading_Post && <div>loading posts...</div>}

      {!loading_Post && <>Title: {postDetails.title}</>}
    </div>
  );
}
