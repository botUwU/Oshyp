/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { useScroll } from "../helper/useScroll";
import { Section } from "../GlobalStyle";
import CTitle from "../customComponents/CTitle";
import styled from "styled-components";
import { colors } from "../constants/colors";
import Cp from "../customComponents/Cp";
import { useInView } from "react-intersection-observer";
import Cbutton from "../customComponents/Cbutton";
import Modal from "./Modal";
import TestimonialFeedBack from "./TestimonialFeedBack";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useFeedBack } from "../hooks/useFeedBack";

export default function Testimonials() {
  const [showFeedbacks, setShowfeedbacks] = useState(false);
  const { testimonialsRef } = useScroll();
  const { feedbacks, isLoading } = useFeedBack();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div style={{ backgroundColor: colors.backGroundColor.mainWhite }}>
      <TestomonialSection ref={testimonialsRef} type="vertical">
        <Container ref={ref}>
          <CTitle inView={inView} isCentred variation="h1" color="primary">
            Témoignages
          </CTitle>

          <CTitle inView={inView} isCentred variation="h2" color="secondary">
            Voici ce que nos clients disent de nos services.
          </CTitle>

          <TestimonialWrapper>
            <TestimonialCard>
              <Cp inView={inView} color="dark">
                "L'Ostéothérapie m'a permis de retrouver ma mobilité en quelques
                séances seulement. Miguel est très professionnel et
                attentionné."
              </Cp>
              <Author>– Jean </Author>
            </TestimonialCard>

            <TestimonialCard>
              <Cp inView={inView} color="dark">
                "Le Shiatsu m'a vraiment aidé à réduire mon stress et à mieux
                gérer mon quotidien. Je recommande vivement !"
              </Cp>
              <Author>– Marie </Author>
            </TestimonialCard>

            <TestimonialCard>
              <Cp inView={inView} color="dark">
                "Un service exceptionnel ! Mes douleurs de dos ont quasiment
                disparu après quelques séances d'Ostéothérapie."
              </Cp>
              <Author>– Luc </Author>
            </TestimonialCard>

            {showFeedbacks &&
              feedbacks.slice(3).map((feedback) => (
                <TestimonialCard key={feedback.id}>
                  <Cp inView={inView} color="dark">
                    {feedback.description}
                  </Cp>
                  <Author>– {feedback.name} </Author>
                </TestimonialCard>
              ))}
            <Cbutton
              variation="secondary"
              onClick={() => setShowfeedbacks((state) => !state)}
            >
              {!showFeedbacks ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
            </Cbutton>
            <Modal>
              <Modal.Open opens="testimonials">
                <Cbutton variation="secondary" inView={inView}>
                  <Cp color="white" inView={inView}>
                    Laisser un testimonial
                  </Cp>
                </Cbutton>
              </Modal.Open>
              <Modal.Window name="testimonials">
                <TestimonialFeedBack />
              </Modal.Window>
            </Modal>
          </TestimonialWrapper>
        </Container>
      </TestomonialSection>
    </div>
  );
}

// Styled component for the testimonial container
const TestimonialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 0;
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
  @media (max-width: 950px) {
    width: 90%;
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
const TestomonialSection = styled(Section)`
  min-height: auto;
`;
