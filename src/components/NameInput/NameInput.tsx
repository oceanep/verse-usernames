import React, { Dispatch, FC, SetStateAction, useMemo } from 'react';

import InputAction from '../InputAction';
import Button from '../Button';

import {
    InputContainer
} from './styled'

interface NameInputProps {
    input: string;
    setInput: Dispatch<SetStateAction<string>>;
    valid: boolean;
    checkAvailability: (username:string) => void;
    available?: boolean | null;
}

const NameInput:FC<NameInputProps> = ({
    input,
    setInput,
    valid,
    checkAvailability,
    available
}) => {

    const errorType = useMemo(() => {
        if (!valid) return 'Invalid username format';
        if (available === false) return 'Username not available';
        return undefined;
    }, [valid, available]);

    //If available give some UI feedback
    return (
        <InputContainer
            available={available || false}
        >
            <InputAction
                placeholder='username@verse'
                value={input || ''}
                onChange={(e) => setInput(e.target.value)}
                error={errorType}
                action={
                    <Button
                        disabled={!valid}
                        onClick={() => checkAvailability(input)}
                    >
                        Check
                    </Button>
                }
            />
        </InputContainer>
    )
};

export default NameInput;