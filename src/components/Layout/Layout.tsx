import React, { useMemo, useState } from 'react';

import Button from '@bitcoin-portal/verse-web-components/dist/Button';

import Nav from '../Nav/Nav';
import Header from '../Header/Header';

import { 
  Container,
  StyledContentBlock
} from './styled'
import NameInput from '../NameInput/NameInput';
import DurationSelect from '../DurationSelect/DurationSelect';
import MintButton from '../MintButton/MintButton';
import { validateUsername } from '../../utils/utils';

const Layout = () => {
    const [username, setUsername] = useState<string>('');
    const [available, setAvailable] = useState<boolean>(true);
    const [duration, setDuration] = useState<number>(0);

    const validName = useMemo(() => username.length ? validateUsername(username) : true, [username])

    return (
        <Container>
            <Nav/>
            <StyledContentBlock>
                <Header/>
                <NameInput
                    input={username}
                    setInput={setUsername}
                    available={available}
                    valid={validName}
                />
                <DurationSelect
                    selected={duration}
                    setSelected={setDuration}
                />
                <MintButton label="Mint!"/>
            </StyledContentBlock>
        </Container>
    );
}

export default Layout;