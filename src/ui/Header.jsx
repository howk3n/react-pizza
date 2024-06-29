import PropTypes from "prop-types";
import { Link } from "react-router-dom";

Header.propTypes = {};

function Header() {
  return (
    <header>
      <Link to="/">Logo/Header</Link>
      <p>Username</p>
    </header>
  );
}

export default Header;
