import React from "react";
import styled, { css } from "styled-components";
import { colors } from "../constants/colors";

export default function CTitle({
  shrunk,
  children,
  isCentred = false,
  variation = "h1",
  color = "primary",
  tracking = "0.1em",
  mb,
  mt,
  inView,
  mediaQueries,
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
        mediaQueries={mediaQueries}
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
        mediaQueries={mediaQueries}
      >
        {children}
      </Title2>
    );
  }
}

const Title1 = styled.h1`
  color: ${(props) => {
    if (props.color === "primary") {
      return colors.title.primary;
    }
    if (props.color === "secondary") {
      return colors.title.secondary;
    }
    if (props.color === "white") {
      return colors.title.white;
    }
  }};
  font-weight: 700;
  font-family: "PlaywriteGBS-Regular";
  text-align: ${(props) => (props.isCentred ? "center" : "left")};
  letter-spacing: ${(props) => props.tracking || undefined};
  margin-bottom: ${(props) => props.mb || undefined};
  margin-top: ${(props) => props.mt || undefined};
  transform: translateY(50px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  transition: display 0.6s ease-out;
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
  ${(props) =>
    props.mediaQueries &&
    props.mediaQueries.map(
      ({ width, styles }) => css`
        @media (max-width: ${width}) {
          ${styles}
        }
      `
    )}
`;

const Title2 = styled.h2`
  color: ${(props) => {
    if (props.color === "primary") {
      return colors.title.primary;
    }
    if (props.color === "secondary") {
      return colors.title.secondary;
    }
    if (props.color === "white") {
      return colors.title.white;
    }
  }};
  font-weight: 700;
  font-family: "PlaywriteGBS-Regular";
  text-align: ${(props) => (props.isCentred ? "center" : "left")};
  letter-spacing: ${(props) => props.tracking || undefined};
  margin-bottom: ${(props) => props.mb || undefined};
  margin-top: ${(props) => props.mt || undefined};
  transform: translateY(50px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  transition: display 0.6s ease-out;

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
  ${(props) =>
    props.mediaQueries &&
    props.mediaQueries.map(
      ({ width, styles }) => css`
        @media (max-width: ${width}) {
          ${styles}
        }
      `
    )}
`;
