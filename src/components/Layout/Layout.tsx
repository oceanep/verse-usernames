import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { useAccount, useContractWrite, usePrepareContractWrite } from 'wagmi';
import { polygon } from 'wagmi/chains'

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
import { getVerseUsername, uploadMetadata, usernameAvailable } from '../../api/verseResolver';
import { verseUsernameARConfig } from '../../api/contract';

const Layout = () => {
    const [usernameInput, setUsernameInput] = useState<string>('');
    const [verseUsername, setVerseUsername] = useState<string>('');
    const [ipfsHash, setipfsHash] = useState<string>('');
    const [txHash, setTxHash] = useState<string>('');
    const [availability, setAvailability] = useState<boolean | null>(null);
    const [duration, setDuration] = useState<number>(0);

    const { address } = useAccount();

    const chainId = polygon.id.toString();

    const preConfig = useMemo(() => verseUsernameARConfig(usernameInput, address || '', ipfsHash), [usernameInput, address, ipfsHash]);

    const { config, refetch: refetchPrep } = usePrepareContractWrite({...preConfig});
    const { error: wcError, status, writeAsync } = useContractWrite(config);

    const validName = useMemo(() => usernameInput.length ? validateUsername(usernameInput) : true, [usernameInput]);

    useEffect(() => {
        const checkForUsername = async () => {
            try {
                if (!address) return;
                const res = await getVerseUsername(chainId, address);

                setVerseUsername(res?.data || '');
            } catch(e) {
                console.log('error in layout: ', e);
            };
        };

        if (address && chainId) checkForUsername();
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
            if (!availability || !usernameInput || !address) return;
            const res = await uploadMetadata(chainId, usernameInput, address);

            if (res?.data.length) {
                setipfsHash(res.data);
                console.log('ipfs hash: ', res.data)
                return res.data;
            }
        } catch(e) {
            console.log('error in layout: ', e)
        }
    }, [chainId, usernameInput, address, availability]);

    const mint = useCallback(async () => {
        if (!usernameInput || !address || !ipfsHash || availability !== true) return;
        if (wcError || !writeAsync ) return;
        try {
            const res = await writeAsync?.();
            setTxHash(res?.hash || '');
        } catch(e) {
            console.log('transaction error: ', e)
            await refetchPrep?.()
        }
    }, [usernameInput, address, ipfsHash, availability, writeAsync, refetchPrep, wcError]);

    //useEffect to track status of tx
   useEffect(() => {
        console.log('tx status: ', status);
        console.log('tx hash: ', txHash);
    }, [status, txHash]);


    return (
        <Container>
            <Nav/>
            <StyledContentBlock>
                <Header
                    indentifier={!verseUsername || verseUsername === 'self' ? address: verseUsername}
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
                    mint={mint}
                    refetch={refetchPrep}
                    disabled={availability !== true}
                />
            </StyledContentBlock>
        </Container>
    );
}

export default Layout;