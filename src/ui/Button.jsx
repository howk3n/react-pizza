import BUTTON_TYPES from '@/constants/ButtonTypes';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const baseStyle =
  'mt-1 inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-200 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed';

const styles = {
  [BUTTON_TYPES.PRIMARY]: baseStyle + ' px-4 py-3 md:px-6 md:py-4',
  [BUTTON_TYPES.SMALL]:
    baseStyle + ' md:text-s px-4 py-2 text-xs md:px-5 md:py-2.5',
  [BUTTON_TYPES.SECONDARY]:
    'px-4 py-2.5 md:px-6 md:py-3.5 mt-1 text-sm inline-block rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-200 hover:text-stone-800 hover:bg-stone-300 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed',
};

// const className =
//   'mt-1 inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-200 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4';

Button.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  to: PropTypes.string,
};
function Button({ children, type, disabled, to }) {
  if (to) {
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  }
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
