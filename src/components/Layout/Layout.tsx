import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { useAccount, useContractWrite, usePrepareContractWrite } from 'wagmi';
import { polygon } from 'wagmi/chains'

import Nav from '../Nav/Nav';
import Header from '../Header/Header';

import { default as ABI } from '../../contracts/abi_VerseUsernameAR.json';


import { 
  Container,
  StyledContentBlock,
  ButtonContainer,
} from './styled'
import NameInput from '../NameInput/NameInput';
import DurationSelect from '../DurationSelect/DurationSelect';
import MintButton from '../MintButton/MintButton';
import { validateUsername } from '../../utils/utils';
import { getVerseUsername, uploadMetadata, usernameAvailable } from '../../api/verseResolver';
import { verseUsernameARConfig } from '../../api/contract';
import { parseEther } from 'viem';
import Button from '../Button/Button';

const Layout = () => {
    const [usernameInput, setUsernameInput] = useState<string>('');
    const [verseUsername, setVerseUsername] = useState<string>('');
    const [ipfsHash, setipfsHash] = useState<string>('');
    const [txHash, setTxHash] = useState<string>('');
    const [successView, setSuccessView] = useState<boolean>(false);
    const [availability, setAvailability] = useState<boolean | null>(null);
    const [duration, setDuration] = useState<number>(0);

    const { address, isConnecting, isDisconnected } = useAccount();

    const chainId = polygon.id.toString();

    const preConfig = useMemo(() => verseUsernameARConfig(usernameInput, address || '', ipfsHash), [usernameInput, address, ipfsHash]);

    const { config, refetch: refetchPrep } = usePrepareContractWrite({
        address: '0x00B1cbd1D9195EC7b4dd46BA0F942Db2f43917E1' as `0x${string}`,
        abi: ABI,
        functionName: 'register',
        args: [usernameInput, address, ipfsHash],
        value: parseEther('0.001')
    });
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
    }, [address, chainId, txHash]);

    useEffect(() => {
        setAvailability(null);
    }, [usernameInput]);

    useEffect(() => {
        if (!isConnecting && isDisconnected) setVerseUsername('');
    }, [isConnecting, isDisconnected]);

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
            }
        } catch(e) {
            console.log('error in layout: ', e)
        }
    }, [chainId, usernameInput, address, availability]);

    const mint = useCallback(async () => {
        console.log('initiating mint...')
        console.log('checking values: ', usernameInput, address, ipfsHash, availability)
        if (!usernameInput || !address || !ipfsHash || availability !== true) return;
        if (wcError || !writeAsync ) return;
        try {
            console.log('minting...');
            const res = await writeAsync?.();
            setTxHash(res?.hash || '');
        } catch(e) {
            console.log('transaction error: ', e)
            await refetchPrep?.()
        }
    }, [usernameInput, address, ipfsHash, availability, writeAsync, refetchPrep, wcError]);

    useEffect(() => {
        if (ipfsHash.length) mint();
    }, [ipfsHash, mint]);

    //useEffect to track status of tx
   useEffect(() => {
        console.log('tx status: ', status);
        console.log('tx hash: ', txHash);
        if (status === 'success') {
            setSuccessView(true)
            setVerseUsername(usernameInput)
        };
        if (txHash.length) setTxHash(txHash);
    }, [status, txHash, usernameInput]);


    return (
        <Container>
            <Nav/>
            <StyledContentBlock>
                {!(successView) &&
                    <>
                        <Header
                            indentifier={!verseUsername || verseUsername === 'self' ? address: `${verseUsername}@verse`}
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
                            status={status}
                            disabled={availability !== true}
                        />
                        </>
                }
                {successView &&
                    <>
                        <Header
                            indentifier={`${verseUsername}@verse`}
                            success={status === "success"}
                            txHash={txHash}
                        />
                        <ButtonContainer>
                            <Button
                                onClick={() => {
                                    setSuccessView(false);
                                }}
                                design='secondary'
                            >
                                Finish
                            </Button>
                        </ButtonContainer>
                    </>
                }                   
            </StyledContentBlock>
        </Container>
    );
}

export default Layout;