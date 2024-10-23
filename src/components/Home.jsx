import React from "react";
import { useScroll } from "../helper/useScroll";
import { Section } from "../GlobalStyle";

export default function Home() {
  const { homeRef } = useScroll();
  return (
    <Section ref={homeRef} style={{ height: "100dvh" }}>
      Home
    </Section>
  );
}
