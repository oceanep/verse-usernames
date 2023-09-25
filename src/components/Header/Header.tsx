import React, { FC } from 'react';

import {
    HeaderContainer,
    H2
} from './styled'

interface HeaderProps {
  indentifier?: string;  
}

const Header:FC<HeaderProps> = ({
}) => {
    
    return (
        <HeaderContainer>
            <H2>
                @Verse Usernames
            </H2>
            <p>
                Unlock your digital identity and seize your unique @verse username here. Just choose an username, select a term and hit that “Mint Username” button.
            </p>
        </HeaderContainer>
    )
}

export default Header;