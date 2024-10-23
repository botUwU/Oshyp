import React from "react";
import styled, { css } from "styled-components";
import { colors } from "../constants/colors";
import { shadows } from "../constants/shadow";

export default function CImage({
  shadow,
  height = 250,
  width = 250,
  src,
  fit = "cover",
  rounded = false,
}) {
  return (
    <div style={{ height: height, width: width }}>
      <Image src={src} shadow={shadow} fit={fit} rounded={rounded} />
    </div>
  );
}

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: ${(props) => (props.fit === "cover" ? "cover" : "contain")};
  border-radius: ${(props) => (props.rounded ? "100%" : "10%")};
  transition: transform 750ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: scale(1.1) translateY(-25px);
  }
  ${(props) => {
    switch (props.shadow) {
      case "small":
        return css`
          box-shadow: 0px 4px 4.65px rgba(0, 0, 0, 0.3);
        `;
      case "medium":
        return css`
          box-shadow: 0px 8px 10.32px rgba(0, 0, 0, 0.45);
        `;
      case "large":
        return css`
          box-shadow: 0px 16px 16px rgba(0, 0, 0, 0.6);
        `;
      default:
        return;
    }
  }}
`;
