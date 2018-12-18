import React, { Component } from 'react';
import classes from './App.css';
import Header from './containers/Header/Header';
import GnomeContainer from './containers/GnomeContainer/GnomeContainer';


class App extends Component {
    render() {
        return (
            <div className={classes.App}>
                <Header />
                <main className={classes.MainContainer}>
                    <GnomeContainer />
                </main>
            </div>
        );
    }
}

export default App;
