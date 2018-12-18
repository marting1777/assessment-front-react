import React, { Component } from 'react';
import classes from './App.css';
import Header from './containers/Header/Header';


class App extends Component {
    render() {
        return (
            <div className={classes.App}>
                <Header />
                <main className={classes.MainContainer}>
                    <div className={classes.Col4}>

                    </div>
                    <div className={classes.Col8}>
                    
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
