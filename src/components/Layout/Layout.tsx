import React, { useState } from 'react';

import Nav from '../Nav/Nav';
import Header from '../Header/Header';

import { 
  Container,
  StyledContentBlock
} from './styled'
import NameInput from '../NameInput/NameInput';

const Layout = () => {
    const [username, setUsername] = useState<string>('');
    const [available, setAvailable] = useState<boolean>(true);

    return (
        <Container>
            <Nav/>
            <StyledContentBlock>
            <Header/>
            <NameInput
                input={username}
                setInput={setUsername}
                available={available}
            />
            </StyledContentBlock>
        </Container>
    );
}

export default Layout;