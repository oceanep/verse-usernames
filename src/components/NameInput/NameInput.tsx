import React, { Dispatch, FC, SetStateAction, useMemo } from 'react';

import InputAction from '@bitcoin-portal/verse-web-components/dist/InputAction';
import Button from '@bitcoin-portal/verse-web-components/dist/Button';

import {
    InputContainer
} from './styled'

interface NameInputProps {
    input: string;
    setInput: Dispatch<SetStateAction<string>>;
    valid: boolean;
    available?: boolean;
}

const NameInput:FC<NameInputProps> = ({
    input,
    setInput,
    valid,
    available = true
}) => {

    const errorType = useMemo(() => {
        if (!valid) return 'Invalid username format';
        if (!available) return 'Username not available';
        return undefined;
    }, [valid, available]);

    return (
        <InputContainer>
            <InputAction
                placeholder='username@verse'
                value={input || ''}
                onChange={(e) => setInput(e.target.value)}
                error={errorType}
                action={
                    <Button
                        disabled={!valid}
                    >
                        Check
                    </Button>
                }
            />
        </InputContainer>
    )
};

export default NameInput;