// import PropTypes from 'prop-types';
// SearchOrder.propTypes = {};

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search Order #"
        value={query}
        onChange={(e) => setQuery(String(e.target.value))}
        className="w-28 cursor-pointer rounded-full bg-yellow-50 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:cursor-auto focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 disabled:cursor-not-allowed sm:w-64 sm:focus:w-72"
      ></input>
    </form>
  );
}

export default SearchOrder;
