import CallApi from '../../api/api';
import * as types from './weather.types';

export const fetchCityByLattlong = ({ latitude, longitude }) => (dispatch) => {
  dispatch(loadingStart());
  dispatch({ type: types.FETCH_REQUEST_CITY });

  CallApi.get(`/search/?`, {
    params: { lattlong: `${latitude},${longitude}` },
  })
    .then((cities) => CallApi.get(`/${cities[0]?.woeid}`))
    .then((city) => {
      dispatch(updateCity({ city }));
      dispatch(loadingEnd());
    })
    .catch((error) => {
      dispatch({
        type: types.FETCH_ERROR_CITY,
        payload: error,
      });
      dispatch(loadingEnd());
    });
};

export const fetchCityByName = ({ name }) => (dispatch) => {
  dispatch(loadingStart());
  dispatch({ type: types.FETCH_REQUEST_CITY });

  CallApi.get(`/search/?`, {
    params: { query: `${name}` },
  })
    .then((city) => {
      dispatch(updateCity({ city }));
      dispatch(loadingEnd());
    })
    .catch((error) => {
      dispatch({
        type: types.FETCH_ERROR_CITY,
        payload: error,
      });
      dispatch(loadingEnd());
    });
};

export const fetchCityWoeid = ({ city }) => {
  return {
    type: types.FETCH_SUCCESS_CITY,
    payload: { city },
  };
};

export const updateCity = ({ city }) => {
  return {
    type: types.FETCH_SUCCESS_CITY,
    payload: city,
  };
};

export const updateError = () => {
  return {
    type: types.ERROR,
  };
};

export const loadingStart = () => {
  return {
    type: types.LOADING_START,
  };
};

export const loadingEnd = () => {
  return {
    type: types.LOADING_END,
  };
};
