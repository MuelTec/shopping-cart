import React, {useState} from 'react';
import { BsSearch } from 'react-icons/bs';
import './SearchBar.css';

const SearchBar = () => {

  const [searchValue, setSearchValue] = useState('');

  return (
    <form className="search-bar">
      <input
        type="search"
        value={searchValue}
        placeholder="Buscar produtos" 
        className="search-input" 
        onChange={ ({target}) => setSearchValue(target.value)}
        required />
      <button type="submit" className="search-button"> <BsSearch /></button>
    </form>
  );
};

export default SearchBar;