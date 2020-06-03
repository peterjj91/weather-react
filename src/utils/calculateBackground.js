import { colors } from './colors';
import { temperatureType } from './temperature';

export const calculateBackground = (temp) => {
  const isHot = temp >= temperatureType.hot;
  const isCool = temp <= temperatureType.hot && temp >= temperatureType.cool;
  const isColdly = temp >= temperatureType.coldly;

  const result = isHot
    ? colors.hot
    : isCool
    ? colors.cool
    : isColdly
    ? colors.coldly
    : '';

  return result;
};
