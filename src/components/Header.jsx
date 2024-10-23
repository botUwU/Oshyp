// src/components/Header.js
// import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineMedicalServices } from "react-icons/md";
import { FaRegSmile } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import styled from "styled-components";
import Cp from "../customComponents/Cp";
import NavButton from "../customComponents/CNavButtons";
const Linkdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#home">
              <NavButton>
                <IoHomeOutline size={"30px"} />
                <Cp>Acceuil</Cp>
              </NavButton>
            </a>
          </li>
          <li>
            <a href="#services">
              <NavButton>
                <MdOutlineMedicalServices size={"30px"} />
                <Cp>Services</Cp>
              </NavButton>
            </a>
          </li>
          <li>
            <a href="#testimonials">
              <NavButton>
                <FaRegSmile size={"30px"} />
                <Cp>Témoignages</Cp>
              </NavButton>
            </a>
          </li>
          <li>
            <a href="#pricing">
              <NavButton>
                <MdAttachMoney size={"30px"} />
                <Cp>Tarifs</Cp>
              </NavButton>
            </a>
          </li>
          <li>
            <a href="#contact">
              <NavButton>
                <IoIosContact size={"30px"} />
                <Cp>Contact</Cp>
              </NavButton>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
