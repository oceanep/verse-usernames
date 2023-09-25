import styled, { css } from 'styled-components';
import Label from '../Label';
import { colors } from '../../utils/colors';
import verse from '../../utils/verse';

export const InputWrapper = styled.div<{
  error: boolean;
  disabled: boolean;
}>`
  ${({ theme, error, disabled }) => css`
    position: relative;
    display: grid;
    overflow: hidden;

    box-sizing: border-box;
    grid-template-columns: 4fr auto;
    height: 48px;
    align-items: center;
    background: ${verse.palette.input.background.default};
    border: ${theme.border.style}
      ${error
        ? verse.palette.input.border.error
        : verse.palette.input.border.default};
    border-radius: ${theme.border.radius.small};

    & > svg {
      position: absolute;
      color: ${colors.shade70};
      left: 16px;
      top: 16px;
      height: 16px;
      width: 16px;
    }

    ${!disabled &&
    !error &&
    css`
      &:hover {
        background: ${verse.palette.input.background.hover};
        color: ${verse.palette.input.text.hover};
      }

      &:active,
      &:focus-within {
        color: ${verse.palette.input.text.active};
        border: ${verse.border.style} ${verse.palette.input.border.active};
      }
    `}

    ${disabled &&
    css`
      background: ${verse.palette.input.background.disabled};
      border: ${verse.border.style} ${verse.palette.input.border.disabled};
      color: ${verse.palette.input.text.disabled};

      & > svg {
        color: ${colors.shade40};
      }
    `}
  `}
`;

export const InputStyle = styled.input<{
  hasIcon: boolean;
  small: boolean;
}>`
  ${({ theme, hasIcon, small }) => css`
    width: 100%;
    background: transparent;
    border: none;
    color: ${theme.palette.text.default};

    border-radius: ${theme.border.radius.small};
    outline: none;
    padding: ${theme.spacing.unit}px ${theme.spacing.unit * 2}px
      ${theme.spacing.unit}px
      ${hasIcon ? theme.spacing.unit * 6 : theme.spacing.unit * 2}px;

    height: ${theme.spacing.unit * 6}px;
    font-weight: normal;
    box-sizing: border-box;
    font-size: ${small ? '14px' : '16px'};
    font-weight: 600;

    &::placeholder {
      color: ${verse.palette.input.text.hover};
    }

    &::placeholder:disabled {
      color: ${verse.palette.input.text.disabled};
    }
  `}
`;

export const ActionWrapper = styled.div`
  ${({ theme }) => css`
    box-sizing: border-box;
    border: 0px;
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
    padding-right: ${theme.spacing.unit * 1.5}px;

    & > button {
      max-height: ${theme.spacing.unit * 3}px;
      font-size: 12px;
    }
  `}
`;

export const ErrorMessage = styled(Label)`
  width: 100%;
  padding: 4px;
  color: ${colors.red100};
`;
