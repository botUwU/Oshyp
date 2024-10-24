// src/components/Footer.js
// import React from "react";

import styled from "styled-components";
import { Section } from "../GlobalStyle";
import { colors } from "../constants/colors";
import CTitle from "../customComponents/CTitle";
import Cp from "../customComponents/Cp";
const FooterSection = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 33vh;
  width: 100%;
  background-color: ${colors.backGroundColor.cyan};
  box-shadow: 0px -8px 10.32px rgba(0, 0, 0, 0.2);
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
`;
const ContactDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const InformationDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;
const AboutsDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
`;
const Footer = () => {
  return (
    <FooterSection>
      <ContactDiv>
        <CTitle>Contactez-nous</CTitle>
      </ContactDiv>
      <InformationDiv>
        <CTitle variation="h3" color="secondary">
          Vous avez des questions ou souhaitez prendre rendez-vous ?
        </CTitle>
        <AboutsDiv>
          <Cp size="xl_regular" color="dark">
            Adresse: 9 Rue de Figeac – 31450 BELBERAUD
          </Cp>
          <Cp size="xl_regular" color="dark">
            Téléphone: +216 646870652
          </Cp>
          <Cp size="xl_regular" color="dark">
            Email: oshypmd@gmail.com
          </Cp>
        </AboutsDiv>
      </InformationDiv>
      <CTitle variation="h3" color="primary">
        Miguel DUENAS
      </CTitle>
    </FooterSection>
  );
};

export default Footer;
