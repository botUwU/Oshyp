import React from "react";
import { useScroll } from "../helper/useScroll";
import { Section } from "../GlobalStyle";
import CTitle from "../customComponents/CTitle";
import styled, { css } from "styled-components";
import { colors } from "../constants/colors";

import CImage from "../customComponents/CImage";
import Cbutton from "../customComponents/Cbutton";
import Cp from "../customComponents/Cp";
import { useInView } from "react-intersection-observer";
export default function Home() {
  const { homeRef, scrollToSection, whoAmIRef } = useScroll();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const homeMediaQueries = [
    {
      width: "1000px",
      styles: css``,
    },
  ];
  return (
    <WrapperContainer ref={ref}>
      <Section mediaQueries={homeMediaQueries} ref={homeRef}>
        <HomeContainer>
          <Description>
            <CTitle
              inView={inView}
              variation="h1"
              tracking="0.2em"
              color="primary"
            >
              Rencontrez Miguel Duenas
            </CTitle>
            <CTitle
              inView={inView}
              variation="h2"
              tracking="0.2em"
              color="secondary"
            >
              Découvrez des traitements naturels et efficaces pour les douleurs
              musculo-squelettiques et améliorez votre bien-être général.{" "}
            </CTitle>
            <Cbutton
              variation="secondary"
              onClick={() => {
                scrollToSection(whoAmIRef);
              }}
            >
              <Cp inView={inView} color="white">
                En savoir plus →{" "}
              </Cp>
            </Cbutton>
          </Description>
          <CImage
            inView={inView}
            src="/image.png"
            height={"90%"}
            width={"35%"}
            rounded={false}
            shadow={"medium"}
            WrapperStyle={{ width: "40%" }}
          />
        </HomeContainer>
      </Section>
    </WrapperContainer>
  );
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  /* height: 100%; */
  width: 100%;
  gap: 48px;
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 120px;
  }
`;
const Description = styled.div`
  height: 100%;
  width: 50%;
  /* border: 1px solid red; */
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 30px;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
const WrapperContainer = styled.div`
  background-color: ${colors.backGroundColor.mainWhite};
  display: flex;
  line-height: 1.9;
  padding-top: 200px;
`;
