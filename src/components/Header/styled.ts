import styled from 'styled-components';
import { colors } from '../../utils/colors';


export const HeaderContainer = styled.div`
    width: '100%';
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: ${colors.white};
`;

export const H2 = styled.h2`
    font-size: 32px;
    font-weight: bold; 
`;

export const Title = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: ${colors.offWhite};
`;

export const SuccessText = styled(Title)`
    line-break: anywhere;
    text-align: center;
    padding: 20px 0px; 
`;