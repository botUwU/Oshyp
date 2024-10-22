// src/components/NavButton.js
import styled from "styled-components";

const NavButton = styled.a`
  position: relative;
  display: inline-block;
  padding: 8px 18px;
  color: #15423d; /* Text color */
  font-size: 1.2rem;
  text-decoration: none;
  overflow: hidden;
  z-index: 1; /* Ensure text is above the background */
  border-radius: 20px;
  transition: color 0.8s ease;

  /* The hover state changes the text color */
  &:hover {
    color: #15423d;
  }

  /* Creating the before pseudo-element for the background animation */
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0%; /* Start at 0% height */
    background-color: white;
    z-index: -1; /* Behind the text */
    transition: height 0.8s ease; /* Smoothly transition height */
  }

  /* On hover, expand the height from 0% to 100% */
  &:hover::before {
    height: 100%; /* Cover the entire button */
  }
`;

export default NavButton;
