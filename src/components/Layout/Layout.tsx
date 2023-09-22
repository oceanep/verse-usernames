import React from 'react';

import Nav from '../Nav/Nav';
import Header from '../Header/Header';

import { 
  Container,
  StyledContentBlock
} from './styled'

const Layout = () => {
  return (
    <Container>
      <Nav/>
      <StyledContentBlock>
        <Header/>
      </StyledContentBlock>
    </Container>
  );
}

export default Layout;