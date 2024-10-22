// src/components/Header.js
// import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineMedicalServices } from "react-icons/md";
import { FaRegSmile } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import styled from "styled-components";
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
              <Linkdiv>
                <IoHomeOutline size={"30px"} />
                <p>Acceuil</p>
              </Linkdiv>
            </a>
          </li>
          <li>
            <a href="#services">
              <Linkdiv>
                <MdOutlineMedicalServices size={"30px"} />
                <p>Services</p>
              </Linkdiv>
            </a>
          </li>
          <li>
            <a href="#testimonials">
              <Linkdiv>
                <FaRegSmile size={"30px"} />
                <p>Témoignages</p>
              </Linkdiv>
            </a>
          </li>
          <li>
            <a href="#pricing">
              <Linkdiv>
                <MdAttachMoney size={"30px"} />
                <p>Tarifs</p>
              </Linkdiv>
            </a>
          </li>
          <li>
            <a href="#contact">
              <Linkdiv>
                <IoIosContact size={"30px"} />
                <p>Contact</p>
              </Linkdiv>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
