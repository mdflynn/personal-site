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
        <div className="download-div">
          <p>Want a copy for yourself?</p>
          <Link
            className="link"
            to="Mike_Flynn_Resume.pdf"
            target="_blank"
            download
          >
            <div className="glow-div">
              <span>R</span>
              <span>E</span>
              <span>S</span>
              <span>U</span>
              <span>M</span>
              <span>E</span>
            </div>
          </Link>
          <span className="bottom-arrow">Click ⬆ to download</span>
        </div>
        <Document file={resume} onLoadError={console.error}>
          <Page pageNumber={1} />
        </Document>
      </div>
    </main>
  );
};

export default Resume;
