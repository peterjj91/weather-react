import * as types from './auth.types';
import { LOCATION } from '../../utils/constant';

const initialState = {
  location: localStorage.getItem(LOCATION),
  cities: [],
  loadingCities: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case types.ASK_LOCATION_ACCEPT:
      return {
        ...state,
        location: action.payload.location,
      };
    case types.UPDATE_CITIES:
      return {
        ...state,
        cities: action.payload,
      };
    case types.LOADING_START_CITIES:
      return { ...state, loadingCities: true };
    case types.LOADING_END_CITIES:
      return { ...state, loadingCities: false };
    default:
      return state;
  }
};

export default auth;
