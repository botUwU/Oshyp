// src/App.js
// import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />

      {/* Sections */}
      <Section id="home" title="Accueil">
        <p>Bienvenue sur le site d’Ostéothérapie et de Shiatsu.</p>
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
