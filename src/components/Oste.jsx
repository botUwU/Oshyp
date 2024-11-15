import { useInView } from "react-intersection-observer";
import { useScroll } from "../helper/useScroll";
import { Section } from "../GlobalStyle";
import CTitle from "../customComponents/CTitle";
function Oste() {
  const { osteRef } = useScroll();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  return (
    <Section ref={osteRef}>
      <CTitle>Osteotherapie</CTitle>
    </Section>
  );
}

export default Oste;
