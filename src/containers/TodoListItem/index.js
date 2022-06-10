import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import { fetchTaskDetails } from "../../TaskActions";
import {
  selectLoadingTaskDetails,
  selectTaskDetails,
} from "../../TaskSelectors";

export default function TodoListItem(props) {
  const params = useParams();
  console.log(params);
  const dispatch = useDispatch();
  const taskDetails = useSelector(selectTaskDetails);
  const loading = useSelector(selectLoadingTaskDetails);
  useEffect(() => {
    const taskId = params.todoId;
    dispatch(fetchTaskDetails(taskId));
  }, []);
  return (
    <div>
      {loading && <div>loading ...</div>}

      {!loading && <>Title:{taskDetails.title}</>}
    </div>
  );
}
