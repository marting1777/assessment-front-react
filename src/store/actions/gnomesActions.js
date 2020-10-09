import axios from 'axios';
import * as actionTypes from './actionTypes';

export const fetchGnomesStart = () => {
  return {
    type: actionTypes.FETCH_GNOMES_START,
  };
};

export const fetchGnomesSuccess = (gnomes) => {
  return {
    type: actionTypes.FETCH_GNOMES_SUCCESS,
    gnomes,
  };
};

export const fetchGnomesFailed = (error) => {
  return {
    type: actionTypes.FETCH_GNOMES_FAILED,
    error,
  };
};

export const initGnomes = () => {
  return (dispatch) => {
    dispatch(fetchGnomesStart());
    axios
      .get(
        'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'
      )
      .then((res) => {
        const gnomesList = res.data.Brastlewark;
        const updatedGnomes = gnomesList.map((gnome) => {
          return {
            ...gnome,
            ...gnome.professions.map((p) => p),
            ...gnome.friends.map((f) => f),
          };
        });
        dispatch(fetchGnomesSuccess(updatedGnomes));
      })
      .catch((error) => dispatch(fetchGnomesFailed(error)));
  };
};
