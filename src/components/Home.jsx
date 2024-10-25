import React from "react";
import { useScroll } from "../helper/useScroll";
import { Section } from "../GlobalStyle";
import CTitle from "../customComponents/CTitle";
import styled from "styled-components";
import { colors } from "../constants/colors";

import CImage from "../customComponents/CImage";
import Cbutton from "../customComponents/Cbutton";
import Cp from "../customComponents/Cp";
import { useInView } from "react-intersection-observer";
export default function Home() {
  const { homeRef, scrollToSection, servicesRef } = useScroll();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  return (
    <WrapperContainer ref={ref}>
      <Section ref={homeRef}>
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
                scrollToSection(servicesRef);
              }}
            >
              <Cp inView={inView} color="white">
                En savoir plus sur nos services →{" "}
              </Cp>
            </Cbutton>
          </Description>
          <CImage
            inView={inView}
            src="src\data\image.png"
            height={"50%"}
            width={"20%"}
            rounded={false}
            grayScale={true}
            shadow={"medium"}
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
  justify-content: center;
  height: 100%;
  width: 100%;
  gap: 48px;
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
`;
const WrapperContainer = styled.div`
  background-color: ${colors.backGroundColor.mainWhite};
  display: flex;
  line-height: 1.9;
`;
