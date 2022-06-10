import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

function Task(props) {
  const { completed, title, onClick, id } = props;
  const navigate = useNavigate();
  function handleClick() {
    onClick(id);
  }
  const titleClasses = [];
  if (completed) {
    titleClasses.push(styles.completed_text);
  }

  function handleNavigate() {
    navigate(`/todo-list/${id}`);
  }
  return (
    <div>
      <label>
        <input checked={completed} type="checkbox" onChange={handleClick} />
        <span className={titleClasses.join(" ")}>{title}</span>
        <button onClick={handleNavigate}>Click Here</button>
        <Link to={`/todo-list/${id}`}>Click Here</Link>
        <span>
          <form action="">
            <input type="text" />
            <button type="submit"> submit </button>
          </form>
        </span>
      </label>
    </div>
  );
}

Task.propTypes = {
  id: PropTypes.number,
  completed: PropTypes.bool,
  title: PropTypes.string,
  onClick: PropTypes.func,
};

export default Task;
