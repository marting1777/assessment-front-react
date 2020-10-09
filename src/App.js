import React from 'react';
import classes from './App.css';
import Header from './containers/Header/Header';
import Gnomes from './containers/Gnomes/Gnomes';

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <main className={classes.MainContainer}>
        <Gnomes />
      </main>
    </div>
  );
}

export default App;
