import React, { useContext, useRef } from "react";
export const ScrollContext = React.createContext();

export default function ScrollProvider({ children }) {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const pricingRef = useRef(null);
  const contactRef = useRef(null);
  const businessCardRef = useRef(null);
  const whoAmIRef = useRef(null);
  const shiatsuRef = useRef(null);
  const osteoRef = useRef(null);
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <ScrollContext.Provider
      value={{
        homeRef,
        servicesRef,
        testimonialsRef,
        pricingRef,
        contactRef,
        businessCardRef,
        whoAmIRef,
        shiatsuRef,
        osteoRef,
        scrollToSection,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}
