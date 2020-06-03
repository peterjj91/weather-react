import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppSpinner } from '../UI/AppSpinner';
import { Search } from '../Search';
import styles from './styles.module.scss';
import { WeatherImage } from '../WeatherImage';
import { usePosition } from '../../utils/hooks';
import { calculateBackground } from '../../utils/calculateBackground';
import {
  fetchCityByLattlong,
  updateError,
  fetchCityByName,
} from '../../redux/weather/weather.actions';

function App() {
  const dispatch = useDispatch();
  const { latitude, longitude, error } = usePosition();
  const state = useSelector((state) => state.weather);
  const [temperature, setTemperature] = useState('');
  const [query, setQuery] = useState('');

  console.log(state.city?.length);

  useEffect(() => {
    if (latitude && longitude) {
      dispatch(fetchCityByLattlong({ latitude, longitude }));
    } else {
      dispatch(updateError());
    }
  }, [latitude, longitude, dispatch]);

  useEffect(() => {
    if (state.city?.length) {
      console.log('city', state.city?.length);
      const temp = state.city?.consolidated_weather[0]?.the_temp;
      setTemperature(Math.floor(temp));
    }
  }, [state.city, setTemperature]);

  // useEffect(() => {
  //   dispatch(fetchCityByName(query));
  // }, [query]);

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundColor: calculateBackground(temperature) }}
    >
      <Search onChange={setQuery} />

      <div className={styles.inner}>
        {state.loading ? (
          <AppSpinner
            animation="border"
            variant="primary"
            className={styles.spinner}
          />
        ) : error && !state.city ? (
          <img
            src="/resources/images/close.svg"
            alt="error"
            style={{ width: 120 }}
          />
        ) : (
          <WeatherImage
            weather={state.city?.consolidated_weather[0].weather_state_abbr}
            className={styles.weatherIcon}
          />
        )}
      </div>
    </div>
  );
}

export default App;
