import isoCountries from './isoCountries';

const getCountryName = (countryCode) => {
  if (isoCountries[countryCode]) {
    return isoCountries[countryCode];
  }
  return countryCode;
};

const generateTitle = (show) => (show.year ? `${show.name} (${show.year})` : show.name);

const limitTextLength = (title, limit = 18) => {
  const newTitle = [];

  if (title.length > limit) {
    title.split(' ').reduce((accumulator, currentValue) => {
      if (accumulator + currentValue.length < limit) {
        newTitle.push(currentValue);
      }
      return accumulator + currentValue.length;
    }, 0);

    if (newTitle.join(' ').length === title.length) {
      return newTitle.join(' ');
    }
    return `${newTitle.join(' ')} ...`;
  }

  return title;
};

const utils = {
  generateTitle,
  limitTextLength,
  getCountryName,
};

export default utils;
