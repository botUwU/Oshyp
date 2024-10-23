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


const Header = () => {
  const {
    homeRef,
    pricingRef,
    servicesRef,
    testimonialsRef,
    contactRef,
    scrollToSection,
  } = useScroll();
  return (
    <Headercontainer>
      <nav>
        <UL>
          <HeaderItem name="Accueil" onScroll={() => scrollToSection(homeRef)}>
            <IoHomeOutline size={"30px"} />
          </HeaderItem>

          <HeaderItem
            name="Services"
            onScroll={() => scrollToSection(servicesRef)}
          >
            <MdOutlineMedicalServices size={"30px"} />
          </HeaderItem>

          <HeaderItem
            name="Testimonials"
            onScroll={() => scrollToSection(testimonialsRef)}
          >
            <FaRegSmile size={"30px"} />
          </HeaderItem>

          <HeaderItem name="Prix" onScroll={() => scrollToSection(pricingRef)}>
            <MdAttachMoney size={"30px"} />
          </HeaderItem>

          <HeaderItem
            name="Contact"
            onScroll={() => scrollToSection(contactRef)}
          >
            <IoIosContact size={"30px"} />
          </HeaderItem>
        </UL>

      </nav>
    </Headercontainer>
  );
};

export default Header;

const Headercontainer = styled.header`
  background-color: ${colors.backGroundColor.main};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.textColor.main};
  width: 100%;
  padding: 12px 18px;
  box-shadow: 0px 8px 10.32px rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
`;
const UL = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
  gap: 60px;
`;
