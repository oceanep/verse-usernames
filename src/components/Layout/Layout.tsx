import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { useAccount } from 'wagmi';
import { polygon, polygonMumbai } from 'wagmi/chains'

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
import { getUsername, uploadMetadata, usernameAvailable } from '../../api/verseResolver';

const Layout = () => {
    const [usernameInput, setUsernameInput] = useState<string>('');
    const [verseUsername, setVerseUsername] = useState<string>('');
    const [ipfsHash, setipfsHash] = useState<string>('');
    const [availability, setAvailability] = useState<boolean | null>(null);
    const [duration, setDuration] = useState<number>(0);

    const { address } = useAccount();

    const chainId = polygon.id.toString();

    const validName = useMemo(() => usernameInput.length ? validateUsername(usernameInput) : true, [usernameInput]);

    useEffect(() => {
        const checkForUsername = async () => {
            try {
                if (!address) return;
                const res = await getUsername(chainId, address);

                setVerseUsername(res?.data || '');
            } catch(e) {
                console.log('error in layout: ', e);
            };
        };

        checkForUsername();
    }, [address, chainId]);

    useEffect(() => {
        setAvailability(null);
    }, [usernameInput]);

    const checkAvailability = useCallback(async (username:string) => {
        try {
            if (!username) return;
            const res = await usernameAvailable(chainId, username);
            setAvailability(
                    res?.data.length ? false : true
                );
        } catch(e) {
            console.log('error in layout: ', e);
        };
    }, [chainId]);

    return (
        <Container>
            <Nav/>
            <StyledContentBlock>
                <Header
                    indentifier={verseUsername || address}
                />
                <NameInput
                    input={usernameInput}
                    setInput={setUsernameInput}
                    available={availability}
                    checkAvailability={checkAvailability}
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