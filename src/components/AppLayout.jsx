import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Main from "./Main";
import ScrollProvider from "./RefContext";

export default function AppLayout() {
  return (
    <ScrollProvider>
      <Container>
        <Header />
        <Main />
      </Container>
    </ScrollProvider>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;
