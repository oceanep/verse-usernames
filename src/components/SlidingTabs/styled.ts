import styled, { css } from 'styled-components';
import { colors } from '../../utils/colors';
import { media } from '../../utils/breakpoints';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Tabs = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  padding: 3px;
  border-radius: 12px;
  border: 1px solid ${colors.shade50};
`;

export const Tab = styled.button<{
  idx: number;
  count: number;
  selected?: boolean;
}>`
  ${({ idx = 0, count = 1 }) => css`
    cursor: pointer;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 600;
    background-color: transparent;
    color: ${colors.shade70};
    height: 36px;
    width: ${100 / count}%;
    border: none;
    border-radius: 12px;
    z-index: 2;

    &.selected {
      color: ${colors.white};
      & ~ .slider {
        transform: translateX(${idx * 100}%);
      }
    }
  `}
`;

export const Slider = styled.span<{
  count: number;
}>`
  ${({ count = 1 }) => css`
    position: absolute;
    display: flex;
    height: 36px;
    width: calc(${100 / count}% - 3px);
    border-radius: 12px;
    background: linear-gradient(180deg, #425472 0%, #313e57 100%);
    transition: 0.3s ease-out;
    z-index: 1;
  `}
`;

export const NewBadge = styled.div`
  display: none;
  background-color: ${colors.primaryBlue100};
  margin-left: 12px;
  padding: 4px;
  text-transform: uppercase;
  color: white;
  font-size: 12px;
  border-radius: 3px;
  ${media.md`
    display: block;
  `}
`;
