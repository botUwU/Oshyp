// src/components/Header.js
// import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineMedicalServices } from "react-icons/md";
import { FaRegSmile } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import styled from "styled-components";
import { useScroll } from "../helper/useScroll";
import HeaderItem from "./HeaderItem";
import { colors } from "../constants/colors";
import { useInView } from "react-intersection-observer";
import BusinessCard from "./BusinessCard";
const Header = () => {
  const {
    homeRef,
    pricingRef,
    servicesRef,
    testimonialsRef,
    businessCardRef,
    scrollToSection,
  } = useScroll();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  return (
    <div
      style={{
        backgroundColor: colors.backGroundColor.mainWhite,
        zIndex: 10,
      }}
      ref={ref}
    >
      <Headercontainer>
        <nav>
          <UL>
            <HeaderItem
              inView={inView}
              name="Accueil"
              onScroll={() => scrollToSection(homeRef)}
            >
              <IoHomeOutline size={"30px"} />
            </HeaderItem>

            <HeaderItem
              inView={inView}
              name="Services"
              onScroll={() => scrollToSection(servicesRef)}
            >
              <MdOutlineMedicalServices size={"30px"} />
            </HeaderItem>

            <HeaderItem
              inView={inView}
              name="Testimonials"
              onScroll={() => scrollToSection(testimonialsRef)}
            >
              <FaRegSmile size={"30px"} />
            </HeaderItem>

            <HeaderItem
              inView={inView}
              name="Tarifs"
              onScroll={() => scrollToSection(pricingRef)}
            >
              <MdAttachMoney size={"30px"} />
            </HeaderItem>

            <HeaderItem
              inView={inView}
              name="Contact"
              onScroll={() => scrollToSection(businessCardRef)}
            >
              <IoIosContact size={"30px"} />
            </HeaderItem>
          </UL>
        </nav>
      </Headercontainer>
    </div>
  );
};

export default Header;

const Headercontainer = styled.header`
  background-color: ${colors.backGroundColor.cyan};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.textColor.main};
  width: 100%;
  padding: 12px 18px;
  box-shadow: 0px 8px 10.32px rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  z-index: 10;
  @media (max-width: 900px) {
    border-bottom-left-radius: 60px;
    border-bottom-right-radius: 60px;
    padding: 12px 32px;
  }
`;
const UL = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
  gap: 60px;
  @media (max-width: 900px) {
    gap: 30px;
  }
`;
