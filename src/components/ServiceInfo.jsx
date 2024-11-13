import React from "react";
import { Section } from "../GlobalStyle";
import styled, { css } from "styled-components";
import Shiatsu from "./Shiatsu";
import Osteo from "./Osteo";
import Separator from "../customComponents/Separator";

export default function ServiceInfo() {
  const mediaQueries = [
    {
      width: "900px",
      styles: css`
        padding: 30px 30px;
        min-height: auto;
      `,
    },
  ];
  return (
    <WrapperContainer>
      <Section mediaQueries={mediaQueries}>
        <Container>
          <Osteo></Osteo>
          <Separator></Separator>
          <Shiatsu></Shiatsu>
        </Container>
      </Section>
    </WrapperContainer>
  );
}

const WrapperContainer = styled.div``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 50px;
`;
