import React, { FC } from 'react';

import {
    HeaderContainer,
    H2,
    Title,
    SuccessText
} from './styled'

interface HeaderProps {
  indentifier?: string;  
  success?: boolean;
  txHash?: string;
}

const Header:FC<HeaderProps> = ({
    indentifier = 'user',
    success,
    txHash
}) => {
    
    return (
        <HeaderContainer>
            <H2>
                {!success 
                    ? '@Verse Usernames' 
                    : 'Congratulations on Minting!'
                }
            </H2>
            <Title
            >
                {!success
                    ? `Welcome, ${indentifier}`
                    : `Your @verse username is ${indentifier}`
                }
            </Title>
            {txHash?.length 
                && <SuccessText>Your transaction hash is <b>{txHash}</b></SuccessText>
            }
        </HeaderContainer>
    )
}

export default Header;