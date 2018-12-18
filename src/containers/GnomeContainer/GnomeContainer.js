import React, { Component } from 'react'
import classes from './GnomeContainer.css'
import Axios from 'axios';

import Gnome from '../../components/Gnome/Gnome'

class GnomeContainer extends Component {

    state = {
        gnomes: []
    }

    componentDidMount() {
        Axios.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
            .then(response => {
                const gnomes = response.data.Brastlewark
                this.setState({gnomes: gnomes})
            })
            .catch(e => console.log(e))
    }

    render () {
        const gnomes = this.state.gnomes.map(gnome => {
            return <Gnome name={gnome.name}/>
        })
        return (
            <section>
                <div className={classes.Col4}>
                    <ul>
                        {gnomes}
                    </ul>
                </div>
                <div className={classes.Col8}>

                </div>
            </section>
        )
    }
}

export default GnomeContainer