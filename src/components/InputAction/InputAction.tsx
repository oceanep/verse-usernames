import React, { FunctionComponent, ReactNode } from 'react';
import {
  InputWrapper,
  InputStyle,
  ActionWrapper,
  ErrorMessage,
} from './styled';

interface Props {
  /** Action to include */
  action?: ReactNode;

  /** error message */
  error?: string;

  /** placeholder text */
  placeholder?: string;

  /** specify type of input (e.g. email, number, etc) */
  type?: string;

  /** set to input value to state */
  value?: string;

  /** callback for onChange event */
  onChange?: (e: any) => void;

  /** Icon to include */
  icon?: ReactNode;

  /** disabl input */
  disabled?: boolean;

  /** small text */
  small?: boolean;

  [any: string]: unknown;
}

/**
 * Input element with optional action label
 */
const Input: FunctionComponent<Props> = ({
  action,
  error,
  placeholder,
  type,
  value,
  onChange,
  icon,
  disabled = false,
  small = false,
  ...rest
}) => (
  <>
    <InputWrapper
      error={typeof error !== 'undefined'}
      disabled={disabled}
      {...rest}
    >
      <InputStyle
        placeholder={placeholder}
        type={type}
        value={value}
        hasIcon={icon !== undefined}
        onChange={onChange}
        disabled={disabled}
        small={small}
      />
      {icon && icon}
      {action && <ActionWrapper>{action}</ActionWrapper>}
    </InputWrapper>
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </>
);

export default Input;