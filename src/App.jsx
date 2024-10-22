// src/App.js
// import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import "./styles.css";
// eslint-disable-next-line no-unused-vars
import GlobalStyle from "./GlobalStyle";
import { BiFontSize } from "react-icons/bi";
import styled from "styled-components";
import CTitle from "./customComponents/CTitle";
const StyledImage = styled.img`
  width: 50%;
  height: 50%;
`;
const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />

      {/* Sections */}
      <Section id="home" title="Accueil">
        <StyledDescription>
          <CTitle variation="h1" color="primary">
            {" "}
            Soulagez votre douleur et retrouvez votre mobilité avec
            l’Ostéothérapie et le Shiatsu
          </CTitle>
          <CTitle variation="h2" color="secondary">
            Découvrez des traitements naturels et efficaces pour les problèmes
            musculo-squelettiques et améliorez votre bien-être global
          </CTitle>
        </StyledDescription>
        {/* <p style={{ fontSize: "24px" }}>speed</p> */}
        <img src="src\data\water.png" alt="" />
      </Section>

      <Section id="services" title="Nos Services">
        <p>Découvrez nos services d’Ostéothérapie et Shiatsu.</p>
      </Section>

      <Section id="testimonials" title="Témoignages">
        <p>Nos clients partagent leurs expériences positives.</p>
      </Section>

      <Section id="pricing" title="Tarifs">
        <p>Ostéothérapie : 6000 TND, Shiatsu : 6000 TND</p>
      </Section>

      <Section id="contact" title="Contact">
        <p>Téléphone: +216 646870652 | Email: oshypmd@gmail.com</p>
      </Section>

      <Footer />
    </div>
  );
}

export default App;
