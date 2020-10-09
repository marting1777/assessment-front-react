import { combineReducers } from 'redux';
import gnomesReducer from './gnomesReducer';

const initialState = {};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  main: mainReducer,
  gnomes: gnomesReducer,
});

export default rootReducer;
