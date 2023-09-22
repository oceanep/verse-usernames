import React, { FC } from 'react';

import Button from '@bitcoin-portal/verse-web-components/dist/Button';

import {
    ButtonContainer
} from './styled';

interface MintButtonProps {
    label: string;
    disabled?: boolean;
}

const MintButton:FC<MintButtonProps> = ({
    label,
    disabled = false
}) => {
    return (
        <ButtonContainer>
            <Button fullWidth disabled={disabled}>{label}</Button>
        </ButtonContainer>        
    );
}

export default MintButton;