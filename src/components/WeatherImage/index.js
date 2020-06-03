import React from 'react';
import { getImageName } from './getImageName';

export const WeatherImage = ({ weather, ...rest }) => {
  getImageName({ name: weather });

  return (
    <img src={`resources/images/${weather}.svg`} alt="weather" {...rest} />
  );
};
