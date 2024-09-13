import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import tw from "twin.macro";
import styled from "styled-components";
import pdf from "../Assets/oneotechCatalog.pdf";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import Header from "components/headers/light.js";

// Set the workerSrc to the correct version using an alternative CDN
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Container = styled.div`
  ${tw`flex flex-col items-center mt-8 px-4`}
`;

const Button = styled.a`
  ${tw`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4 inline-flex items-center justify-center`}
`;

const Icon = styled.span`
  ${tw`mr-2`}
`;

const PdfViewer = styled.div`
  ${tw`flex justify-center mt-4`}
`;

const catalogLink =
  "https://raw.githubusercontent.com/sahil-codee/oneotech/master/src/Assets/oneotechCatalog.pdf";

const CatalogPage = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);
  const [pdfError, setPdfError] = useState(null);

  // Handle window resize for responsive design
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    console.log(`PDF loaded successfully, total pages: ${numPages}`);
  };

  // Dynamically calculate scale based on the screen width
  const calculateScale = () => {
    if (width > 1200) return 1.7;
    if (width > 992) return 1.4;
    if (width > 768) return 1.1;
    return 0.6; // Mobile screens
  };

  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <Button href={catalogLink} target="_blank" download>
          <Icon>⬇</Icon>Download Catalog
        </Button>

        <PdfViewer>
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={(error) => {
              console.error("Failed to load PDF:", error);
              setPdfError(
                "Error loading PDF. Please check the console for details."
              );
            }}
            className="d-flex justify-content-center"
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                scale={calculateScale()}
              />
            ))}
          </Document>
          {pdfError && <p>{pdfError}</p>}
        </PdfViewer>

        <Button href={catalogLink} target="_blank" download>
          <Icon>⬇</Icon>Download Catalog
        </Button>
      </Container>
    </AnimationRevealPage>
  );
};

export default CatalogPage;
