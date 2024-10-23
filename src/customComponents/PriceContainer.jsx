import React from "react";
import styled from "styled-components";
import CTitle from "./CTitle";
import Cp from "../customComponents/Cp";
import formatCurrencyEuro from "../helper/currencyformat";
import { colors } from "../constants/colors";

export default function PriceContainer({
  title,
  duration,
  price,
  benefits,
  conclusion,
}) {
  return (
    <Price>
      <CTitle isCentred={true} variation="h1" color="primary">
        {title}
      </CTitle>
      <UL>
        {benefits.map((benefit, index) => (
          <li key={index}>
            <Cp
              tracking={"0.1rem"}
              color="main"
              weight="Bold"
              size="xl_regular"
            >
              <i>{benefit.title}:</i>
              {"   "}
            </Cp>
            <Cp color="main" size="lg_regular">
              {benefit.description}
            </Cp>
          </li>
        ))}
      </UL>

      <Cp isCentred color="main" weight="Bold" size="xxl_regular">
        {conclusion.description}
      </Cp>

      <Info>
        <InfoItem>
          <Cp color="main" weight="Bold" size="xxl_regular">
            Durree de la seance:
          </Cp>
          <Cp color="main" size="lg_regular">
            {" "}
            {duration}
          </Cp>
        </InfoItem>
        <InfoItem>
          <Cp color="main" weight="Bold" size="xxl_regular">
            Prix :
          </Cp>
          <Cp color="main" size="lg_regular">
            {formatCurrencyEuro(price)}
          </Cp>
        </InfoItem>
      </Info>
    </Price>
  );
}

const Price = styled.div`
  padding: 12px 24px;
  box-shadow: 0px 4px 5.64px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  transition: transform 750ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    box-shadow: 0px 8px 10.32px rgba(0, 0, 0, 0.2);
    transform: scale(1.05) translateY(-25px);
  }
  display: flex;
  flex-direction: column;
  gap: 56px;
  background-color: ${colors.backGroundColor.main};
`;

const UL = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const InfoItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
