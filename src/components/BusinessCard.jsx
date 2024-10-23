import styled from "styled-components";
import { Section } from "../GlobalStyle";
import { colors } from "../constants/colors";
import CImage from "../customComponents/CImage";

const CustomCard = styled.div`
  display: flex;
  height: 100vh;
  margin-bottom: 5px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backGroundColor.mainWhite};
`;
const CardContent = styled.div`
  display: flex;
  width: 60%;
  height: 60%;
  background-image: url("src/data/water.png");
  background-size: cover;
  background-position: center;
`;

function BusinessCard() {
  return (
    <CustomCard color={colors.backGroundColor.mainWhite}>
      <CardContent>ya zebi bayalt chnor9od</CardContent>
    </CustomCard>
  );
}

export default BusinessCard;
