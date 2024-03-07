import React from 'react';
import styled from 'styled-components';
import theme from '../Theme/Theme'; 

interface DataLabelProps {
  x: number;
  y: number;
  value: number;
  fontSize?: string;
  positive?: boolean;
  style?: React.CSSProperties;
}

const StyledText = styled.text<DataLabelProps>`
  fill: ${(props) => (props.positive ? 'green' : 'red')};
  font-size: ${(props) => props.fontSize || theme.fontSize};
  font-family: ${theme.fontFamily};
`;

const DataLabel: React.FC<DataLabelProps> = ({ x, y, value, fontSize = theme.fontSize, positive = true }) => {
  return (
    <StyledText x={x} y={y} fontSize={fontSize} positive={positive} textAnchor="middle">
      {value}
    </StyledText>
  );
};

export default DataLabel;
