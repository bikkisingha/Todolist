import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

function Postlist(props) {
  const { body, title, onClick, id } = props;
  const navigate = useNavigate();
  function handleClick() {
    onClick(id);
  }
  function handleNavigate() {
    navigate(`/posts/${id}/comments`);
  }
  function handleNavigate() {
    navigate(`/posts/${id}`);
  }
  return (
    <div>
      <label>
        <div>Title:{title}</div>
        <div>Body:{body}</div>
        <button onClick={handleNavigate}>Click Here</button>
        <Link to={`/posts/${id}`}>Click Here</Link>
        <div>
          <Link to={`/posts/${id}/comments`}>Comment List</Link>
        </div>
      </label>
    </div>
  );
}

Postlist.propTypes = {
  id: PropTypes.number,
  postid: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
  onClick: PropTypes.func,
};

export default Postlist;
