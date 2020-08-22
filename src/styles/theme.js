const mediaQueries = {
  phoneSmall: `only screen and (max-width: 25em)`,
  phone: `only screen and (max-width: 37.5em)`,
  tab: `only screen and (max-width: 56.25em)`,
  tabLand: `only screen and (max-width: 75.5em)`,
  bigDesktop: `only screen and (min-width: 125em)`,
};

export const lightTheme = {
  primary: '#eeeeee',
  secondary: '#FAFAFA',
  text: '#213038',
  white: '#F4F4F4',
  transparency: 'rgba(244, 244, 244, 0.9)',
  transparencyShow: 'rgba(244, 244, 244, 0.85)',
  mediaQueries,
};

export const darkTheme = {
  primary: '#213038',
  secondary: '#283841',
  text: '#F4F4F4',
  white: '#F4F4F4',
  transparency: 'rgba(33, 48, 56, 0.95)',
  transparencyShow: 'rgba(33, 48, 56, 0.9)',
  mediaQueries,
};
