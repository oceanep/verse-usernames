import React from 'react';
import WcModal from './components/WcModal';

import { 
  Container,
  StyledContentBlock
} from './styled'
import Nav from './components/Nav/Nav';

function App() {
  return (
    <Container>
      <Nav/>
      <StyledContentBlock>
        <WcModal/>
      </StyledContentBlock>
    </Container>
  );
}

export default App;
