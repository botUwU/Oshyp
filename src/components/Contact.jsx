import React from "react";
import { Section } from "../GlobalStyle";
import { useScroll } from "../helper/useScroll";

export default function Contact() {
  const { contactRef } = useScroll();
  return <Section ref={contactRef}>Contact</Section>;
}
