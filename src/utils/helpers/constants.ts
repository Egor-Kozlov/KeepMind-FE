const DARK_THEME = {
  background: '#141927',
  button: '#21283F',
  buttonText: '#FEFEFE',
  mainText: '#FEFEFE',
  secondaryText: '#EBEBF599',
  paginationActiveDot: '#4870FF',
  paginationInactiveDot: '#21283F',
  tabIconActive: '#4870FF',
  tabIconInactive: '#e0e0e0',
  tabsBackground: '#21283F',
  setTimerArrow: '#4870FF',
  setTimerArrowDisabled: '#21283F',
};

const LIGHT_THEME = {
  background: '#FEFEFE',
  button: '#4870FF',
  buttonText: '#FEFEFE',
  mainText: '#141927',
  secondaryText: '#21283F',
  paginationActiveDot: '#4870FF',
  paginationInactiveDot: '#21283F',
  tabIconActive: '#4870FF',
  tabIconInactive: '#8E8E93',
  tabsBackground: '#FEFEFE',
  setTimerArrow: '#21283F',
  setTimerArrowDisabled: '#EBEBF599',
};

export const COLOR_SCHEME: Record<'dark' | 'light', typeof DARK_THEME> = {
  dark: DARK_THEME,
  light: LIGHT_THEME,
};
