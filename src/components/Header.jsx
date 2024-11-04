import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineMedicalServices } from "react-icons/md";
import { FaRegSmile } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import styled, { css } from "styled-components";
import { useScroll } from "../helper/useScroll";
import HeaderItem from "./HeaderItem";
import { colors } from "../constants/colors";
import { useInView } from "react-intersection-observer";
import Separator from "../customComponents/Separator";
import CTitle from "../customComponents/CTitle";
import { useEffect, useState } from "react";
const Header = () => {
  const [isShrunk, setIsShrunk] = useState(true);
  const handleScroll = () => {
    if (window.scrollY > 80) {
      setIsShrunk(true);
    } else {
      setIsShrunk(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
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
        position: "fixed",
        zIndex: 10,
        width: "100%",
        marginTop: "-8px",
      }}
    >
      <Headercontainer ref={ref}>
        <HeaderTitle shrunk={isShrunk}>
          <CTitle
            inView={inView}
            isCentred
            variation="h1"
            color="secondary"
            tracking="0.1em"
          >
            OSHYP
          </CTitle>
          <CTitle inView={inView} color="white" tracking="0.1em" variation="h2">
            Miguel Duenas
          </CTitle>
        </HeaderTitle>
        <Separator shrunk={isShrunk}></Separator>
        <nav>
          <UL>
            <HeaderItem
              inView={inView}
              name="Accueil"
              onScroll={() => scrollToSection(homeRef)}
            >
              <IoHomeOutline size={"30px"} color="white" />
            </HeaderItem>

            <HeaderItem
              inView={inView}
              name="Services"
              onScroll={() => scrollToSection(servicesRef)}
            >
              <MdOutlineMedicalServices size={"30px"} color="white" />
            </HeaderItem>

            <HeaderItem
              inView={inView}
              name="Testimonials"
              onScroll={() => scrollToSection(testimonialsRef)}
            >
              <FaRegSmile size={"30px"} color="white" />
            </HeaderItem>

            <HeaderItem
              inView={inView}
              name="Tarifs"
              onScroll={() => scrollToSection(pricingRef)}
            >
              <MdAttachMoney size={"30px"} color="white" />
            </HeaderItem>

            <HeaderItem
              inView={inView}
              name="Contact"
              onScroll={() => scrollToSection(businessCardRef)}
            >
              <IoIosContact size={"30px"} color="white" />
            </HeaderItem>
          </UL>
        </nav>
      </Headercontainer>
    </div>
  );
};

export default Header;

const Headercontainer = styled.header`
  background-image: url("/berka.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.textColor.main};
  width: 100%;
  padding: 0 18px;
  box-shadow: 0px 8px 10.32px rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  @media (max-width: 900px) {
    border-bottom-left-radius: 60px;
    border-bottom-right-radius: 60px;
    padding: 12px 32px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3); // Adjust opacity as needed
    z-index: 1;
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
    @media (max-width: 900px) {
      border-bottom-left-radius: 60px;
      border-bottom-right-radius: 60px;
    }
  }
  & > * {
    position: relative;
    z-index: 2;
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
  @media (max-width: 800px) {
    gap: 10px;
  }
  @media (max-width: 600px) {
    gap: 5px;
  }
`;

const HeaderTitle = styled.div`
  ${(props) => {
    if (props.shrunk) {
      return css`
        opacity: 0;
        max-height: 0;
        padding: 0 0;
      `;
    } else {
      return css`
        opacity: 1;
        max-height: 200px;
        padding: 16px 0px;
      `;
    }
  }}

  overflow: hidden;
  transition: opacity 0.5s ease, max-height 0.5s ease, padding 0.5s ease;
`;
