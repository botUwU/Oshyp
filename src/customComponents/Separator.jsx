import React from "react";
import styled from "styled-components";
import { colors } from "../constants/colors";

export default function Separator() {
  return <Sep></Sep>;
}

const Sep = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${colors.textColor.main};
`;
