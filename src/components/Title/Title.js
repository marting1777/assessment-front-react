import React from 'react';
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

export default Title;
