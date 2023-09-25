import styled from 'styled-components';
import { reset, ResetProps } from '../../utils/typography';

/**
 * Styled title element
 */
const Title = styled.div<ResetProps>`
  ${reset}

  font-size: 16px;
  font-weight: 600;
`;

export default Title;
