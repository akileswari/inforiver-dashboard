// XAxisTitle.tsx
import React from 'react';
import styled from 'styled-components';
import theme from './Theme/Theme'; 

const StyledXAxisTitle = styled.text`
  fill: ${theme.fontColor};
  font-size: ${theme.fontSize};
  font-family: ${theme.fontFamily};
  
`;

interface XAxisTitleProps {
  x: number;
  y: number;
  text: string;
  style?: React.CSSProperties;
}

const XAxisTitle: React.FC<XAxisTitleProps> = ({ x, y, text }) => {
  return (
    <StyledXAxisTitle x={x} y={y}>
      {text}
    </StyledXAxisTitle>
  );
};

export default XAxisTitle;
