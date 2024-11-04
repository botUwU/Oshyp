import React from "react";
import styled, { css } from "styled-components";
import { colors } from "../constants/colors";
import { useInView } from "react-intersection-observer";

export default function Separator({ shrunk, color }) {
  return <Sep color={color} shrunk={shrunk}></Sep>;
}

const Sep = styled.div`
  ${(props) => {
    if (props.shrunk) {
      return css`
        opacity: 0;
        max-height: 0px;
      `;
    } else {
      return css`
        opacity: 1;
        max-height: 2px;
      `;
    }
  }}
  transition: opacity 0.3s ease, max-height 0.3s ease;
  width: 100%;
  height: 2px;
  ${(props) => {
    if (props.color) {
      return css`
        background-color: ${props.color};
      `;
    } else {
      return css`
        background-color: ${colors.textColor.main};
      `;
    }
  }};
`;
