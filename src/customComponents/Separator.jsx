import React from "react";
import styled, { css } from "styled-components";
import { colors } from "../constants/colors";
import { useInView } from "react-intersection-observer";

export default function Separator({ shrunk }) {
  return <Sep shrunk={shrunk}></Sep>;
}

const Sep = styled.div`
  ${(props) => {
    if (props.shrunk) {
      return css`
        display: none;
      `;
    }
  }}
  transition: opacity 0.3s ease, transform 0.3s ease;
  width: 100%;
  height: 2px;
  background-color: ${colors.textColor.white};
`;
