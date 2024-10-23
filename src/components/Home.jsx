// import React from "react";
// import { useScroll } from "../helper/useScroll";
// import { Section } from "../GlobalStyle";
// import CTitle from "../customComponents/CTitle";
// import styled from "styled-components";
// import { colors } from "../constants/colors";
// import CImage from "../customComponents/CImage";
// import Cbutton from "../customComponents/Cbutton";
// import Cp from "../customComponents/Cp";
// const Description = styled.div`
//   height: 100%;
//   width: 50%;
//   /* border: 1px solid red; */
//   margin: 5px;
//   display: flex;
//   flex-direction: column;
//   align-items: start;
//   justify-content: center;
//   gap: 30px;
// `;
// const HomeSection = styled(Section)``;
// export default function Home() {
//   const {
//     homeRef,
//     scrollToSection,
//     servicesRef,
//     contactRef,
//     testimonialsRef,
//     pricingRef,
//   } = useScroll();
//   return (
//     <HomeSection
//       ref={homeRef}
//       style={{ height: "100vh" }}
//       color={colors.backGroundColor.mainWhite}
//     >
//       <Description>
//         <CTitle variation="h1" color="primary">
//           Rencontrez Miguel Duenas{" "}
//         </CTitle>
//         <CTitle variation="h2" color="secondary">
//           Découvrez des traitements naturels et efficaces pour les douleurs
//           musculo-squelettiques et améliorez votre bien-être général.{" "}
//         </CTitle>
//         <Cbutton
//           variation="secondary"
//           onClick={() => {
//             scrollToSection(servicesRef);
//           }}
//         >
//           <Cp color="white">En savoir plus sur nos services</Cp>
//         </Cbutton>
//       </Description>
//       <CImage
//         src="src\data\image.png"
//         height={"50%"}
//         width={"20%"}
//         rounded={false}
//       />
//     </HomeSection>
//   );
// }

import React from "react";
import { useScroll } from "../helper/useScroll";
import { Section } from "../GlobalStyle";
import CTitle from "../customComponents/CTitle";
import styled from "styled-components";
import { colors } from "../constants/colors";

import CImage from "../customComponents/CImage";
import Cbutton from "../customComponents/Cbutton";
import Cp from "../customComponents/Cp";
const Description = styled.div`
  height: 100%;
  width: 50%;
  /* border: 1px solid red; */
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 30px;
`;
export default function Home() {
  const {
    homeRef,
    scrollToSection,
    servicesRef,
    contactRef,
    testimonialsRef,
    pricingRef,
  } = useScroll();
  return (
    <Section
      ref={homeRef}
      style={{ height: "100dvh" }}
      color={colors.backGroundColor.mainWhite}
    >
      <Description>
        <CTitle variation="h1" color="primary">
          Rencontrez Miguel Duenas{" "}
        </CTitle>
        <CTitle variation="h2" color="secondary">
          Découvrez des traitements naturels et efficaces pour les douleurs
          musculo-squelettiques et améliorez votre bien-être général.{" "}
        </CTitle>
        <Cbutton
          variation="secondary"
          onClick={() => {
            scrollToSection(servicesRef);
          }}
        >
          <Cp color="white">En savoir plus sur nos services → </Cp>
        </Cbutton>
      </Description>
      <CImage
        src="src\data\image.png"
        height={"50%"}
        width={"20%"}
        rounded={false}
      />
    </Section>
  );
}
