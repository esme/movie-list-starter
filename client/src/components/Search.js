import React from 'react';

const Search = (props) => {
  return (
    <form 
      onSubmit={props.onSearchSubmit}>
      <input type="search" name="searchInput" value={props.searchInput} 
        onChange={props.onSearchChange}/>
      <input type="submit" name="searchSubmit" value="Search" className="" />
    </form>    
  );
}

export default Search;