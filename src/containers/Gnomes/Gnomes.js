import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classes from './Gnomes.scss';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import BounceLoader from 'react-spinners/BounceLoader';
import Gnome from '../../components/Gnome/Gnome';
import Filter from '../../components/Filter/Filter';
import FullGnome from '../../components/FullGnome/FullGnome';
import { initGnomes } from '../../store/actions/gnomesActions';

const Gnomes = ({ loading, gnomes, onInitGnomes }) => {
  const [filterString, setFilterString] = useState('');
  const [gnomeEntity, setGnomeEntity] = useState({});
  const [numberOfGnomes, setNumberOfGnomes] = useState(10);
  const [startingNumber, setStartingNumber] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [value, setValue] = useState('');

  useEffect(() => {
    onInitGnomes();
  }, []);

  const selectedGnomeHandler = (
    id,
    name,
    thumbnail,
    age,
    weight,
    height,
    hair_color,
    professions,
    friends
  ) => {
    setGnomeEntity({
      selectedGnomeId: id,
      selectedGnomeName: name,
      selectedGnomeImg: thumbnail,
      selectedGnomeAge: age,
      selectedGnomeWeight: weight,
      selectedGnomeHeight: height,
      selectedGnomeHair: hair_color,
      selectedGnomeProfessions: professions,
      selectedGnomeFriends: friends,
    });
  };

  const handleMoreGnomes = () => {
    if (numberOfGnomes === 10) {
      setDisabled(false);
    }
    setNumberOfGnomes(numberOfGnomes + 10);
    setStartingNumber(numberOfGnomes);
  };

  const handleLessGnomes = () => {
    if (numberOfGnomes === 10) {
      setDisabled(true);
      setNumberOfGnomes(10);
      setStartingNumber(0);
    } else {
      setNumberOfGnomes(numberOfGnomes - 10);
      setStartingNumber(startingNumber - 10);
    }
  };

  const handleClick = (name, index) => {
    setValue(name[index]);
    setFilterString(name[index]);
  };

  const gnomesList = gnomes
    .filter((gnome) =>
      gnome.name.toLowerCase().includes(filterString.toLowerCase())
    )
    .slice(startingNumber, numberOfGnomes)
    .map((gnome) => {
      return (
        <Gnome
          key={gnome.id}
          name={gnome.name}
          clicked={() =>
            selectedGnomeHandler(
              gnome.id,
              gnome.name,
              gnome.thumbnail,
              gnome.age,
              gnome.weight,
              gnome.height,
              gnome.hair_color,
              gnome.professions,
              gnome.friends
            )
          }
        />
      );
    });

  const handleSearch = (text) => {
    setValue(text);
    setFilterString(text);
  };

  return (
    <Grid container>
      {!loading ? (
        <>
          <Grid item xs={12} sm={4}>
            <Filter value={value} onTextChange={handleSearch} />
            <List component="nav" aria-label="secondary mailbox folders">
              {gnomesList}
              <div className={classes.PaginationActions}>
                <Button
                  variant="contained"
                  onClick={handleLessGnomes}
                  disabled={disabled}
                >
                  Back 10
                </Button>
                <Button variant="contained" onClick={handleMoreGnomes}>
                  Next 10
                </Button>
                <p>{`${numberOfGnomes} of ${gnomes.length}`}</p>
              </div>
            </List>
          </Grid>
          <Grid item xs={12} sm={8}>
            <FullGnome
              id={gnomeEntity.selectedGnomeId}
              name={gnomeEntity.selectedGnomeName}
              thumbnail={gnomeEntity.selectedGnomeImg}
              age={gnomeEntity.selectedGnomeAge}
              weight={gnomeEntity.selectedGnomeWeight}
              height={gnomeEntity.selectedGnomeHeight}
              hairColor={gnomeEntity.selectedGnomeHair}
              professions={gnomeEntity.selectedGnomeProfessions}
              friends={gnomeEntity.selectedGnomeFriends}
              handleFriendClick={(name, index) =>
                handleClick(gnomeEntity.selectedGnomeFriends, index)
              }
            />
          </Grid>
        </>
      ) : (
        <div className={classes.LoaderPosition}>
          <BounceLoader size={50} color={'#417505'} loading={loading} />
        </div>
      )}
    </Grid>
  );
};

Gnomes.propTypes = {
  loading: PropTypes.bool,
  gnomes: PropTypes.array,
  onInitGnomes: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    gnomes: state.gnomes.gnomes,
    loading: state.gnomes.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitGnomes: () => dispatch(initGnomes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Gnomes);
