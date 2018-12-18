import React, { Component } from 'react'
import classes from './Filter.css'

class Filter extends Component {
    render () {
        return (
            <label>
                <input className={classes.Filter} type="text" placeholder="Search..." onKeyUp={event => this.props.onTextChange(event.target.value)}/>
            </label>
        )
    }
}

export default Filter