import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {COLOR_SCHEME} from '../helpers/constants';

export const useTheme = () => {
  const {theme} = useSelector((state: RootState) => state.theme);
  const themeColors = COLOR_SCHEME[theme];

  return {colors: themeColors, theme: theme};
};
