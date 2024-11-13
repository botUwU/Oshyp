import { useScroll } from "../helper/useScroll";
import Home from "./Home";
import Service from "./Service";
import Testimonial from "./Testimonial";
import Pricing from "./Pricing";
import Footer from "./Footer";
import Separator from "../customComponents/Separator";
import BusinessCard from "./BusinessCard";
import WhoAmI from "./WhoAmI";
import ServiceInfo from "./ServiceInfo";
export default function Main() {
  return (
    <>
      <Home />
      <WhoAmI />
      <Service />
      <ServiceInfo />
      <Testimonial />
      <Pricing />
      <BusinessCard />
      <Footer />
    </>
  );
}
