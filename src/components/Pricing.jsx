/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useScroll } from "../helper/useScroll";
import { Section } from "../GlobalStyle";
import CTitle from "../customComponents/CTitle";
import styled from "styled-components";
import { colors } from "../constants/colors";
import Cp from "../customComponents/Cp";

// Styled components for pricing section
const PricingWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  gap: 20px;
  width: 100%;
`;

const PriceCard = styled.div`
  background-color: ${colors.backGroundColor.mainWhite};
  padding: 20px;
  width: 30%;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const Price = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: ${colors.primary};
  margin: 10px 0;
`;

export default function Pricing() {
  const { pricingRef } = useScroll();

  return (
    <Section
      ref={pricingRef}
      color={colors.backGroundColor.white}
      type="vertical"
    >
      <CTitle variation="h1" color="primary">
        Nos Tarifs
      </CTitle>
      <CTitle variation="h2" color="secondary">
        Découvrez nos tarifs pour les services que nous offrons.
      </CTitle>

      <PricingWrapper>
        {/* Pricing for Osteotherapy */}
        <PriceCard>
          <CTitle variation="h3" color="primary">
            Ostéothérapie
          </CTitle>
          <Cp color="dark">
            Thérapie manuelle visant à soulager la douleur et restaurer la
            mobilité.
          </Cp>
          <Price>6000 TND</Price>
        </PriceCard>

        {/* Pricing for Shiatsu */}
        <PriceCard>
          <CTitle variation="h3" color="primary">
            Shiatsu
          </CTitle>
          <Cp color="dark">
            Méthode de relaxation japonaise basée sur l'énergie du corps.
          </Cp>
          <Price>6000 TND</Price>
        </PriceCard>
      </PricingWrapper>
    </Section>
  );
}
