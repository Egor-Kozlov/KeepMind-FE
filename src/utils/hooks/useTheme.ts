import {useDispatch, useSelector} from 'react-redux';
import {setTheme} from '../../store/slices/theme';
import {RootState} from '../../store/store';
import {COLOR_SCHEME} from '../helpers/constants';

export const useTheme = () => {
  const {theme} = useSelector((state: RootState) => state.theme);
  const themeColors = COLOR_SCHEME[theme || 'dark'];

  const dispatch = useDispatch();
  const onChangeTheme = (theme: 'light' | 'dark') => {
    dispatch(setTheme(theme));
  };

  return {colors: themeColors, theme: theme, onChangeTheme};
};
