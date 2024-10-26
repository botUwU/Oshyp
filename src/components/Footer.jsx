// src/components/Footer.js
// import React from "react";

import styled from "styled-components";
import { Section } from "../GlobalStyle";
import { colors } from "../constants/colors";
import CTitle from "../customComponents/CTitle";
import Cp from "../customComponents/Cp";
import { useInView } from "react-intersection-observer";
import Separator from "../customComponents/Separator";
const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  return (
    <div style={{ backgroundColor: colors.backGroundColor.mainWhite }}>
      <FooterSection ref={ref}>

        <Informations>
          <InfoItem>
            <CTitle
              inView={inView}
              variation="h1"
              tracking="0.2em"
              color="primary"
            >
              Contacter-nous
            </CTitle>
            <BlockLine>
              <Cp size="lg_regular" weight="Bold" inView={inView}>
                Mail :
              </Cp>
              <Cp inView={inView}>oshypmd@gmail.com</Cp>
            </BlockLine>
            <BlockLine>
              <Cp size="lg_regular" weight="Bold" inView={inView}>
                Telephone :
              </Cp>
              <Cp inView={inView}>oshypmd@gmail.com</Cp>
            </BlockLine>
          </InfoItem>
          <InfoItem>
            <CTitle
              inView={inView}
              variation="h1"
              tracking="0.2em"
              color="primary"
            >
              retrouvez-nous
            </CTitle>
            <BlockLine>
              <Cp size="lg_regular" weight="Bold" inView={inView}>
                Adresse :
              </Cp>
              <Cp inView={inView}>9, Rue de Figeac – 31450 BELBERAUD</Cp>
            </BlockLine>
          </InfoItem>
        </Informations>
        <Separator></Separator>
        <div style={{ marginTop: "20px" }}>
          <Cp inView={inView} weight="Bold" size="lg_regular" color="primary">
            Séances sur RDV tous les vendredis de 8h00 à 12h00 et de 14h00 à
            17h00
          </Cp>
        </div>
      </FooterSection>
    </div>
  );
};

export default Footer;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  width: 100%;
  background-color: ${colors.backGroundColor.cyan};
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  box-shadow: 0px -8px 10.54px rgba(0, 0, 0, 0.2);
`;

const Informations = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const BlockLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 0px 0px;
  margin-bottom: 12px;
`;
