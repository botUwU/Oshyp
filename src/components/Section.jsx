/* eslint-disable react/prop-types */
// src/components/Section.js
// import React from "react";

import styled from "styled-components";
import CTitle from "../customComponents/CTitle";
const CustomSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Section = ({ id, children }) => {
  return (
    <CustomSection id={id}>
      <div>{children}</div>
    </CustomSection>
  );
};

export default Section;
