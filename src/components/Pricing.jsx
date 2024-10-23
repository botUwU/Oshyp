import React from "react";
import { useScroll } from "../helper/useScroll";
import { Section } from "../GlobalStyle";
import PriceContainer from "../customComponents/PriceContainer";
import { shiatsu } from "../data/shiatsu";
import { osteotherapie } from "../data/osteotherapie";
import styled from "styled-components";
import Cp from "../customComponents/Cp";
import CTitle from "../customComponents/CTitle";

export default function Pricing() {
  const { pricingRef } = useScroll();
  return (
    <Section ref={pricingRef}>
      <CTitle
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
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <Cp color="main" weight="Bold" size="xxl_regular">
          Chaque personne étant unique, la durée des séances peut varier en
          fonction des besoins
        </Cp>
      </div>
    </Section>
  );
}

const PricingSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  padding: 0 60px;
`;
