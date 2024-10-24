/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useScroll } from "../helper/useScroll";
import { Section } from "../GlobalStyle";
import PriceContainer from "../customComponents/PriceContainer";
import { shiatsu } from "../data/shiatsu";
import { osteotherapie } from "../data/osteotherapie";
import styled from "styled-components";
import Cp from "../customComponents/Cp";
import CTitle from "../customComponents/CTitle";
import { useInView } from "react-intersection-observer";

export default function Pricing() {
  const { pricingRef } = useScroll();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  return (
    <div>
      <Section ref={pricingRef}>
        <PricingContainer ref={ref}>
          <CTitle
            inView={inView}
            isCentred={true}
            variation="h1"
            color="primary"
            tracking="0.1em"
            mb="100px"
          >
            Tarifs
          </CTitle>
          <PricingSection>
            <PriceContainer {...shiatsu}></PriceContainer>
            <PriceContainer {...osteotherapie}></PriceContainer>
          </PricingSection>
          <div
            style={{
              textAlign: "center",
              marginTop: "100px",
            }}
          >
            <Cp
              inView={inView}
              tracking="0.1rem"
              isCentred
              color="main"
              weight="Bold"
              size="xxl_regular"
            >
              Chaque personne étant unique, la durée des séances peut varier en
              fonction des besoins
            </Cp>
          </div>
        </PricingContainer>
      </Section>
    </div>
  );
}

const PricingSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  padding: 0 60px;

  @media (max-width: 1280px) {
    padding: 0 0;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const PricingContainer = styled.div`
  padding: 60px 60px;

  @media (max-width: 1280px) {
    padding: 60px 20px;
  }

  @media (max-width: 900px) {
    padding: 60px 60px;
  }

  @media (max-width: 600px) {
    padding: 60px 30px;
  }
`;
