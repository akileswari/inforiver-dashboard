<<<<<<< HEAD
import React from 'react';
import TemplatePreview from './TemplatePreview';
import TemplateToolbar from './TemplateToolbar';
import { divHeight, divWidth, minHeight, minWidth } from '../constant/Helper';

const TemplateWrapper: React.FC = () => {
  const fHeight = divHeight - minHeight;
  const fWidth = divWidth - minWidth;

  return (
    <div className="template-wrapper" style={{ height: `${divHeight}px`, width: `${divWidth}px` }}>
      <TemplateToolbar />
      <TemplatePreview svgWidth={fWidth} svgHeight={fHeight} />
=======
import React from "react";
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

  const fHeight = divHeight - minHeight;
  const fWidth = divWidth - minWidth;

  return (
    <div
      className="template-wrapper"
      style={{ height: `${divHeight}px`, width: `${divWidth}px` }}
    >
      <TemplateToolbar />
      <TemplatePreview height={fHeight} width={fWidth} />
>>>>>>> 55a520db1d37b8ccddef075fd48859066a3b3557
    </div>
  );
}

export default TemplateWrapper;
