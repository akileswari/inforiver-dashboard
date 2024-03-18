<<<<<<< HEAD
import React from 'react';
import TemplatePreview from './TemplatePreview';
import TemplateToolbar from './TemplateToolbar';
import { divHeight, divWidth, minHeight, minWidth } from '../constant/Helper';
=======
import TemplatePreview from "./TemplatePreview";
import TemplateToolbar from "./TemplateToolbar";
import {
  divHeight,
  divWidth,
  minHeight,
  minWidth,
} from "../components/constant/Helper";

const TemplateWrapper = () => {
  // console.log(document.getElementsByClassName("template-toolbar"));

  // console.log(eWidth);
>>>>>>> 6e7eb559bacbe37b62f310448ab0e11887778710

const TemplateWrapper: React.FC = () => {
  const fHeight = divHeight - minHeight;
  const fWidth = divWidth - minWidth;

  return (
<<<<<<< HEAD
    <div className="template-wrapper" style={{ height: `${divHeight}px`, width: `${divWidth}px` }}>
=======
    <div
      className="template-wrapper"
      // style={{ height: `${divHeight}px`, width: `${divWidth}px` }}
      // style={{ height: '100%', width: '100%' }}
    >
>>>>>>> 6e7eb559bacbe37b62f310448ab0e11887778710
      <TemplateToolbar />
      <TemplatePreview svgWidth={fWidth} svgHeight={fHeight} />
    </div>
  );
}

export default TemplateWrapper;
