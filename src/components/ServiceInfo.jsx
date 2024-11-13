import React from "react";
import { Section } from "../GlobalStyle";
import styled from "styled-components";
import Shiatsu from "./Shiatsu";
import Osteo from "./Osteo";
import Separator from "../customComponents/Separator";

export default function ServiceInfo() {
  return (
    <WrapperContainer>
      <Section>
        <Container>
          <Shiatsu></Shiatsu>
          <Separator></Separator>
          <Osteo></Osteo>
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
