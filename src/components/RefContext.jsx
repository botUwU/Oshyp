import React, { useContext, useRef } from "react";
export const ScrollContext = React.createContext();

export default function ScrollProvider({ children }) {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const pricingRef = useRef(null);
  const contactRef = useRef(null);
  const businessCardRef = useRef(null);
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
        scrollToSection,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}
