import React from 'react';
import PropTypes from 'prop-types';
import classes from './Title.scss';

const Title = ({ text, color, alignment }) => {
  return (
    <h1
      className={classes.Title}
      style={{ color: `${color}`, textAlign: `${alignment}` }}
    >
      {text}
    </h1>
  );
};

Title.defaultProps = {
  title: '',
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  algnment: PropTypes.string,
};

export default Title;
