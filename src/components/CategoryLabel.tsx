import React from 'react';
import styled from 'styled-components';
import theme from './Theme/Theme'; 

interface CategoryLabelProps {
  x: number;
  y: number;
  text: string;
  fontSize?: string;
  style?: React.CSSProperties;
}

const StyledText = styled.text`
  fill: ${theme.fontColor};
  font-size: ${(props: { fontSize: any; }) => props.fontSize || theme.fontSize};
  font-family: ${theme.fontFamily};
`;

const CategoryLabel: React.FC<CategoryLabelProps> = ({ x, y, text, fontSize = theme.fontSize }) => {
  return (
    <StyledText x={x} y={y} fontSize={fontSize} textAnchor="middle">
      {text}
    </StyledText>
  );
};

export default CategoryLabel;
