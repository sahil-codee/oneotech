import React, { useState, useEffect } from "react";
import axios from "axios";
import { Document, Page, pdfjs } from "react-pdf";
import tw from "twin.macro";
import styled from "styled-components";

// Set the workerSrc to the correct version using cdnjs
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

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
  const [catalogURL, setCatalogURL] = useState("");

  useEffect(() => {
    const fetchCatalog = async () => {
      const token = process.env.REACT_APP_GITHUB_TOKEN; // Load the token from environment variable
      try {
        const response = await axios.get(
          `https://api.github.com/repos/sahil-codee/oneotech/contents/src/Assets/oneotechCatalog.pdf`,
          {
            headers: {
              Authorization: `token ${token}`,
            },
          }
        );
        setCatalogURL(response.data.download_url); // Set the download URL
      } catch (error) {
        console.error("Failed to fetch catalog:", error);
      }
    };

    fetchCatalog();
    setWidth(window.innerWidth);
  }, []);

  return (
    <Container>
      {/* Download Button */}
      <Button href={catalogURL} target="_blank" download>
        <Icon>⬇</Icon>Download Catalog
      </Button>

      {/* PDF Viewer */}
      <PdfViewer>
        {catalogURL && (
          <Document file={catalogURL} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        )}
      </PdfViewer>

      {/* Another Download Button */}
      <Button href={catalogURL} target="_blank" download>
        <Icon>⬇</Icon>Download Catalog
      </Button>
    </Container>
  );
};

export default CatalogPage;
