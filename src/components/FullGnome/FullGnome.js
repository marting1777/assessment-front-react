import React from 'react';
import PropTypes from 'prop-types';
import classes from './FullGnome.scss';
import Paper from '@material-ui/core/Paper';
import Title from '../Title/Title';

const FullGnome = ({
  id,
  name,
  thumbnail,
  age,
  weight,
  height,
  hairColor,
  professions,
  friends,
  handleFriendClick,
}) => {
  let gnome = null;
  if (id || id === 0) {
    gnome = (
      <Paper className={classes.FullGnomeContainer}>
        <div className={classes.GnomeNameAndAvatar}>
          <div
            className={classes.GnomeAvatar}
            style={{ backgroundImage: `url(${thumbnail})` }}
          ></div>
          <Title text={name} color="#000" alignment="left" />
        </div>
        <div className={classes.GnomeDetails}>
          <div>
            <ul className={classes.ListDetails}>
              <li>
                Age: <strong>{age}</strong>
              </li>
              <li>
                Weight: <strong>{weight.toFixed(2)}</strong>
              </li>
              <li>
                Height: <strong>{height.toFixed(2)}</strong>
              </li>
              <li>
                Hair Color:{' '}
                <strong style={{ color: hairColor }}>{hairColor}</strong>
              </li>
            </ul>
          </div>
          <div>
            <h3>Professions</h3>
            {professions.length > 0 ? (
              <ul>
                {professions.map((p) => {
                  return (
                    <li key={p} className={classes.ListProfessions}>
                      {p}
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p>{name} has no professions!</p>
            )}
          </div>
          <div>
            <h3>Friends</h3>
            {friends.length > 0 ? (
              <ul>
                {friends.map((f, index) => {
                  return (
                    <li
                      onClick={() => handleFriendClick(name, index)}
                      key={f}
                      className={classes.ListFriends}
                    >
                      {f}
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p>{name} has no friends!</p>
            )}
          </div>
        </div>
      </Paper>
    );
  }

  return (
    <>
      {gnome ? (
        gnome
      ) : (
        <p className={classes.MensajeSelect}>
          Select a Gnome to show it's details.
        </p>
      )}
    </>
  );
};

FullGnome.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  thumbnail: PropTypes.string,
  age: PropTypes.number,
  weight: PropTypes.number,
  height: PropTypes.number,
  hairColor: PropTypes.string,
  professions: PropTypes.array,
  friends: PropTypes.array,
  handleFriendClick: PropTypes.func,
};

export default FullGnome;
