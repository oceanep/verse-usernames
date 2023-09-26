import React, { FC, useCallback } from 'react';

import Button from '../Button';

import {
    ButtonContainer
} from './styled';

interface MintButtonProps {
    label: string;
    createMetadata: () => Promise<string> | undefined;
    mint: () => void;
    refetch: () => void;
    disabled?: boolean;
}

const MintButton:FC<MintButtonProps> = ({
    label,
    createMetadata,
    mint,
    refetch,
    disabled = false
}) => {

    const mintUsername = useCallback(async () => {
        await createMetadata();
        await mint();
    }, [createMetadata, mint]);

    return (
        <ButtonContainer>
            <Button
                fullWidth
                design='primary'
                disabled={disabled}
                onClick={mintUsername}
            >
                {label}
            </Button>
        </ButtonContainer>        
    );
}

export default MintButton;