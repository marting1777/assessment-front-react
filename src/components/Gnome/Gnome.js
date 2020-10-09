import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const Gnome = ({ clicked, name }) => {
  return (
    <ListItem button onClick={clicked}>
      <ListItemText primary={name} />
    </ListItem>
  );
};

export default Gnome;
