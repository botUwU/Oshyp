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
          <Cp inView={inView} color="white" weight="Bold" size="lg_regular">
            {name}
          </Cp>
        </Linkdiv>
      </li>
    </div>
  );
}

const Linkdiv = styled.div`
  margin: 10px 0px;
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
  border: 2px solid transparent; /* Initial transparent border */

  /* Add transition to border color */
  transition: border-color 0.5s ease, opacity 0.6s ease-out,
    transform 0.6s ease-out;

  /* Hover effect on border */
  &:hover {
    border-color: white; /* Change border color on hover */
  }

  /* Initial appearance animation */
  opacity: 0;
  transform: translateY(50px);

  /* Control appearance based on props */
  ${(props) => {
    if (props.inView) {
      return css`
        opacity: 1;
        transform: translateY(0);
      `;
    } else {
      return css`
        opacity: 0;
        transform: translateY(50px);
      `;
    }
  }}
`;
