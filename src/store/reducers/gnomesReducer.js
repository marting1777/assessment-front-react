import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  gnomes: [],
  loading: false,
  error: null,
};

const fetchGnomesStart = (state, action) => {
  return updateObject(state, {
    loading: true,
    error: null,
  });
};

const fetchGnomesSuccess = (state, action) => {
  return updateObject(state, {
    gnomes: action.gnomes,
    loading: false,
    error: null,
  });
};

const fetchGnomesFailed = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error,
  });
};

const gnomesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GNOMES_START:
      return fetchGnomesStart(state, action);
    case actionTypes.FETCH_GNOMES_SUCCESS:
      return fetchGnomesSuccess(state, action);
    case actionTypes.FETCH_GNOMES_FAILED:
      return fetchGnomesFailed(state, action);
    default:
      return state;
  }
};

export default gnomesReducer;
