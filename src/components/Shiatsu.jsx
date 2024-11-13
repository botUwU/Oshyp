import React from "react";
import styled from "styled-components";
import CTitle from "../customComponents/CTitle";
import { useInView } from "react-intersection-observer";
import Cp from "../customComponents/Cp";
import { useScroll } from "../helper/useScroll";

export default function Shiatsu() {
  const { shiatsuRef } = useScroll();

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div ref={shiatsuRef}>
      <Container ref={ref}>
        <CTitle inView={inView} variation="h1" isCentred tracking="0.1em">
          Le Shiatsu
        </CTitle>
        <Cp
          inView={inView}
          color="secondary"
          size="xl_regular"
          tracking="0.1em"
          weight="SemiBold"
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          Prévenir pour ne pas avoir à guérir Dans la tradition Japonaise, le
          Shiatsu (pression avec les doigts) est une méthode basée sur la
          médecine traditionnelle chinoise (yin et yang, les 5 éléments,
          l&apos;énergie Ki…), elle a pour but de renforcer les défenses
          naturelles du corps humain en rééquilibrant l&apos;énergie qui le
          traverse afin de conserver une bonne santé et prévenir la maladie pour
          éviter d&apos;avoir ensuite à la soigner. Etre bien de corps et
          d&apos;esprit permet de mieux résister aux attaques de toutes sortes
          (maladie, stress, froid …).
        </Cp>
        <Cp
          inView={inView}
          color="main"
          size="lg_regular"
          tracking="0.15em"
          weight="SemiBold"
        >
          L&apos;initiative des Maîtres de Amma de fusionner le Amma (relaxation
          sur chaise japonais) avec le Tui-Na (massage chinois) est à
          l&apos;origine du Shiatsu au début du XXème siècle. Le Shiatsu est une
          méthode très complète, basée sur la pression et l&apos;étirement
          (trajet des méridiens et points d&apos;acupuncture), elle permet de
          traiter l&apos;être humain dans sa globalité (physique : en résorbant
          certaines sensations de gênes musculaires, articulaires, en renforçant
          ses défenses naturelles, en stimulant la circulation sanguine et
          lymphatique…) Cette méthode agit également au niveau psychique : en
          aidant à retrouver le sommeil, le calme, le dynamisme et en prévenant
          le stress ou les états dépressifs.... Au Japon, le Shiatsu est reconnu
          d&apos;utilité publique, il est pratiqué de façon régulière et à
          chaque intersaisons. Cette pratique est très appréciée par les adeptes
          des méthodes douces car elle procure une véritable sensation de bien
          être et de « lâcher prise », elle permet de libérer le corps de ses
          entraves qui peuvent être des sensations de blocages mécaniques,
          émotionnels ou mentaux faisant suites à des problèmes physiques et
          psychiques récents ou même très anciens, voir chroniques (la mémoire
          du corps). Cette restructuration permet de reprendre conscience de la
          totalité de son corps et du plaisir de bouger avec et par lui. La
          méthode SHIATSU que j&apos;utilise est le Zen Shiatsu de Shizuto
          Masunaga, mais certaines techniques sont aussi inspirées de Toru
          Namikoshi et I Nori.
        </Cp>
        <Cp
          inView={inView}
          weight="SemiBold"
          color="main"
          size="lg_regular"
          tracking="0.15em"
        >
          Le Shiatsu se pratique sur les vêtements (les prévoir souples et
          confortables), à même le sol sur futon ou sur table (ce qui est mon
          cas), il peut aussi être pratiqué sur chaise (Amma) mais la face
          antérieure du buste ainsi que certaines régions ne pourront être
          traitées.{" "}
        </Cp>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  line-height: 1.8;
`;
