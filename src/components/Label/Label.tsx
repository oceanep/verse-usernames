import styled, { css } from 'styled-components';
import { reset, ResetProps } from '../../utils/typography';

/**
 * Styled label element (not `<label>`)
 */
const Label = styled.div<{ small?: boolean } & ResetProps>`
  ${reset}

  font-weight: 600;

  ${({ small }) =>
    small
      ? css`
          font-size: 12px;
        `
      : css`
          font-size: 14px;
        `}
`;

export default Label;
