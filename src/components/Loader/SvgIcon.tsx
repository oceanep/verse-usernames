import React, {
    FunctionComponent,
    ReactElement,
    ReactNode,
    useState,
  } from 'react';
  import styled from 'styled-components';
  import { v4 as uuidv4 } from 'uuid';
  
  const Svg = styled.svg`
    /* enable-background: new 0 0 500 500; */
    isolation: isolate;
  `;
  
  interface Props {
    size?: number;
    primary?: boolean;
    [any: string]: ReactNode;
  }
  
  const reduceToPrimary = (children: ReactElement, name: string): ReactNode => {
    if (typeof children === 'undefined') return children;
    return React.Children.map(children, child => {
      const clonedChild = React.cloneElement(child, {
        ...child.props,
        children: child.props.children
          ? reduceToPrimary(child.props.children, name)
          : undefined,
        fill:
          child.props.fill === 'currentColor'
            ? `url(#${name})`
            : child.props.fill,
        stroke:
          child.props.stroke === 'currentColor'
            ? `url(#${name})`
            : child.props.stroke,
      });
  
      return clonedChild;
    });
  };
  
  const SvgIcon: FunctionComponent<Props> = ({
    primary = false,
    children,
    size = 20,
    ...rest
  }) => {
    const [name] = useState(uuidv4());
  
    const updatedChildren = primary
      ? reduceToPrimary(children as ReactElement, name)
      : children;
  
    return (
      <Svg
        aria-hidden="true"
        focusable="false"
        role="img"
        height={size}
        width={size}
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        {primary && (
          <defs>
            <pattern
              id={name}
              patternUnits="userSpaceOnUse"
              width="100%"
              height="100%"
            >
              <image
                href="https://menu.cdn.bitcoindotcom.net/uni/dist/assets/images/fill.png"
                x="0"
                y="0"
                width="100%"
                height="100%"
              />
            </pattern>
          </defs>
        )}
        {updatedChildren}
      </Svg>
    );
  };
  
  export default SvgIcon;
  