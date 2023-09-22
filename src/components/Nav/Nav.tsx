import React, { FunctionComponent } from 'react';
import verseLogo from '../..//versev3-logo.png';

import {
    NavSection,
    VerseLogoWrapper,
} from './styled';
import ConnectButton from '../ConnectButton';

const Nav: FunctionComponent = () => {

    return (
        <NavSection>
            <VerseLogoWrapper
                src={verseLogo}
                alt="Verse"
                width={140}
                height="auto"
            />
            <ConnectButton/>
        </NavSection>
    );
};

export default Nav;