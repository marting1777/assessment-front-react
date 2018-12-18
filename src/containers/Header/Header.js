import React, { Component } from 'react'
import classes from './Header.css'

import Title from '../../components/Title/Title'

class Header extends Component {
    render () {
        return (
            <header className={classes.Header}>
                <Title />
            </header>
        )
    }
}

export default Header