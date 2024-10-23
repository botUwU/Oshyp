import React from "react";
import styled from "styled-components";
import Cp from "../customComponents/Cp";

export default function HeaderItem({ children, name, onScroll = () => {} }) {
  const Linkdiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  return (
    <div style={{ cursor: "pointer" }} onClick={onScroll}>
      <li>
        <Linkdiv>
          {children}
          <Cp color="main" weight="Bold" size="lg_regular">
            {name}
          </Cp>
        </Linkdiv>
      </li>
    </div>
  );
}
