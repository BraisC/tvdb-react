import { isoCountries } from './isoCountries';

const getCountryName = (countryCode) => {
  if (isoCountries[countryCode]) {
    return isoCountries[countryCode];
  }
  return countryCode;
};

const generateTitle = (show) => (show.year ? `${show.name} (${show.year})` : show.name);

const limitTextLength = (title, limit = 20) => {
  const newTitle = [];

  if (title.length > limit) {
    title.split(' ').reduce((accumulator, currentValue) => {
      if (accumulator + currentValue.length + 1 <= limit) {
        newTitle.push(currentValue);
        newTitle.push(' ');
      }
      return accumulator + currentValue.length + 1;
    }, 0);

    return `${newTitle.join('')}...`;
  }

  return title;
};

const utils = {
  generateTitle,
  limitTextLength,
  getCountryName,
};

export default utils;
