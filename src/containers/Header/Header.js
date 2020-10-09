import React from 'react';
import classes from './Header.scss';
import Title from '../../components/Title/Title';

const Header = () => {
  return (
    <header className={classes.Header}>
      <Title alignment="center" color={'#fff'} text={'Brastlewark Town'} />
    </header>
  );
};

export default Header;
