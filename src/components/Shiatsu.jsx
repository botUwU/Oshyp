import React from "react";
import styled from "styled-components";
import CTitle from "../customComponents/CTitle";
import { useInView } from "react-intersection-observer";

export default function Shiatsu() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <Container ref={ref}>
      <CTitle inView={inView} variation="h1" isCentred tracking="0.1em">
        Le Shiatsu
      </CTitle>
    </Container>
  );
}

const Container = styled.div``;
