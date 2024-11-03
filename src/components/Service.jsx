/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useScroll } from "../helper/useScroll";
import { Section } from "../GlobalStyle";
import CTitle from "../customComponents/CTitle";
import { colors } from "../constants/colors";
import styled, { css } from "styled-components";
import Cp from "../customComponents/Cp";
import CImage from "../customComponents/CImage";
import Separator from "../customComponents/Separator";
import { useInView } from "react-intersection-observer";

export default function Service() {
  const { servicesRef } = useScroll();

  const { ref: titleRef, inView: TitleInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: shiatuRef, inView: ShiatuInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: osteoRef, inView: osteoInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const mediaQueries = [
    {
      width: "900px",
      styles: css`
        padding: 0px 30px;
      `,
    },
  ];
  return (
    <div>
      <Section mediaQueries={mediaQueries} ref={servicesRef}>
        <Wrapper>
          <Title ref={titleRef}>
            <CTitle
              inView={TitleInView}
              isCentred
              tracking="0.15em"
              variation="h1"
              color="primary"
            >
              Nos Services
            </CTitle>
            <CTitle
              inView={TitleInView}
              isCentred
              tracking="0.2em"
              variation="h2"
              color="secondary"
            >
              Nous offrons une gamme de traitements efficaces pour soulager la
              douleur et améliorer la santé générale.
            </CTitle>
            <Separator></Separator>
            <InfoContainer ref={shiatuRef}>
              <CTitle
                inView={ShiatuInView}
                mb={"100px"}
                tracking="0.1em"
                isCentred
                variation="h2"
                color="primary"
              >
                Ostéothérapie
              </CTitle>
              <GridContainer>
                <Cp
                  inView={ShiatuInView}
                  color="main"
                  size="xl_regular"
                  weight="Bold"
                  tracking="0.2em"
                  isCentred
                >
                  L'ostéothérapie est une méthode douce et non invasive qui aide
                  à soulager la douleur et à restaurer la mobilité.
                </Cp>
                <CImage
                  inView={ShiatuInView}
                  src={"/image2.png"}
                  height={"350px"}
                  width={"300px"}
                  fit="cover"
                  shadow={"small"}
                  grayScale={true}
                />
                <CImage
                  inView={ShiatuInView}
                  src={"/image3.png"}
                  height={"350px"}
                  width={"300px"}
                  fit="cover"
                  shadow={"small"}
                  grayScale={true}
                />
                <Cp
                  inView={ShiatuInView}
                  color="main"
                  size="xl_regular"
                  weight="Bold"
                  tracking="0.2em"
                  isCentred
                >
                  Elle traite des problèmes tels que les cervicalgies, les
                  migraines, les sciatiques, et plus encore.
                </Cp>
              </GridContainer>
            </InfoContainer>
            <Separator></Separator>
            <InfoContainer ref={osteoRef}>
              <CTitle
                inView={osteoInView}
                tracking="0.1em"
                mb={"100px"}
                isCentred
                variation="h2"
                color="primary"
              >
                Shiatsu
              </CTitle>
              <GridContainer>
                <Cp
                  inView={osteoInView}
                  color="main"
                  size="xl_regular"
                  weight="Bold"
                  tracking="0.2em"
                  isCentred
                >
                  Le Shiatsu est une thérapie manuelle d'origine japonaise, qui
                  aide à rétablir l'équilibre énergétique du corps.
                </Cp>
                <CImage
                  inView={osteoInView}
                  src={"/image0.png"}
                  height={"350px"}
                  width={"300px"}
                  fit="cover"
                  shadow={"small"}
                  grayScale={true}
                />
                <CImage
                  inView={osteoInView}
                  src={"/image1.png"}
                  height={"350px"}
                  width={"300px"}
                  fit="cover"
                  shadow={"small"}
                  grayScale={true}
                />
                <Cp
                  inView={osteoInView}
                  color="main"
                  size="xl_regular"
                  weight="Bold"
                  tracking="0.2em"
                  isCentred
                >
                  Il est particulièrement efficace pour réduire le stress,
                  améliorer la circulation, et renforcer les défenses naturelles
                  du corps.
                </Cp>
              </GridContainer>
            </InfoContainer>
          </Title>
        </Wrapper>
      </Section>
    </div>
  );
}
const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  justify-items: center;
  gap: 30px;
  row-gap: 100px;
  line-height: 2.5;
`;
const InfoContainer = styled.div``;

const Wrapper = styled.div`
  padding: 60px 60px;
  gap: 300px;
  display: flex;
  @media (max-width: 1000px) {
    padding: 60px 30px;
  }
  @media (max-width: 770px) {
    padding: 60px 0px;
  }
`;
