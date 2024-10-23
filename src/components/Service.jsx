/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useScroll } from "../helper/useScroll";
import { Section } from "../GlobalStyle";
import CTitle from "../customComponents/CTitle";
import { colors } from "../constants/colors";
import styled from "styled-components";
import Cp from "../customComponents/Cp";
import CImage from "../customComponents/CImage";

export default function Service() {
  const {
    servicesRef,
    contactRef,
    scrollToSection,
    testimonialsRef,
    pricingRef,
    homeRef,
  } = useScroll();
  return (
    <Section ref={servicesRef}>
      <Title>
        <CTitle isCentred variation="h1" color="primary">
          Nos Services
        </CTitle>
        <CTitle isCentred variation="h2" color="secondary">
          Nous offrons une gamme de traitements efficaces pour soulager la
          douleur et améliorer la santé générale.
        </CTitle>
      </Title>
    </Section>
  );
}
const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

// <ServicesSection
//   color={colors.backGroundColor.white}
//   ref={servicesRef}
//   type="vertical"
// >

//   <Services>
//     <ServiceInfo
//       onClick={() => {
//         scrollToSection(pricingRef);
//       }}
//     >
//       <CTitle variation="h2" color="primary">
//         Ostéothérapie
//       </CTitle>
//       <CTitle variation="h3" color="secondary">
//         L'ostéothérapie est une méthode douce et non invasive qui aide à
//         soulager la douleur et à restaurer la mobilité. Elle traite des
//         problèmes tels que les cervicalgies, les migraines, les sciatiques,
//         et plus encore.
//       </CTitle>
//       <Images>
//         <CImage src={"src/data/image2.png"} />
//         <CImage src={"src/data/image3.png"} />
//       </Images>
//     </ServiceInfo>

//     <ServiceInfo>
//       <CTitle variation="h2" color="primary">
//         Shiatsu
//       </CTitle>
//       <CTitle variation="h3" color="secondary">
//         Le Shiatsu est une thérapie manuelle d'origine japonaise, qui aide à
//         rétablir l'équilibre énergétique du corps. Il est particulièrement
//         efficace pour réduire le stress, améliorer la circulation, et
//         renforcer les défenses naturelles du corps.
//       </CTitle>
//       <Images>
//         <CImage src={"src/data/image1.png"} />
//         <CImage src={"src/data/image0.png"} />
//       </Images>
//     </ServiceInfo>
//   </Services>
// </ServicesSection>
// Extending Section to add gap and other custom styles
// const ServicesSection = styled(Section)`
//   margin-top: 5px;
//   gap: 10px;
// `;

// // Styling for services container
// const Services = styled.div`
//   display: flex;
//   gap: 100px;
//   flex-direction: row;
//   justify-content: space-around;
// `;

// // Styling for individual service info
// const ServiceInfo = styled.div`
//   width: 40%;
//   display: flex;
//   flex-direction: column;
//   /* max-width: 400px; */
//   padding: 1rem;
//   background-color: #fff;
//   box-shadow: 10px 14px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
//   border: 2px solid transparent; /* Start with transparent border */
//   transition: border 0.3s ease, box-shadow 0.3s ease; /* Add transition for smooth animation */

//   display: flex;
//   flex-direction: column;
//   padding: 1rem;
//   background-color: #fff;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
//   border: 2px solid transparent; /* Start with transparent border */
//   transition: border 0.3s ease, box-shadow 0.3s ease; /* Add transition for smooth animation */

//   /* Hover effect to animate the border and increase the shadow */
//   &:hover {
//     border: 2px solid ${colors.primary}; /* Change border color on hover */
//     box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Increase shadow on hover */
//   }

//   /* Hover effect to animate the border and increase the shadow */
//   &:hover {
//     cursor: pointer;
//     border: 2px solid ${colors.primary}; /* Change border color on hover */
//     box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Increase shadow on hover */
//   }
// `;
// const Images = styled.div`
//   display: flex;
//   flex-direction: row;
//   margin-top: 20px;
//   gap: 30px;
// `;
