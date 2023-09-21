import styled from 'styled-components';
import { colors } from '@bitcoin-portal/verse-web-components/dist/themes/colors';

export const NavSection = styled.div`
  grid-area: header;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 3;
  background-color: ${colors.shade20};
  border-bottom: 1px solid ${colors.shade40};
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
`;

export const VerseLogoWrapper = styled.img`
    display: block;
    margin-right: 5px;
`;