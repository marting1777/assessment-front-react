import React, { Component } from 'react'
import classes from './GnomeContainer.css'
import Axios from 'axios';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Gnome from '../../components/Gnome/Gnome'
import Filter from '../../components/Filter/Filter'
import FullGnome from '../../components/FullGnome/FullGnome'

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
                        ...gnome,
                        ...gnome.professions.map(p => p),
                        ...gnome.friends.map(f => f)
                    }
                })
                this.setState({gnomes: updatedGnomes})
            })
    }

    selectedGnomeHandler = (id, name, thumbnail, age, weight, height, hair_color, professions, friends) => {
        this.setState({
            selectedGnomeId: id,
            selectedGnomeName: name,
            selectedGnomeImg: thumbnail,
            selectedGnomeAge: age,
            selectedGnomeWeight: weight,
            selectedGnomeHeight: height,
            selectedGnomeHair: hair_color,
            selectedGnomeProfessions: professions,
            selectedGnomeFriends: friends
        })
    }

    render () {
        const gnomes = this.state.gnomes.filter(gnome => 
            gnome.name.toLowerCase().includes(this.state.filterString.toLowerCase())
        ).map(gnome => {
            return <Gnome
                        key={gnome.id} 
                        name={gnome.name}
                        clicked={() => this.selectedGnomeHandler(gnome.id, gnome.name, gnome.thumbnail, gnome.age, gnome.weight, gnome.height, gnome.hair_color, gnome.professions, gnome.friends)}/>
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
                    <FullGnome 
                        id={this.state.selectedGnomeId}
                        name={this.state.selectedGnomeName}
                        thumbnail={this.state.selectedGnomeImg}
                        age={this.state.selectedGnomeAge}
                        weight={this.state.selectedGnomeWeight}
                        height={this.state.selectedGnomeHeight}
                        hairColor={this.state.selectedGnomeHair}
                        professions={this.state.selectedGnomeProfessions}
                        friends={this.state.selectedGnomeFriends}/>
                </div>
            </section>
        )
    }
}

export default GnomeContainer