import React from "react";
import styled from "styled-components";
import { colors } from "../constants/colors";

export default function Cp({
  children,
  size = "md_regular",
  weight = "medium",
  color = "main",
}) {
  const [fontSize, fontWeight] = size.split("_");
  return (
    <P
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      weight={weight}
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
    if (props.weight === "thin") {
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
    } else {
      return colors.textColor.main;
    }
  }};
`;
