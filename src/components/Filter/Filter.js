import React from 'react';
import PropTypes from 'prop-types';
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

Filter.propTypes = {
  onTextChange: PropTypes.func,
  value: PropTypes.string,
};

export default Filter;
