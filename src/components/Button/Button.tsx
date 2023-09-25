import React, { FunctionComponent } from 'react';
import {
  ButtonPrimary,
  ButtonSecondary,
  ButtonFlat,
  ButtonClear,
} from './styled';

export interface Props {
  design?: 'primary' | 'secondary' | 'flat' | 'clear';
  fullWidth?: boolean;
  small?: boolean;
  disabled?: boolean;
  [any: string]: any;
}

/**
 * Styled Button component
 */
const Button: FunctionComponent<Props> = ({
  design,
  disabled,
  fullWidth = false,
  small = false,
  ...rest
}) => {
  const buttonProps = {
    design,
    disabled,
    fullWidth,
    small,
  };

  switch (design) {
    case 'primary':
      return <ButtonPrimary {...buttonProps} {...rest} />;
    case 'secondary':
      return <ButtonSecondary {...buttonProps} {...rest} />;
    case 'flat':
      return <ButtonFlat {...buttonProps} {...rest} />;
    case 'clear':
      return <ButtonClear {...buttonProps} {...rest} />;
    default:
      return <ButtonPrimary {...buttonProps} {...rest} />;
  }
};

export default Button;
