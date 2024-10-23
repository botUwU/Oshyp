import { colors } from "./colors";

export const shadows = {
  small_black: {
    shadowColor: colors.shadows.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    //box-shadow: 0px 4px 4.65px rgba(0, 0, 0, 0.3);
  },
  small_gray: {
    shadowColor: colors.shadows.gray,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  medium_black: {
    shadowColor: colors.shadows.black,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.45,
    shadowRadius: 10.32,
    elevation: 16,
  },
  medium_gray: {
    shadowColor: colors.shadows.gray,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.45,
    shadowRadius: 10.32,
    elevation: 16,
  },
  large_black: {
    shadowColor: colors.shadows.black,
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowOpacity: 0.6,
    shadowRadius: 16.0,
    elevation: 24,
  },
  large_gray: {
    shadowColor: colors.shadows.gray,
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowOpacity: 0.6,
    shadowRadius: 16.0,
    elevation: 24,
  },
};
