import React, { Dispatch, FC, SetStateAction } from 'react';

import InputAction from '@bitcoin-portal/verse-web-components/dist/InputAction';
import Button from '@bitcoin-portal/verse-web-components/dist/Button';

import {
    InputContainer
} from './styled'

interface NameInputProps {
    input?: string;
    setInput: Dispatch<SetStateAction<string>>;
    available?: boolean;
}

const NameInput:FC<NameInputProps> = ({
    input,
    setInput,
    available = true
}) => {

    return (
        <InputContainer>
            <InputAction
                placeholder='username@verse'
                value={input || ''}
                onChange={(e) => setInput(e.target.value)}
                error={!available ? 'Username not available' : undefined}
                action={<Button>Check</Button>}
            />
        </InputContainer>
    )
};

export default NameInput;