import React from "react";
import styled, { css } from "styled-components";
import { colors } from "../constants/colors";

export default function CTitle({
  children,
  isCentred = false,
  variation = "h1",
  color = "primary",
  tracking = "0.1em",
  mb,
  mt,
  inView,
}) {
  if (variation === "h1") {
    return (
      <Title1
        inView={inView}
        mb={mb}
        mt={mt}
        tracking={tracking}
        isCentred={isCentred}
        color={color}
      >
        {children}
      </Title1>
    );
  } else {
    return (
      <Title2
        inView={inView}
        mb={mb}
        mt={mt}
        tracking={tracking}
        isCentred={isCentred}
        color={color}
      >
        {children}
      </Title2>
    );
  }
}

const Title1 = styled.h1`
  color: ${(props) =>
    props.color === "primary" ? colors.title.primary : colors.title.secondary};
  font-weight: 700;
  font-family: "PlaywriteGBS-Regular";
  text-align: ${(props) => (props.isCentred ? "center" : "left")};
  letter-spacing: ${(props) => props.tracking || undefined};
  margin-bottom: ${(props) => props.mb || undefined};
  margin-top: ${(props) => props.mt || undefined};
  transform: translateY(50px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  ${(props) => {
    if (props.inView) {
      return css`
        opacity: 1;
        transform: translateY(0);
      `;
    } else {
      return css`
        opacity: 0;
        transform: translateY(50);
      `;
    }
  }}
`;

const Title2 = styled.h2`
  color: ${(props) =>
    props.color === "primary" ? colors.title.primary : colors.title.secondary};
  font-weight: 700;
  font-family: "PlaywriteGBS-Regular";
  text-align: ${(props) => (props.isCentred ? "center" : "left")};
  letter-spacing: ${(props) => props.tracking || undefined};
  margin-bottom: ${(props) => props.mb || undefined};
  margin-top: ${(props) => props.mt || undefined};
  transform: translateY(50px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  ${(props) => {
    if (props.inView) {
      return css`
        opacity: 1;
        transform: translateY(0);
      `;
    } else {
      return css`
        opacity: 0;
        transform: translateY(50);
      `;
    }
  }}
`;
