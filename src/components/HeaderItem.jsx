import React from "react";
import styled, { css } from "styled-components";
import Cp from "../customComponents/Cp";

export default function HeaderItem({
  inView,
  children,
  name,

  onScroll = () => {},
}) {
  return (
    <div style={{ cursor: "pointer" }} onClick={onScroll}>
      <li>
        <Linkdiv inView={inView}>
          {children}
          <Cp inView={inView} color="main" weight="Bold" size="lg_regular">
            {name}
          </Cp>
        </Linkdiv>
      </li>
    </div>
  );
}

const Linkdiv = styled.div`
  border-radius: 20%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 10px 20px;
  overflow: hidden;
  z-index: 1; /* Ensure text is above the background */

  /* Add transition to text color */
  transition: color 0.4s ease;

  &:hover {
    color: #15423d; /* Optional: Change text color on hover */
  }

  /* Pseudo-element for hover background animation */
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0%; /* Start at 0% height */
    background-color: white;
    z-index: -1; /* Behind the text */
    transition: height 0.5s ease; /* Smoothly transition height */
  }

  /* On hover, expand the height from 0% to 100% */
  &:hover::before {
    height: 100%; /* Cover the entire button */
  }
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  ${(props) => {
    if (props.inView) {
      return css`
        opacity: 1;
        transform: translateY(0);
      `;
    } else {
      return css`
        opacity: 0;
        transform: translateY(50);
      `;
    }
  }}
`;
