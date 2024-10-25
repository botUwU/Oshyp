import styled, { css } from "styled-components";
import { Section } from "../GlobalStyle";
import { colors } from "../constants/colors";
import CImage from "../customComponents/CImage";
import { useInView } from "react-intersection-observer";
import { useScroll } from "../helper/useScroll";
import CTitle from "../customComponents/CTitle";
import Cp from "../customComponents/Cp";
function BusinessCard() {
  const { businessCardRef } = useScroll();
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger every time the element enters or exits the viewport
    threshold: 0.1, // Trigger when 10% of the element is in view
  });
  return (
    <Card ref={ref}>
      <BCardSection ref={businessCardRef}>
        <CTitle color="secondary" isCentred variation="h1" inView={inView}>
          Carte de Viste:
        </CTitle>
        <ImageWithText inView={inView}>
          <CImage
            brightness={0.5}
            rounded={false}
            src={"src/data/water.png"}
            height={"100%"}
            width={"100%"}
            inView={inView}
            grayScale={false}
            isAnimated={false}
          />
          <Text inView={true}>
            <CardTitle>
              <CardHeader>
                <HeaderTitle>
                  <CTitle color="secondary" inView={inView} variation="h1">
                    OSHYP
                  </CTitle>
                  <CTitle color="white" inView={inView} variation="h3">
                    Miguel DUENAS
                  </CTitle>
                </HeaderTitle>
                <CImage
                  center={true}
                  width={"20%"}
                  height={"100%"}
                  src={"src/data/randomQR.png"}
                  inView={inView}
                  isAnimated={false}
                />
              </CardHeader>
            </CardTitle>
            <CardServices>
              <OstéoService>
                <CTitle inView={inView} variation="h2" color="secondary">
                  Ostéothérapie{" "}
                </CTitle>
                <Cp inView={inView} color="white">
                  Soulager la douleur et redonner de la mobilité
                </Cp>
              </OstéoService>
              <ShiatsuService>
                <CTitle inView={inView} variation="h2" color="secondary">
                  Shiatsu{" "}
                </CTitle>
                <Cp color="white" inView={inView}>
                  Prévenir pour ne pas avoir à guérir
                </Cp>
              </ShiatsuService>
            </CardServices>
            <CardContact>
              <Cp
                weight="Medium"
                size="lg_ExtraBold"
                style={{ border: "1px solid red" }}
                color="white"
                inView={inView}
              >
                9, Rue de Figeac – 31450 BELBERAUD
              </Cp>{" "}
              <Cp
                weight="Medium"
                size="lg_ExtraBold"
                style={{ border: "1px solid red" }}
                color="white"
                inView={inView}
              >
                tel : 0646870652 mail : oshypmd@gmail.com
              </Cp>
            </CardContact>
            <Cp
              size="xl_ExtraBold"
              weight="Medium"
              inView={inView}
              color="white"
            >
              Séances sur RDV tous les vendredis de 8h00 à 12h00 et de 14h00 à
              17h00{" "}
            </Cp>
          </Text>
        </ImageWithText>
      </BCardSection>
    </Card>
  );
}

export default BusinessCard;

const Card = styled.div`
  background-color: ${colors.backGroundColor.mainWhite};
`;
const ImageWithText = styled.div`
  position: relative;
  width: 70%;
  height: 70%;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: ${(props) => (props.inView ? 1 : 0)};
    transition: opacity 0.5s ease-in-out;
  }
`;

const Text = styled.div`
  gap: 5%;
  height: 80%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-shadow: 7px 7px 7px rgba(0, 0, 0, 0.7);
  opacity: ${(props) => (props.inView ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;
const BCardSection = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

const CardTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const CardServices = styled.div`
  gap: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const OstéoService = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
`;
const ShiatsuService = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: end;
`;

const CardContact = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  & > * {
  }
`;
const QR = styled.div`
  width: 120%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: right;
  /* & > * {
    height: 100%;
  } */
`;
const CardHeader = styled.div`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
`;
const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
