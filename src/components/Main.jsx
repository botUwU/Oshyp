import { useScroll } from "../helper/useScroll";
import Home from "./Home";
import Service from "./Service";
import Testimonial from "./Testimonial";
import Pricing from "./Pricing";
import Contact from "./Contact";
import Footer from "./Footer";
import Separator from "../customComponents/Separator";
export default function Main() {
  const { homeRef, servicesRef, testimonialsRef } = useScroll();
  return (
    <>
      <Home />
      {/* <Separator></Separator> */}
      <Service />
      <Testimonial />
      <Pricing />
      <Contact />
    </>
  );
}
