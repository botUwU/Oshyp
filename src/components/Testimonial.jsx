/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useScroll } from "../helper/useScroll";
import { Section } from "../GlobalStyle";
import CTitle from "../customComponents/CTitle";
import styled from "styled-components";
import { colors } from "../constants/colors";
import Cp from "../customComponents/Cp";
import { useInView } from "react-intersection-observer";

export default function Testimonials() {
  const { testimonialsRef } = useScroll();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div style={{ backgroundColor: colors.backGroundColor.mainWhite }}>
      <Section ref={testimonialsRef} type="vertical">
        <Container ref={ref}>
          <CTitle inView={inView} isCentred variation="h1" color="primary">
            Témoignages
          </CTitle>

          <CTitle inView={inView} isCentred variation="h2" color="secondary">
            Voici ce que nos clients disent de nos services.
          </CTitle>

          <TestimonialWrapper>
            {/* Testimonial 1 */}
            <TestimonialCard>
              <Cp inView={inView} color="dark">
                "L'Ostéothérapie m'a permis de retrouver ma mobilité en quelques
                séances seulement. Miguel est très professionnel et
                attentionné."
              </Cp>
              <Author>– Jean Dupont</Author>
            </TestimonialCard>

            {/* Testimonial 2 */}
            <TestimonialCard>
              <Cp inView={inView} color="dark">
                "Le Shiatsu m'a vraiment aidé à réduire mon stress et à mieux
                gérer mon quotidien. Je recommande vivement !"
              </Cp>
              <Author>– Marie Leclerc</Author>
            </TestimonialCard>

            {/* Testimonial 3 */}
            <TestimonialCard>
              <Cp inView={inView} color="dark">
                "Un service exceptionnel ! Mes douleurs de dos ont quasiment
                disparu après quelques séances d'Ostéothérapie."
              </Cp>
              <Author>– Luc Martin</Author>
            </TestimonialCard>
          </TestimonialWrapper>
        </Container>
      </Section>
    </div>
  );
}

// Styled component for the testimonial container
const TestimonialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 20px;
`;

// Styled component for individual testimonials
const TestimonialCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backGroundColor.main};
  padding: 20px;
  width: 60%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px); /* Slight hover effect */
  }
`;

// Styled component for the author of the testimonial
const Author = styled.p`
  font-weight: bold;
  color: ${colors.primary};
  margin-top: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
`;
