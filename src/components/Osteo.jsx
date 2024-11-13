import React from "react";
import { useInView } from "react-intersection-observer";
import CTitle from "../customComponents/CTitle";
import styled from "styled-components";
import Cp from "../customComponents/Cp";
import { useScroll } from "../helper/useScroll";

function Osteo() {
  const { osteoRef } = useScroll();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div ref={osteoRef}>
      <Container ref={ref}>
        <CTitle inView={inView} variation="h1" isCentred tracking="0.1em">
          L&apos;Ostéothérapie
        </CTitle>
        <Cp
          inView={inView}
          size="xl_regular"
          color="secondary"
          tracking="0.1em"
          weight="SemiBold"
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          Soulager la douleur et redonner de la mobilité Vous souhaitez soulager
          votre douleur le plus rapidement possible, en toute sécurité et avec
          le moins d’effets secondaires possibles ? Essayez
          l&apos;Ostéothérapie.
        </Cp>
        <Cp
          inView={inView}
          size="lg_regular"
          color="main"
          tracking="0.15em"
          weight="SemiBold"
        >
          L&apos;Ostéothérapie tissulaire réflexe est une thérapie manuelle
          associant plusieurs techniques dont l&apos;objectif principal est de
          soulager la douleur et redonner de la mobilité de façon la plus
          efficiente et efficace possible.
        </Cp>
        <Cp
          inView={inView}
          color="main"
          size="lg_regular"
          tracking="0.15em"
          weight="SemiBold"
        >
          C&apos;est une approche globale qui permet de libérer progressivement
          les articulations, de travailler sur les équilibres corporels et
          d&apos;éliminer les douleurs persistantes ainsi que les restrictions
          de mobilité. Les principales techniques utilisées dans la Méthode
          Béchacq sont : Les traits tirés inspirés de la méthode Bowen avec une
          approche douce sur la peau, les trigger points inspirés de la méthode
          Niromathé en agissant de façon vibratoire sur les tissus mous tels que
          les fascias, les muscles, les tendons, les ligaments... La méthode
          Dorn qui permet de résoudre les problèmes ostéo-articulaires grâce à
          un rééquilibre structurel, cette technique produit les mêmes résultats
          que l&apos;ostéopathie ou la chiropractie mais de manière plus douce,
          sans mobilisation vertébrale ou « Trust » et qui est par conséquent
          sans aucun risque, le toucher est doux, ce qui n’est pas toujours vrai
          pour les manipulations structurelles. La méthode Knap en intervenant
          sur des points qui peuvent être des blocages énergétiques, des
          adhérences, des centres nerveux... La Médecine Traditionnelle
          Chinoise, en utilisant certains points et méridiens
          d&apos;acupuncture. A la fin de chaque séance, il vous sera donné des
          exercices d&apos;autocorrection, des étirements ou des exercices
          respiratoires et des conseils en posturologie dans le but conserver de
          façon durable les effets de la séance. Ces exercices vous permettront
          également de prévenir et de soulager vous-même certains problèmes en
          cas de récidive. Une à trois séances sont suffisantes dans 80% des cas
          pour l’amélioration de vos symptômes, voir leurs disparitions. méthode
          est adaptée aux enfants et aux personnes plus âgées ou en état de
          faiblesse. Cette L&apos;Ostéothérapie, comme toutes les thérapie
          manuelles permet de soulager la douleur, de redonner de la mobilité et
          d&apos;accélérer le processus de guérison, mais un investissement de
          votre part est nécessaire pour conserver les effets de la séance et
          éviter que le problème ne revienne. C&apos;est pour cela qu&apos;il
          vous faudra prendre soin de vous et de votre corps, en pratiquant une
          activité physique régulière, certains exercices et des étirements, en
          vous hydratant correctement et vous reposant lorsque bien sur cela
          vous est possible. Dans le cas de tendinites par exemple, même si la
          douleur est soulagée et que vous avez de nouveau de l&apos;amplitude
          dans vos mouvements dans les 48 à 72 h après la séance, il faudra
          attendre plusieurs semaines pour que les tendons se réparent et
          pratiquer une activité réduite, progressive et sans douleur pendant
          cette période.
        </Cp>
        <Cp
          inView={inView}
          size="xl_regular"
          color="secondary"
          tracking="0.1em"
          weight="SemiBold"
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          Que peut soulager l&apos;Ostéothérapie ?
        </Cp>
        <Cp
          inView={inView}
          size="lg_regular"
          color="main"
          tracking="0.15em"
          weight="SemiBold"
        >
          Cervicalgie / Cervicarthrose / Névralgie d’Arnold / Névralgie
          cervico-brachiale / Vertiges Positionnels / Acouphènes / Capsulite
          rétractile / Bursite (gonflement) / Épicondylite / Sciatique /
          Cruralgie / Rhizarthrose /Coxarthrose/ Lombalgies/ Discopathies /
          Canal lombaire étroit / Épine Calcanéenne / Canal Carpien / Céphalée /
          Migraine / Entorse / Torticolis / Torticolis Congénital / Insomnie /
          Problèmes digestifs / Problèmes respiratoires (Asthme,Emphysème …) ...
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

export default Osteo;
