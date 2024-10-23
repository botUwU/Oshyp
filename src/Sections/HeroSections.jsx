import styled from "styled-components";
import CTitle from "../customComponents/CTitle";

const CustomSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
function HeroSections() {
  return (
    <CustomSection id="home">
      <Description>
        <CTitle></CTitle>
      </Description>
    </CustomSection>
  );
}

export default HeroSections;
