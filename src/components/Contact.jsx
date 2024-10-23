import React from "react";
import { useScroll } from "../helper/useScroll";
import { Section } from "../GlobalStyle";
import CTitle from "../customComponents/CTitle";
import styled from "styled-components";
import { colors } from "../constants/colors";
import Cp from "../customComponents/Cp";

// Styled components for contact section
const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ContactDetails = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid ${colors.primary};
  border-radius: 5px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid ${colors.primary};
  border-radius: 5px;
  font-size: 1rem;
  height: 150px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: ${colors.primary};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.secondary};
  }
`;

export default function Contact() {
  const { contactRef } = useScroll();

  return (
    <Section
      ref={contactRef}
      color={colors.backGroundColor.mainWhite}
      type="vertical"
    >
      <CTitle variation="h1" color="primary">
        Contactez-nous
      </CTitle>
      <CTitle variation="h2" color="secondary">
        Vous avez des questions ou souhaitez prendre rendez-vous ?
      </CTitle>

      <ContactWrapper>
        <ContactDetails>
          <Cp color="dark">
            Adresse: 9 Rue de Figeac – 31450 BELBERAUD
            <br />
            Téléphone: +216 646870652
            <br />
            Email: oshypmd@gmail.com
          </Cp>
        </ContactDetails>

        <ContactForm>
          <Input type="text" placeholder="Votre nom" required />
          <Input type="email" placeholder="Votre email" required />
          <TextArea placeholder="Votre message" required />
          <SubmitButton type="submit">Envoyer</SubmitButton>
        </ContactForm>
      </ContactWrapper>
    </Section>
  );
}
