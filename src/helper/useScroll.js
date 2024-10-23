import { useContext } from "react";
import { ScrollContext } from "../components/RefContext";

export const useScroll = () => {
  return useContext(ScrollContext);
};
