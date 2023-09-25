import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { useAccount, useContractWrite, usePrepareContractWrite } from 'wagmi';
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
import { verseUsernameARConfig } from '../../api/contract';

const Layout = () => {
    const [usernameInput, setUsernameInput] = useState<string>('');
    const [verseUsername, setVerseUsername] = useState<string>('');
    const [ipfsHash, setipfsHash] = useState<string>('');
    const [availability, setAvailability] = useState<boolean | null>(null);
    const [duration, setDuration] = useState<number>(0);

    const { address } = useAccount();

    const chainId = polygon.id.toString();

    const preConfig = useMemo(() => verseUsernameARConfig(usernameInput, address || '', ipfsHash), [usernameInput, address, ipfsHash]);

    console.log('preConfig: ', preConfig)
    const { config } = usePrepareContractWrite(preConfig);
    const { error: wcError, status, writeAsync } = useContractWrite(config);

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

    const createMetadata = useCallback(async () => {
        try {
            console.log("hello");
            if (!availability || !usernameInput || !address) return;
            const res = await uploadMetadata(chainId, usernameInput, address);
            if (!res?.data.length) return;
            setipfsHash( res.data);
            console.log(res?.data);
            mint();
        } catch(e) {
            console.log('error in layout: ', e)
        }
    }, [chainId, usernameInput, address, availability]);

    const mint = useCallback(async () => {
        if (!usernameInput || !address || !ipfsHash || availability !== true) return;
        if (wcError || !writeAsync ) return;
        const txHash = await writeAsync?.();

    }, [usernameInput, address, ipfsHash, availability, writeAsync, wcError]);

    //useEffect to track status of tx


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
                <MintButton
                    label="Mint Username!"
                    createMetadata={createMetadata}
                    disabled={availability !== true}
                />
            </StyledContentBlock>
        </Container>
    );
}

export default Layout;