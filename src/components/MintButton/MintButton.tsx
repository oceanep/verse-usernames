import React, { FC, useCallback } from 'react';

import Button from '../Button';

import {
    ButtonContainer
} from './styled';
import Loader from '../Loader';

interface MintButtonProps {
    label: string;
    createMetadata: () => void;
    status?: string;
    disabled?: boolean;
}

const MintButton:FC<MintButtonProps> = ({
    label,
    createMetadata,
    status,
    disabled = false
}) => {

    const mintUsername = useCallback(async () => {
        await createMetadata();
    }, [createMetadata]);

    return (
        <ButtonContainer>
            <Button
                fullWidth
                design='primary'
                disabled={disabled}
                onClick={mintUsername}
            >
                {status === "loading" && <Loader/>}
                {status === "error" && 'Mint Failed'}
                {(status !== "loading" && status !== "error") && label}
            </Button>
        </ButtonContainer>        
    );
}

export default MintButton;