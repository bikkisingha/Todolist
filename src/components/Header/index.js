import PropTypes from "prop-types";
import styles from "./styles.module.css";

function Header(props) {
  const { title, subTitle } = props;

  return (
    <div className={styles.title}>
      <h1>{title}</h1>
      <span>{subTitle}</span>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string
};

export default Header;
