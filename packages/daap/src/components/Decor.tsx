import styled from 'styled-components';

// Styles
import { colors } from '../styles';

// Icons
import VectorDownSvg from '../assets/VectorDown.svg'

export const GreenLine = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
  border: 1px solid rgba(${colors.green},0.3);
`;

export interface VectorDownProps {
  height?: string | number;
}

export const VectorDown = styled.div`
  display: flex;
  flex-direction: row;
  height: ${({ height }: VectorDownProps) => (
    height
      ? `${height}px`
      : '40px'
  )};
  background-image: url(${VectorDownSvg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 14px 23px;
`;
