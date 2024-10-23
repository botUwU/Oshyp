import React from "react";
import styled from "styled-components";
import { colors } from "../constants/colors";

export default function CTitle({
  children,
  isCentred = false,
  variation = "h1",
  color = "primary",
  tracking = "0.1em",
  mb,
  mt,
}) {
  if (variation === "h1") {
    return (
      <Title1
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
`;
