// AxisWithLabels.tsx
import React from 'react';
import styled from 'styled-components';
import theme from '../Theme/Theme';

interface DataItem {
  name: string;
  value: number;
}

interface AxisWithLabelsProps {
  data: DataItem[];
  xScale: (value: number) => number;
  y: number;
  axisLength: number;
  fontSize?: string;
}

const StyledText = styled.text<{ fontSize?: string }>`
  fill: ${theme.fontColor};
  font-size: ${({ fontSize }) => fontSize || theme.fontSize};
  font-family: ${theme.fontFamily};
`;

const AxisWithLabels: React.FC<AxisWithLabelsProps> = ({ data, xScale, y, axisLength, fontSize = theme.fontSize }) => {
  return (
    <>
      <line x1={0} y1={y} x2={axisLength} y2={y} stroke="black" />
      
     
      {data.map((item, index) => ( 
        <StyledText
          key={index}
          x={xScale(index)}
          y={y + 20} 
          fontSize={fontSize}
          textAnchor="middle"
        >
          {item.name}
        </StyledText>
      ))}
    </>
  );
};
export default AxisWithLabels;