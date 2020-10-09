import React from 'react';
import TextField from '@material-ui/core/TextField';

const Filter = ({ onTextChange, value }) => {
  return (
    <TextField
      onChange={(event) => onTextChange(event.target.value)}
      value={value}
      id="outlined-search"
      label="Search..."
      type="search"
      variant="outlined"
    />
  );
};

export default Filter;
