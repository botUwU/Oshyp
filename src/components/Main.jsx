import { useScroll } from "../helper/useScroll";
import Home from "./Home";
import Service from "./Service";
import Testimonial from "./Testimonial";
import Pricing from "./Pricing";
import Footer from "./Footer";
import Separator from "../customComponents/Separator";
import BusinessCard from "./BusinessCard";
export default function Main() {
  return (
    <>
      <Home />
      <Service />
      <Testimonial />
      <Pricing />
      <BusinessCard />
      <Footer />
    </>
  );
}
