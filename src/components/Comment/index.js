import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

function Comment(props) {
  const { body, name, postId, onClick, id } = props;

  return (
    <div>
      <label>
        <div>Body:{body}</div>
        <div>Name:{name}</div>
        <div>PostId:{postId}</div>
        <div>id:{id}</div>
      </label>
    </div>
  );
}

Comment.propTypes = {
  id: PropTypes.number,
  postId: PropTypes.number,
  name: PropTypes.string,
  body: PropTypes.string,
  onClick: PropTypes.func,
};

export default Comment;
