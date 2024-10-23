/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useScroll } from "../helper/useScroll";
import { Section } from "../GlobalStyle";
import CTitle from "../customComponents/CTitle";
import { colors } from "../constants/colors";
import styled from "styled-components";
import Cp from "../customComponents/Cp";
import CImage from "../customComponents/CImage";
import Separator from "../customComponents/Separator";

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
    <div>
      <Section ref={servicesRef}>
        <div
          style={{
            padding: "60px 60px",
            gap: "300px",
            display: "flex",
          }}
        >
          <Title>
            <CTitle isCentred tracking="0.15em" variation="h1" color="primary">
              Nos Services
            </CTitle>
            <CTitle isCentred tracking="0.2em" variation="h2" color="secondary">
              Nous offrons une gamme de traitements efficaces pour soulager la
              douleur et améliorer la santé générale.
            </CTitle>
            <Separator></Separator>
            <InfoContainer>
              <CTitle
                mb={"100px"}
                tracking="0.1em"
                isCentred
                variation="h2"
                color="primary"
              >
                Ostéothérapie
              </CTitle>
              <GridContainer>
                <Cp
                  color="main"
                  size="xl_regular"
                  weight="Bold"
                  tracking="0.2em"
                  isCentred
                >
                  L'ostéothérapie est une méthode douce et non invasive qui aide
                  à soulager la douleur et à restaurer la mobilité.
                </Cp>
                <CImage
                  src={"src/data/image2.png"}
                  height={"250px"}
                  fit="cover"
                  shadow={"small"}
                />
                <CImage
                  src={"src/data/image3.png"}
                  height={"250px"}
                  fit="cover"
                  shadow={"small"}
                />
                <Cp
                  color="main"
                  size="xl_regular"
                  weight="Bold"
                  tracking="0.2em"
                  isCentred
                >
                  Elle traite des problèmes tels que les cervicalgies, les
                  migraines, les sciatiques, et plus encore.
                </Cp>
              </GridContainer>
            </InfoContainer>
            <Separator></Separator>
            <InfoContainer>
              <CTitle
                tracking="0.1em"
                mb={"100px"}
                isCentred
                variation="h2"
                color="primary"
              >
                Shiatsu
              </CTitle>
              <GridContainer>
                <Cp
                  color="main"
                  size="xl_regular"
                  weight="Bold"
                  tracking="0.2em"
                  isCentred
                >
                  Le Shiatsu est une thérapie manuelle d'origine japonaise, qui
                  aide à rétablir l'équilibre énergétique du corps.
                </Cp>
                <CImage
                  src={"src/data/image0.png"}
                  height={"250px"}
                  fit="cover"
                  shadow={"small"}
                />
                <CImage
                  src={"src/data/image1.png"}
                  height={"250px"}
                  fit="cover"
                  shadow={"small"}
                />
                <Cp
                  color="main"
                  size="xl_regular"
                  weight="Bold"
                  tracking="0.2em"
                  isCentred
                >
                  Il est particulièrement efficace pour réduire le stress,
                  améliorer la circulation, et renforcer les défenses naturelles
                  du corps.
                </Cp>
              </GridContainer>
            </InfoContainer>
          </Title>
        </div>
      </Section>
    </div>
  );
}
const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  justify-items: center;
  gap: 30px;
  row-gap: 100px;
  line-height: 2.5;
`;
const InfoContainer = styled.div``;
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
