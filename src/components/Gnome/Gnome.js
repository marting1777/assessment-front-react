import React from 'react'
import classes from './Gnome.css'

const gnome = (props) => {
    return (
        <li onClick={props.clicked} className={classes.Gnome}>{props.name}</li>
    )
}

export default gnome