import {fontFamilies} from '../constants/fonts';

export const getFontFamily = (isLTR: boolean, weight: 'normal' | 'medium') => {
  const selectedFontFamily = fontFamilies.POPPINS;
  return selectedFontFamily[weight];
};
