import React from "react";
import { useInView } from "react-intersection-observer";
import CTitle from "../customComponents/CTitle";
import styled from "styled-components";

function Osteo() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <Container ref={ref}>
      <CTitle inView={inView} variation="h1" isCentred tracking="0.1em">
        L&apos;Ostéothérapie
      </CTitle>
    </Container>
  );
}

const Container = styled.div``;

export default Osteo;
