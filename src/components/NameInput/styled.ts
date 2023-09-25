import styled, { css } from 'styled-components';
import { colors } from '../../utils/colors';

export const InputContainer = styled.div<{available:boolean}>`
    ${({ available, theme }) => css`
        width: 100%;
        margin-top: 30px;

        & > div {
            ${ available && css`
                border: ${theme.border.style} ${colors.green100} ${theme.important}; 
            `}
        }
    `}
    
`;