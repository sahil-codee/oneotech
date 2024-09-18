import React, { useState, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import tw from "twin.macro";
import styled from "styled-components";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import countryList from "react-select-country-list";
import pdf from "../Assets/oneotechCatalog.pdf";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import Header from "components/headers/light.js";
import emailjs from "emailjs-com"; // For sending emails

// Set the workerSrc to the correct version using an alternative CDN
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Container = styled.div`
  ${tw`flex flex-col items-center mt-8 px-4`}
`;

const Button = styled.button`
  ${tw`bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg mb-4 inline-flex items-center justify-center`}
`;

const Icon = styled.span`
  ${tw`mr-2`}
`;

const PdfViewer = styled.div`
  ${tw`flex justify-center mt-4`}
`;

const ModalOverlay = styled.div`
  ${tw`fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center`}
`;

const ModalContent = styled.div`
  ${tw`bg-white p-8 rounded-lg shadow-lg w-full max-w-lg`}
  max-height: 90vh;
  overflow-y: auto;
`;

const Input = styled.input`
  ${tw`w-full p-3 mb-4 border border-gray-300 rounded-lg`}
`;

const Label = styled.label`
  ${tw`text-left w-full mb-2 font-medium`}
`;

const Asterisk = styled.span`
  ${tw`text-red-600`}
`;

const CloseButton = styled.button`
  ${tw`bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mt-4`}
`;

const HiddenInput = styled.input`
  ${tw`hidden`}
`;

const Row = styled.div`
  ${tw`flex flex-wrap -mx-3 mb-4`}
`;

const HalfWidthInput = styled.div`
  ${tw`w-full md:w-1/2 px-3 mb-4 md:mb-0`}
`;

const FullWidthInput = styled.div`
  ${tw`w-full px-3 mb-4`}
`;

const ErrorText = styled.p`
  ${tw`text-red-500 text-sm`}
`;

const catalogLink =
  "https://raw.githubusercontent.com/sahil-codee/oneotech/master/src/Assets/oneotechCatalog.pdf";

const CatalogPage = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);
  const [pdfError, setPdfError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    company: "",
    email: "",
    country: "",
    countryCode: "+91",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const countryOptions = countryList().getData();
  const formRef = useRef(null);

  // Handle window resize for responsive design
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => setNumPages(numPages);

  const handleDownloadClick = () => setIsModalOpen(true);

  const handleCloseModal = () => setIsModalOpen(false);

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handlePhoneChange = (value, countryData) =>
    setFormData({
      ...formData,
      mobile: value,
      countryCode: `+${countryData.dialCode}`,
    });

  const handleCountryChange = (selected) =>
    setFormData({ ...formData, country: selected.label });

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.mobile) errors.mobile = "Mobile number is required.";
    if (!formData.company) errors.company = "Company name is required.";
    if (!formData.email) errors.email = "Email address is required.";
    if (!formData.country) errors.country = "Country is required.";
    setFormErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    validateForm();
    if (isFormValid) {
      // Use EmailJS to send the form data via email
      emailjs
        .sendForm(
          "service_mhq8ouh", // Replace with your EmailJS service ID
          "template_lht1154", // Replace with your EmailJS template ID
          formRef.current, // Form reference to send data
          "t8bhvR42_7X9KxYNV" // Replace with your EmailJS user ID
        )
        .then((result) => {
          console.log("Email sent:", result.text);
          // Automatically download the catalog after form submission
          window.open(catalogLink, "_blank");
          // Clear form data
          setFormData({
            name: "",
            mobile: "",
            company: "",
            email: "",
            country: "",
            countryCode: "+91",
          });
          setIsModalOpen(false);
        })
        .catch((error) => {
          console.error("EmailJS error:", error.text);
        });
    }
  };

  useEffect(() => validateForm(), [formData]);

  const calculateScale = () =>
    width > 1200 ? 1.7 : width > 992 ? 1.4 : width > 768 ? 1.1 : 0.6;

  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <Button onClick={handleDownloadClick}>
          <Icon>⬇</Icon>Download Catalog
        </Button>

        <PdfViewer>
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={(error) => setPdfError("Error loading PDF")}
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

        {isModalOpen && (
          <ModalOverlay>
            <ModalContent>
              <form ref={formRef} onSubmit={handleFormSubmit}>
                {/* Name and Company */}
                <Row>
                  <HalfWidthInput>
                    <Label>
                      Full Name <Asterisk>*</Asterisk>
                    </Label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                    />
                    {formErrors.name && (
                      <ErrorText>{formErrors.name}</ErrorText>
                    )}
                  </HalfWidthInput>
                  <HalfWidthInput>
                    <Label>
                      Company Name <Asterisk>*</Asterisk>
                    </Label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Enter your company name"
                    />
                    {formErrors.company && (
                      <ErrorText>{formErrors.company}</ErrorText>
                    )}
                  </HalfWidthInput>
                </Row>

                {/* Email, Country Code, and Mobile */}
                <Row>
                  <HalfWidthInput>
                    <Label>
                      Email <Asterisk>*</Asterisk>
                    </Label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                    />
                    {formErrors.email && (
                      <ErrorText>{formErrors.email}</ErrorText>
                    )}
                  </HalfWidthInput>
                  <HalfWidthInput>
                    <Label>
                      Mobile Number <Asterisk>*</Asterisk>
                    </Label>
                    <PhoneInput
                      country={"in"}
                      value={formData.mobile}
                      onChange={handlePhoneChange}
                      inputProps={{ name: "mobile", required: true }}
                    />
                    {formErrors.mobile && (
                      <ErrorText>{formErrors.mobile}</ErrorText>
                    )}
                  </HalfWidthInput>
                </Row>

                {/* Country Selection */}
                <FullWidthInput>
                  <Label>
                    Country <Asterisk>*</Asterisk>
                  </Label>
                  <Select
                    options={countryOptions}
                    value={countryOptions.find(
                      (option) => option.label === formData.country
                    )}
                    onChange={handleCountryChange}
                  />
                  {formErrors.country && (
                    <ErrorText>{formErrors.country}</ErrorText>
                  )}
                  <HiddenInput
                    type="hidden"
                    name="country"
                    value={formData.country}
                  />
                </FullWidthInput>

                <Button type="submit" disabled={!isFormValid}>
                  Submit & Download
                </Button>
              </form>
              <CloseButton onClick={handleCloseModal}>Close</CloseButton>
            </ModalContent>
          </ModalOverlay>
        )}
      </Container>
    </AnimationRevealPage>
  );
};

export default CatalogPage;
