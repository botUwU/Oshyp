import React from "react";
import { useScroll } from "../helper/useScroll";
import { Section } from "../GlobalStyle";

export default function Testimonial() {
  const { testimonialsRef } = useScroll();
  return <Section ref={testimonialsRef}>Testimonial</Section>;
}
