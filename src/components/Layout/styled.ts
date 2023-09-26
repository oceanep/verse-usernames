import styled, { css } from 'styled-components';
import { media } from '../../utils/breakpoints';
import { Verse, tabletBreakpoints, media as screenMedia } from '../../utils/media';
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
    ${({ theme }) => css`
        width: 100%;
        border-color: ${theme.palette.border.default};
        box-sizing: border-box;
        position: relative;

        min-height: calc(100vh - 160px);
        border-bottom: 0px;
        border-right: 0px;
        border-left: 0px;
        border-radius: 0px;

        ${media.sm`
            min-height: unset;
            margin-bottom: 50px;
            border-width: 2px;
            border-radius: 24px;
            padding: 40px;
        `}

        @media(min-width: ${tabletBreakpoints.xlarge}) {
            max-width: ${screenMedia.medium};
            border-color: ${theme.palette.border.default};
            border: 1px solid ${colors.shade50};
            /* CardShadow */
            box-shadow: ${Verse.glowLight};
        }
    `}
`;

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;