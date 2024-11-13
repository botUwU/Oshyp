import React from "react";
import styled, { css } from "styled-components";
import { Section } from "../GlobalStyle";
import CTitle from "../customComponents/CTitle";
import { useInView } from "react-intersection-observer";
import Cp from "../customComponents/Cp";
import { useScroll } from "../helper/useScroll";

export default function WhoAmI() {
  const { whoAmIRef } = useScroll();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const mediaQueries = [
    {
      width: "900px",
      styles: css`
        padding: 30px 30px;
        min-height: auto;
      `,
    },
  ];
  return (
    <WrapperContainer ref={ref}>
      <Section ref={whoAmIRef} mediaQueries={mediaQueries}>
        <Container>
          <CTitle inView={inView} variation="h1" color="primary" isCentred>
            Qui suis-je ?
          </CTitle>
          <Bonjour>
            <CTitle inView={inView} variation="h2" color="secondary">
              Bonjour
            </CTitle>
            <CTitle inView={inView} variation="h2" color="secondary">
              Je suis Miguel Duenas.
            </CTitle>
          </Bonjour>
          <Cp
            weight="Bold"
            inView={inView}
            color="main"
            size="xxl_regular"
            tracking="0.1em"
          >
            Il y a déjà plus de 20 ans maintenant que je me suis formé au
            Shiatsu, c&apos;est une thérapie manuelle très efficace procurant un
            état profond relaxation, elle permet de maintenir un bon équilibre
            général, énergétique, ostéoarticulaire et peut également prévenir
            certaines maladies si elle est pratiquée de façon régulière et aux
            changements de saisons en renforçant les défenses immunitaires. Lors
            de ces séances, de nombreuses personnes me sollicitaient concernant
            certaines pathologies, douleurs, blocages articulaires... mais je
            n&apos;avais ni les connaissances, ni les compétences pour répondre
            à un grand nombre de ces besoins. J&apos;ai alors décidé de me
            former à l&apos;Ostéothérapie Tissulaire Réflexe (méthode Béchacq),
            cette thérapie manuelle très efficace et efficiente permet
            principalement de soulager la douleur et redonner de la mobilité en
            intervenant sur de nombreuses pathologies ou problèmes
            musculo-squelettiques, c&apos;est une méthode douce et sans aucun
            risque. Grâce à ces différentes méthodes, j&apos;ai maintenant
            plusieurs outils complémentaires me permettant de répondre à divers
            types de demandes et soulager de nombreux maux.
          </Cp>
        </Container>
      </Section>
    </WrapperContainer>
  );
}

const WrapperContainer = styled.div``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 50px;
`;
const Bonjour = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;
`;
