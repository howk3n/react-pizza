import Username from '@/features/user/Username';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

Header.propTypes = {
  children: PropTypes.any,
};

function Header({ children }) {
  return (
    <header className="flex items-center justify-between border-b-2 border-b-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Logo/Header
      </Link>
      {children}
      <Username />
    </header>
  );
}

export default Header;
