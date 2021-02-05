import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Link } from "react-router-dom";
import resume from "../../assets/resume.pdf";
import "./Resume.scss";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  return (
    <main className="resume">
      <h1>My Resume</h1>
      <div className="pdf">
        <Link to="Mike_Flynn_Resume.pdf" target="_blank" download>
          Download Resume
        </Link>
        <Document file={resume} onLoadError={console.error}>
          <Page pageNumber={1} />
        </Document>
      </div>
    </main>
  );
};

export default Resume;
