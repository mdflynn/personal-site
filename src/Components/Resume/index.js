import React from "react";
import { Document, Page, pdfjs } from "react-pdf";

import resume from "../../assets/resume.pdf";
import "./Resume.scss";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  return (
    <div className="pdf">
      <Document file={resume} onLoadError={console.error}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default Resume;
