import React from "react";
import styled from "styled-components";
import { colors } from "../constants/colors";

export default function CTitle({
  children,
  variation = "h1",
  color = "primary",
}) {
  if (variation === "h1") {
    return <Title1 color={color}>{children}</Title1>;
  } else {
    return <Title2 color={color}>{children}</Title2>;
  }
}

const Title1 = styled.h1`
  color: ${(props) =>
    props.color === "primary" ? colors.title.primary : colors.title.secondary};
  font-weight: 700;
  font-family: "PlaywriteGBS-Regular";
`;

const Title2 = styled.h2`
  color: ${(props) =>
    props.color === "primary" ? colors.title.primary : colors.title.secondary};
  font-weight: 700;
  font-family: "PlaywriteGBS-Regular";
`;
