import React from "react";
import styled, { css } from "styled-components";
import { colors } from "../constants/colors";

export default function Cp({
  children,
  isCentred = false,
  size = "md_regular",
  weight = "medium",
  color = "main",
  tracking,
  inView,
  mediaQueries,
}) {
  const [fontSize, fontWeight] = size.split("_");
  return (
    <P
      inView={inView}
      tracking={tracking}
      isCentred={isCentred}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      weight={weight}
      mediaQueries={mediaQueries}
    >
      {children}
    </P>
  );
}

const P = styled.p`
  font-size: ${(props) => {
    if (props.fontSize === "sm") {
      return "12px";
    } else if (props.fontSize === "md") {
      return "14px";
    } else if (props.fontSize === "lg") {
      return "16px";
    } else if (props.fontSize === "xl") {
      return "18px";
    } else if (props.fontSize === "xxl") {
      return "22px";
    } else if (props.fontSize === "xxxl") {
      return "26px";
    } else {
      return "14px";
    }
  }};
  font-family: ${(props) => {
    if (props.fontWeight === "thin") {
      return "PlaywriteGBS-Thin";
    } else if (props.fontWeight === "ExtraLight") {
      return "PlaywriteGBS-ExtraLight";
    } else if (props.fontWeight === "Italic") {
      return "PlaywriteGBS-Italic";
    } else return "PlaywriteGBS-Regular";
  }};
  font-weight: ${(props) => {
    if (props.weight === "Thin") {
      return "100";
    } else if (props.weight === "ExtraLight") {
      return "200";
    } else if (props.weight === "Light") {
      return "300";
    } else if (props.weight === "Regular") {
      return "400";
    } else if (props.weight === "Medium") {
      return "500";
    } else if (props.weight === "SemiBold") {
      return "600";
    } else if (props.weight === "Bold") {
      return "700";
    } else if (props.weight === "ExtraBold") {
      return "800";
    } else {
      return "400";
    }
  }};
  color: ${(props) => {
    if (props.color === "white") {
      return colors.textColor.white;
    } else if (props.color === "black") {
      return colors.textColor.black;
    } else if (props.color === "success") {
      return colors.textColor.success;
    } else if (props.color === "error") {
      return colors.textColor.error;
    } else if (props.color === "secondary") {
      return colors.textColor.secondary;
    } else {
      return colors.textColor.main;
    }
  }};
  text-align: ${(props) => (props.isCentred ? "center" : "left")};
  letter-spacing: ${(props) => props.tracking || undefined};
  opacity: 0;
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
