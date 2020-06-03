import * as types from './weather.types';

const initialState = {
  city: null,
  loading: false,
  error: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case types.ASK_LOCATION_ACCEPT:
      return {
        ...state,
        location: action.payload.location,
      };
    case types.FETCH_SUCCESS_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case types.FETCH_ERROR_CITY:
      return {
        ...state,
        error: action.payload,
      };
    case types.ERROR:
      return { ...state, error: true };
    case types.ERROR_CLEAR:
      return { ...state, error: true };
    case types.LOADING_START:
      return { ...state, loading: true };
    case types.LOADING_END:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default auth;
