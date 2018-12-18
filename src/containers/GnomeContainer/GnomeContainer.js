import React, { Component } from 'react'
import classes from './GnomeContainer.css'
import Axios from 'axios';

import Gnome from '../../components/Gnome/Gnome'
import Filter from '../../components/Filter/Filter'

class GnomeContainer extends Component {

    state = {
        gnomes: [],
        filterString: ''
    }

    componentDidMount() {
        Axios.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
            .then(response => {
                const gnomes = response.data.Brastlewark
                const updatedGnomes = gnomes.map(gnome => {
                    return {
                        ...gnome
                    }
                })
                this.setState({gnomes: updatedGnomes})
            })
    }

    render () {
        const gnomes = this.state.gnomes.filter(gnome => 
            gnome.name.toLowerCase().includes(this.state.filterString.toLowerCase())
        ).map(gnome => {
            return <Gnome
                        key={gnome.id} 
                        name={gnome.name}/>
        })
        return (
            <section>
                <div className={classes.Col4}>
                    <Filter onTextChange={text => this.setState({filterString: text})}/>
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