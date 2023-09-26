import React, { FC } from 'react';

import {
    HeaderContainer,
    H2,
    Title
} from './styled'

interface HeaderProps {
  indentifier?: string;  
}

const Header:FC<HeaderProps> = ({
    indentifier = 'user'
}) => {
    
    return (
        <HeaderContainer>
            <H2>
                @Verse Usernames
            </H2>
            <Title>
                {`Welcome, ${indentifier}`}
            </Title>
        </HeaderContainer>
    )
}

export default Header;