import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const Gnome = ({ clicked, name }) => {
  return (
    <ListItem button onClick={clicked}>
      <ListItemText primary={name} />
    </ListItem>
  );
};

Gnome.defaultProps = {
  clicked: () => {},
  name: '',
};

Gnome.propTypes = {
  clicked: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Gnome;
