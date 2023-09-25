import { Theme } from './themes';
import { colors } from './colors';
import { primaryBackground, border, spacing, shadows } from './common';

const verse: Theme = {
  palette: {
    text: {
      default: colors.white,
      secondary: colors.shade70,
      hover: colors.verseBlue,
    },
    menu: {
      text: {
        default: colors.white,
        hover: colors.white,
        selected: colors.white,
      },
      icon: {
        default: colors.white,
        selected: colors.primaryBlue100,
      },
    },
    background: {
      default: colors.black,
      secondary: colors.verseNavyBlue,
      tertiary: colors.verseAlmostBlack,
      primary: primaryBackground,
      overlay: 'rgba(0, 0, 0, 0.7)',
      card: colors.shade30,
    },
    border: {
      default: colors.shade50,
      secondary: colors.shade30,
    },
    input: {
      text: {
        default: colors.white,
        hover: colors.shade60,
        active: colors.shade60,
        disabled: colors.shade50,
      },
      background: {
        default: colors.shade10,
        hover: colors.shade10,
        active: colors.shade10,
        disabled: colors.shade20,
      },
      border: {
        default: colors.shade50,
        hover: colors.shade70,
        active: colors.primaryBlue100,
        disabled: colors.shade30,
        error: colors.red100,
      },
    },
    buttons: {
      standard: {
        background: {
          default: '#2D3547',
          hover: '#45516D',
          active: '#2D3547',
          disabled: colors.shade30,
        },
        border: {
          default: '#586B92',
          hover: '#586B92',
          active: '#586B92',
        },
      },
    },
    carousel: {
      indicators: {
        default: colors.shade50,
        active: colors.primaryBlue100,
      },
    },
    hero: {
      icon: {
        default: colors.primaryBlue100,
      },
    },
  },
  border,
  spacing,
  shadows,
};

export default verse;
