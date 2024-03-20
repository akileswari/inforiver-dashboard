import React from 'react';
import TemplatePreview from './TemplatePreview';
import TemplateToolbar from './TemplateToolbar';
import { divHeight, divWidth, minHeight, minWidth } from '../constant/Helper';

const TemplateWrapper: React.FC = () => {
  const fHeight = divHeight - minHeight;
  const fWidth = divWidth - minWidth;

  return (
    <div className="template-wrapper" style={{ height: `${divHeight}px`, width: `${divWidth}px` }}>
      {/* <TemplateToolbar /> */}
      {/* <TemplatePreview svgWidth={fWidth} svgHeight={fHeight} /> */}
    </div>
  );
}

export default TemplateWrapper;
