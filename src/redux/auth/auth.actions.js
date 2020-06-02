import CallApi from '../../api/api';
import * as types from './auth.types';

export const fetchCities = ({ location }) => (dispatch) => {
  dispatch({
    type: types.FETCH_REQUEST_CITIES,
  });
  // body
};

// export const askLocation = ({ answer }) => {
//   dispatch({
//     type: types.ASK_LOCATION,
//   });
// };

export function askLocation(answer) {
  return {
    type: types.ASK_LOCATION,
    payload: answer,
  };
}
