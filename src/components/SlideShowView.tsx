import React, { useState } from "react";
import { useParams } from "react-router";
import "react-slideshow-image/dist/styles.css";
import { Document, Page, pdfjs } from "react-pdf";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "react-pdf/dist/esm/Page/TextLayer.css";

const SlideShowView = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const params = useParams();
  const pdfUrls = JSON.parse(decodeURIComponent(params.pdfUrls as any));
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentSuccess = ({ numPages }: any) => {
    setNumPages(numPages);
  };

  const goToNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const goToPreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  return (
    <div className="slide-container" style={{ display: "flex", alignItems: "center", justifyContent: "center" ,  background: "var(--box-background)"}}>
      <IconButton
        onClick={goToPreviousPage}
        disabled={pageNumber <= 1}
        color="primary"
        size="large"
        style={{ position: "absolute", left: "20px" }}
      >
        <ChevronLeftIcon />
      </IconButton>
      <IconButton
        onClick={goToNextPage}
        disabled={pageNumber >= numPages}
        color="primary"
        size="large"
        style={{ position: "absolute", right: "20px" }}
      >
        <ChevronRightIcon />
      </IconButton>

      {pdfUrls.map((pdfUrl: any, index: any) => (
        <div key={index} style={{ display: "flex", justifyContent: "center" , height: "100vh", overflow:"hidden"}}>
          <Document file={pdfUrl} onLoadSuccess={onDocumentSuccess}>
            <Page pageNumber={pageNumber}  renderTextLayer={false}></Page>
          </Document>
        </div>
      ))}
    </div>
  );
};

export default SlideShowView;
