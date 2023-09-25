import styled from 'styled-components';
import { media } from '../../utils/breakpoints';
import { Verse } from '../../utils/media';
import { colors } from '../../utils/colors';


export const Container = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    min-height: 100vh;;
    margin: auto;
    margin-top: 20px;
    font-weight: 500;
    background-color: ${colors.shade10};

    .hidden {
        display: none;
    }

    ${media.sm`
        flex-direction: column;
        width: auto;
    `}
`;

export const StyledContentBlock = styled.div`
    width: 100%;
    border-style: solid;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    padding: 40px;
    max-width: 600px;

    box-shadow: ${Verse.glowLight};
    background-color: ${Verse.bgDark};
    border-color: ${Verse.border};
    border-radius: 40px;
`;