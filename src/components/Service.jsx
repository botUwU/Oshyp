import React from "react";
import { useScroll } from "../helper/useScroll";
import { Section } from "../GlobalStyle";

export default function Service() {
  const { servicesRef } = useScroll();
  return <Section ref={servicesRef}>Service</Section>;
}
