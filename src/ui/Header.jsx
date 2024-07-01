import PropTypes from "prop-types";
import { Link } from "react-router-dom";

Header.propTypes = {
  children: PropTypes.any,
};

function Header({ children }) {
  return (
    <header>
      <Link to="/">Logo/Header</Link>
      {children}
      <p>Username</p>
    </header>
  );
}

export default Header;
