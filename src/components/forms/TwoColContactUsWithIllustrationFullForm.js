import React, { useState, useRef } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/email-illustration.svg";
import emailjs from "emailjs-com";
import Popup from "./Popup";
import { Helmet } from "react-helmet";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`;
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`;
const Textarea = styled(Input).attrs({ as: "textarea" })`
  ${tw`h-24`}
`;

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`;

export default ({
  subheading = "Contact Us",
  heading = (
    <>
      Feel free to <span tw="text-primary-500">get in touch</span>
      <wbr /> with us.
    </>
  ),
  description = "Have questions or need assistance? Our team is ready to provide the support you need.",
  submitButtonText = "Send",
  formAction = "#",
  formMethod = "get",
  textOnLeft = true,
}) => {
  const [formStatus, setFormStatus] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const formRef = useRef(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log("Form data:", Object.fromEntries(formData.entries())); // Log form data
    const formElement = e.target;
    try {
      await sendEmail(formData, formElement);
      formElement.reset(); // Reset form fields after successful submission
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const sendEmail = async (formData, formElement) => {
    try {
      const result = await emailjs.sendForm(
        "service_59d0eje",
        "template_drdf4nj",
        formElement,
        "t8bhvR42_7X9KxYNV"
      );
      console.log("Email sending result:", result); // Log email sending result
      setFormStatus("SUCCESS");
      setShowPopup(true);
    } catch (error) {
      console.error("Error sending email:", error);
      setFormStatus("FAILED");
      setShowPopup(true);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <Container>
      <Helmet>
        <title>Contact Us - Oneotech Enterprises</title>
        <meta
          name="description"
          content="Get in touch with Oneotech Enterprises for inquiries, support, or feedback. We are here to help you."
        />
      </Helmet>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={EmailIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
            <Form ref={formRef} onSubmit={handleFormSubmit}>
              <Input
                type="email"
                name="email"
                placeholder="Your Email Address"
                required
              />
              <Input type="text" name="name" placeholder="Full Name" required />
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
              <Textarea
                name="message"
                placeholder="Your Message Here"
                required
              />
              <SubmitButton type="submit">{submitButtonText}</SubmitButton>
            </Form>
            {showPopup && (
              <Popup
                message={
                  formStatus === "SUCCESS"
                    ? "Thank you! Your message has been sent. We appreciate your message. Our team will contact you soon."
                    : "Oops! Something went wrong. Please try again."
                }
                onClose={handleClosePopup}
              />
            )}
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
