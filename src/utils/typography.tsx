import { css } from 'styled-components';

export type FontWeight = 'normal' | 'medium' | 'semibold' | 'bold';

export type ResetProps = {
  /** Secondary color value */
  secondary?: boolean;
  /** Font weight */
  weight?: FontWeight;
  /** White space line break nowrap behaviour */
  nowrap?: boolean;
  /** adds ellipsis overflow to text */
  ellipsis?: boolean;
};

export const reset = css<ResetProps>`
  padding: 0;
  margin: 0;
  color: ${({ secondary, theme }) =>
    secondary ? theme.palette.text.secondary : theme.palette.text.default};

  ${({ weight }) => {
    switch (weight) {
      case 'bold':
        return css`
          font-weight: 700;
        `;
      case 'semibold':
        return css`
          font-weight: 600;
        `;
      case 'medium':
        return css`
          font-weight: 500;
        `;
      case 'normal':
        return css`
          font-weight: 400;
        `;
      default:
        return ``;
    }
  }}
`;