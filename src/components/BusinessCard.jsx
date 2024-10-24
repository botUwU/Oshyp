import styled from "styled-components";
import { Section } from "../GlobalStyle";
import { colors } from "../constants/colors";
import CImage from "../customComponents/CImage";

function BusinessCard() {
  return (
    <Card>
      <Section>
        3awedha card w mate3lch 3fat ta3 background image esta3mel CImage w
        rodhba noir eblanc
      </Section>
      ;
    </Card>
  );
}

export default BusinessCard;

const Card = styled.div`
  background-color: ${colors.backGroundColor.mainWhite};
`;
