import React, { FC } from 'react';

import Button from '../Button';

import {
    ButtonContainer
} from './styled';

interface MintButtonProps {
    label: string;
    createMetadata: () => void;
    disabled?: boolean;
}

const MintButton:FC<MintButtonProps> = ({
    label,
    disabled = false
}) => {
    return (
        <ButtonContainer>
            <Button
                fullWidth
                design='secondary'
                disabled={disabled}
            >
                {label}
            </Button>
        </ButtonContainer>        
    );
}

export default MintButton;