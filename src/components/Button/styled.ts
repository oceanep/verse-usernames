import styled, { css } from 'styled-components';
import { colors } from '../../utils/colors';

interface Props {
  small?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
}

export const commonButtonProps = css<Props>`
  ${({ theme, small, fullWidth, disabled }) => css`
    border: none;
    outline: none;
    box-sizing: border-box;
    padding: 0 ${theme.spacing.unit * 3}px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: ${theme.spacing.unit * 6}px;
    border-radius: ${theme.spacing.unit * 3}px;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 14px;
    text-align: center;
    width: ${fullWidth ? '100%' : 'fit-content'};
    ${small &&
    css`
      font-size: 14px;
      padding: 0 ${theme.spacing.unit}px;
      height: 36px;
      border-radius: ${theme.spacing.unit * 2}px;
    `}
    ${disabled &&
    css`
      &:disabled {
        background: ${colors.shade30};
        color: ${colors.shade50};
        cursor: default;
      }
    `}
  `}
`;

export const ButtonPrimary = styled.button`
  ${commonButtonProps}
  ${({ disabled }) => css`
    color: ${colors.white};
    background: ${colors.gradientPrimary};

    ${!disabled &&
    css`
      &:hover {
        background: ${colors.gradientPrimaryHover};
      }
      &:active {
        background: ${colors.gradientPrimaryActive};
      }
    `}
  `}
`;

export const ButtonSecondary = styled.button`
  ${commonButtonProps}
  ${({ disabled }) => css`
    color: ${colors.white};
    background: ${colors.gradientSecondary};

    ${!disabled &&
    css`
      &:hover {
        background: ${colors.gradientSecondaryHover};
      }
      &:active {
        background: ${colors.gradientSecondaryActive};
      }
    `}
  `}
`;

export const ButtonFlat = styled.button`
  ${commonButtonProps}
  ${({ disabled }) => css`
    color: ${colors.white};
    background: transparent;
    border: 1px solid ${colors.shade50};

    ${!disabled &&
    css`
      &:hover {
        background: ${colors.gradientSecondaryHover};
      }
      &:active {
        background: ${colors.gradientSecondaryActive};
      }
    `}
  `}
`;

export const ButtonClear = styled.button`
  ${commonButtonProps}
  ${({ disabled }) => css`
    color: ${colors.verseBlue};
    background: transparent;
    font-size: 14px;
    font-weight: 600;
    text-align: center;

    ${disabled &&
    css`
      &:disabled {
        background: transparent;
        color: ${colors.shade40};
        cursor: default;
      }
    `}

    ${!disabled &&
    css`
      &:hover {
        color: ${colors.white};
      }

      &:active, :focus-within {
        color: ${colors.shade80}};
      }
    `}
  `}
`;
