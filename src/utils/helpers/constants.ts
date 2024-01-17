const DARK_THEME = {
  background: '#141927',
  button: '#21283F',
  mainText: '#FEFEFE',
  secondaryText: '#EBEBF599',
  paginationActiveDot: '#4870FF',
  paginationInactiveDot: '#21283F',
};

const LIGHT_THEME = {
  background: '#FEFEFE',
  button: '#21283F',
  mainText: '#FEFEFE',
  secondaryText: '#EBEBF599',
  paginationActiveDot: '#4870FF',
  paginationInactiveDot: '#21283F',
};

export const COLOR_SCHEME: Record<'dark' | 'light', typeof DARK_THEME> = {
  dark: DARK_THEME,
  light: LIGHT_THEME,
};
