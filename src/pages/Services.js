import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import tw from "twin.macro";
import styled from "styled-components";
import pdf from "../Assets/oneotechCatalog.pdf";

// Set the workerSrc to the correct version using cdnjs
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// Catalog URL
const catalogURL =
  "https://raw.githubusercontent.com/sahil-codee/oneotech/master/src/Assets/oneotechCatalog.pdf";

// Styles using twin.macro
const Container = styled.div`
  ${tw`flex flex-col items-center mt-8`}
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

const CatalogPage = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    // Update the width based on window size for responsive scaling
    setWidth(window.innerWidth);
  }, []);

  return (
    <Container>
      {/* Download Button */}
      <Button href={pdf} target="_blank" download>
        <Icon>⬇</Icon>Download Catalog
      </Button>

      {/* PDF Viewer */}
      <PdfViewer>
        <Document file={catalogURL} className="d-flex justify-content-center">
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
        </Document>
      </PdfViewer>

      {/* Another Download Button */}
      <Button href={pdf} target="_blank" download>
        <Icon>⬇</Icon>Download Catalog
      </Button>
    </Container>
  );
};

export default CatalogPage;
