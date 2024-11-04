import styled from "styled-components";
import CTitle from "../customComponents/CTitle";
import { inView } from "framer-motion";
import { colors } from "../constants/colors";

function Logo({ height }) {
  return (
    <Customdiv>
      <Logodiv height={height}>
        <CTitle
          variation="h2"
          color="secondary"
          style={{ color: colors.textColor.white }}
          inView={inView}
        >
          OSHYP
        </CTitle>
        <CTitle variation="h3" inView={inView}>
          MIGUEL DEUNAS
        </CTitle>
      </Logodiv>
    </Customdiv>
  );
}

export default Logo;

const Customdiv = styled.div`
  /* filter: brightness(0.5); */
  width: 100%;
  @media (max-width: 1000px) {
    height: 10%;
  }
  height: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 5px;
  filter: brightness(0.8);
`;
const Logodiv = styled.div`
  border-radius: 20px;
  margin-bottom: 30px;
  height: 100%;
  width: 50%;
  background-image: url("src/data/water.png");
  box-shadow: 0px 4px 10px grey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-size: cover;
  background-position: center;
`;
