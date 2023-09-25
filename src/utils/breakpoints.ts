import { css, CSSObject, SimpleInterpolation } from 'styled-components';

type Breakpoint = string;

type MediaType = Record<
  Breakpoint,
  (first: TemplateStringsArray | CSSObject, ...interpolations: SimpleInterpolation[]) => SimpleInterpolation
>;

export const breakpoints: Record<Breakpoint, number> = {
  sm: 768,
  md: 1024,
  lg: 1440,
  xl: 1920,
};

export const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (
    first: TemplateStringsArray | CSSObject,
    ...interpolations: SimpleInterpolation[]
  ) => css`
    @media (min-width: ${breakpoints[label] / 16}em) {
      ${css(first, ...interpolations)}
    }
  `;

  return acc;
}, {} as MediaType);

export default breakpoints;
