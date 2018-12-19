import React from 'react'
import classes from './FullGnome.css'

const fullGnome = (props) => {
    let gnome
    if (props.id || props.id === 0) {
        return (
            gnome = (
            <div className={classes.GnomeDetailsBox}>
                <div className={classes.Col_1_4}>
                    <h1>{props.name}</h1>
                </div>
                <div className={classes.Col_1_4}>
                    <img className={classes.ImageGnome} src={props.thumbnail} alt={props.name}/>
                    <ul className={classes.ListDetails}>
                        <li>Age: <strong>{props.age}</strong></li>
                        <li>Weight: <strong>{props.weight.toFixed(2)}</strong></li>
                        <li>Height: <strong>{props.height.toFixed(2)}</strong></li>
                        <li>Hair Color: <strong style={{color: props.hairColor}}>{props.hairColor}</strong></li>
                    </ul>
                </div>
                <div className={classes.Col_1_4}>
                    <h3>Professions</h3>
                    <ul>
                    {props.professions.map(p => {
                        return <li className={classes.ListProfessions}>{p}</li>
                    })}
                    </ul>
                </div>
                <div className={classes.Col_1_4}>
                    <h3>Friends</h3>
                    <ul>
                    {props.friends.map(f => {
                        return <li className={classes.ListFriends}>{f}</li>
                    })}
                    </ul>
                </div>
            </div>
            )
        )
    }
    return <p className={classes.MensajeSelect}>Select a Gnome to show it's details.</p>
}

export default fullGnome