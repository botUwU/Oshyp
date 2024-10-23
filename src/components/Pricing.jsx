import React from "react";
import { useScroll } from "../helper/useScroll";
import { Section } from "../GlobalStyle";

export default function Pricing() {
  const { pricingRef } = useScroll();
  return <Section ref={pricingRef}>Pricing</Section>;
}
