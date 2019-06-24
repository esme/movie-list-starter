import React from 'react';

const Add = (props) => {
  return(
    <form 
      onSubmit={props.onAddSubmit}
      >
      <input type="search" name="addInput" value={props.addInput}
        onChange={props.onAddChange} />
      <input type="submit" name="addSubmit" value="Add" />
    </form>
  );
}

export default Add;