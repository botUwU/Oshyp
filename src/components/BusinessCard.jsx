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
    <CardSection ref={ref}>
      <BCardSection ref={businessCardRef}>
        <CTitle color="secondary" isCentred variation="h1" inView={inView}>
          Carte de Viste:
        </CTitle>

        <Card>
          <Title>
            <CTitle color="secondary" isCentred variation="h1" inView={inView}>
              OSHYP
            </CTitle>
            <CTitle color="white" isCentred variation="h2" inView={inView}>
              Miguel DUENAS
            </CTitle>
            <ImageQr>
              <CImage
                src={"/QRCODE.png"}
                width={"100%"}
                inView={inView}
                height={"100%"}
                isAnimated={false}
                shadow={"medium"}
                fit="cover"
                style={{ borderRadius: "0" }}
              ></CImage>
            </ImageQr>
          </Title>
          <Methode>
            <MethodeItem>
              <CTitle
                color="secondary"
                isCentred
                variation="h2"
                inView={inView}
              >
                Ostéothérapie
              </CTitle>
              <Cp
                isCentred
                weight="SemiBold"
                color="white"
                size="lg_regular"
                inView={inView}
                tracking={"0.01em"}
              >
                Soulager la douleur et redonner de la mobilite
              </Cp>
            </MethodeItem>
            <MethodeItem>
              <CTitle
                color="secondary"
                isCentred
                variation="h2"
                inView={inView}
              >
                Shiatsu
              </CTitle>
              <Cp
                isCentred
                weight="SemiBold"
                color="white"
                size="lg_regular"
                inView={inView}
                tracking={"0.01em"}
              >
                Prévenir pour ne pas avoir à guérir
              </Cp>
            </MethodeItem>
          </Methode>
          <Info>
            <Cp
              style={{ color: "rgb(66, 66, 192)", textDecoration: "underline" }}
              isCentred
              weight="ExtraBold"
              color="white"
              size="lg_regular"
              inView={inView}
              tracking={"0.01em"}
            >
              https://oshyp-miguel-duenas.netlify.app
            </Cp>
          </Info>
          <Methode>
            <MethodeItem>
              <Cp
                weight="ExtraBold"
                isCentred
                color="secondary"
                size="lg_regular"
                inView={inView}
              >
                Tel :
              </Cp>
              <Cp
                weight="SemiBold"
                isCentred
                color="white"
                size="lg_regular"
                inView={inView}
                tracking={"0.01em"}
              >
                0646870652
              </Cp>
            </MethodeItem>
            <MethodeItem>
              <Cp
                weight="ExtraBold"
                isCentred
                color="secondary"
                size="lg_regular"
                inView={inView}
              >
                Adress :
              </Cp>
              <Cp
                weight="SemiBold"
                isCentred
                color="white"
                size="lg_regular"
                inView={inView}
                tracking={"0.01em"}
              >
                9, Rue de Figeac – 31450 BELBERAUD
              </Cp>
            </MethodeItem>
            <MethodeItem>
              <Cp
                isCentred
                weight="ExtraBold"
                color="secondary"
                size="lg_regular"
                inView={inView}
              >
                Mail :
              </Cp>
              <Cp
                weight="SemiBold"
                isCentred
                color="white"
                size="lg_regular"
                inView={inView}
                tracking={"0.01em"}
              >
                oshypmd@gmail.com
              </Cp>
            </MethodeItem>
          </Methode>
        </Card>
      </BCardSection>
    </CardSection>
  );
}

export default BusinessCard;

const CardSection = styled.div`
  background-color: ${colors.backGroundColor.mainWhite};
`;
const BCardSection = styled(Section)`
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 30px;
  min-height: auto;
  @media (max-width: 1000px) {
    gap: 60px;
  }
  @media (max-width: 900px) {
    padding: 60px 10px;
  }
`;
const Card = styled.div`
  position: relative;
  width: 75%;
  background-image: url("/water.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  padding: 48px 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  border-radius: 8px;
  box-shadow: 0px 12px 20.64px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  /* Overlay for darkening effect */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3); /* Adjust the opacity as needed */
    /* Match the card's border radius */
    z-index: 1;
  }

  /* Content inside the div */
  & > * {
    position: relative;
    z-index: 2;
    text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.7); /* Adjust shadow properties as needed */
  }

  @media (max-width: 1200px) {
    width: 100%;
  }

  @media (max-width: 900px) {
    padding: 24px 24px;
  }
`;

const Title = styled.div`
  width: 100%;
  position: relative;
`;

const Methode = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const Info = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const MethodeItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
`;
const ImageQr = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  right: 0;
  top: 0;
`;
