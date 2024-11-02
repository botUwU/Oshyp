// src/components/Footer.js
// import React from "react";

import styled, { css } from "styled-components";
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

  const textMediaQueries = [
    {
      width: "600px",
      styles: css`
        font-size: 14px;
      `,
    },
  ];
  const text_lg_MediaQueries = [
    {
      width: "1000px",
      styles: css`
        font-size: 16px;
      `,
    },
    {
      width: "600px",
      styles: css`
        font-size: 16px;
      `,
    },
  ];
  const titleMediaQueries = [
    {
      width: "1000px",
      styles: css`
        font-size: 24px;
      `,
    },
    {
      width: "600px",
      styles: css`
        font-size: 20px;
      `,
    },
  ];

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
              mediaQueries={titleMediaQueries}
            >
              Contacter-nous
            </CTitle>
            <BlockLine>
              <Cp
                mediaQueries={text_lg_MediaQueries}
                size="lg_regular"
                weight="Bold"
                inView={inView}
              >
                Mail :
              </Cp>
              <Cp
                size="lg_regular"
                mediaQueries={textMediaQueries}
                inView={inView}
              >
                oshypmd@gmail.com
              </Cp>
            </BlockLine>
            <BlockLine>
              <Cp
                mediaQueries={text_lg_MediaQueries}
                size="lg_regular"
                weight="Bold"
                inView={inView}
              >
                Telephone :
              </Cp>
              <Cp
                size="lg_regular"
                mediaQueries={textMediaQueries}
                inView={inView}
              >
                oshypmd@gmail.com
              </Cp>
            </BlockLine>
          </InfoItem>
          <InfoItem>
            <CTitle
              mediaQueries={titleMediaQueries}
              inView={inView}
              variation="h1"
              tracking="0.2em"
              color="primary"
            >
              retrouvez-nous
            </CTitle>
            <BlockLine>
              <Cp
                mediaQueries={text_lg_MediaQueries}
                size="lg_regular"
                weight="Bold"
                inView={inView}
              >
                Adresse :
              </Cp>
              <Cp
                size="lg_regular"
                mediaQueries={textMediaQueries}
                inView={inView}
              >
                9, Rue de Figeac – 31450 BELBERAUD
              </Cp>
            </BlockLine>
          </InfoItem>
        </Informations>
        <Separator></Separator>
        <LastLine>
          <Cp
            mediaQueries={text_lg_MediaQueries}
            inView={inView}
            weight="Bold"
            size="lg_regular"
            color="primary"
          >
            Séances sur RDV tous les vendredis de 8h00 à 12h00 et de 14h00 à
            17h00
          </Cp>
        </LastLine>
      </FooterSection>
    </div>
  );
};

export default Footer;
const LastLine = styled.div`
  margin-top: 20px;
  @media (max-width: 1000px) {
    margin-top: 10px;
  }
`;

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
  @media (max-width: 1000px) {
    padding: 12px 0px;
    border-top-right-radius: 60px;
    border-top-left-radius: 60px;
  }
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
  @media (max-width: 900px) {
    gap: 0px;
  }
`;

const BlockLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 0px 0px;
  margin-bottom: 12px;
  @media (max-width: 1000px) {
    gap: 4px;
    margin-bottom: 6px;
  }
`;
