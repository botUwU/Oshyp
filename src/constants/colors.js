export const palette = {
  cyan: "#87ceeb",
  white: "#ffffff",
  black: "#000000",
  red: "#ff0000",
  deepRed: "#8b0000",
  green: "#00ff00",
  blue: "#0000ff",
  yellow: "#ffff00",
  orange: "#ffa500",
  purple: "#800080",
  pink: "#ffc0cb",
  brown: "#a52a2a",
  gray: "#808080",
  lightGray: "#d3d3d3",
  darkGray: "#a9a9a9",
  lightBlue: "#add8e6",
  lightGreen: "#90ee90",
  lightYellow: "#ffffe0",
  lightOrange: "#ffe4b5",
  lightPurple: "#dda0dd",
  lightPink: "#ffb6c1",
  lightBrown: "#cd853f",
  mainBlue: "#6975f3",
  mainWhite: "#dadcf0",
  textColor: "#112A46",
  backGroundColor: "#ACC8E5",
};
export const colors = {
  textColor: {
    main: palette.textColor,
    white: palette.white,
    black: palette.black,
    error: palette.deepRed,
    success: palette.lightGreen,
  },
  backGroundColor: {
    main: palette.backGroundColor,
    white: palette.white,
    mainWhite: palette.mainWhite,
    cyan: palette.cyan,
  },
  button: {
    buttonBackGroundColor: {
      primary: palette.textColor,
      secondary: palette.mainBlue,
      sucess: palette.lightGreen,
      danger: palette.deepRed,
    },
    buttonTextColor: {
      primary: palette.white,
      secondary: palette.white,
      sucess: palette.white,
      danger: palette.white,
    },
  },
  title: {
    primary: palette.textColor,
    secondary: palette.mainBlue,
    white: palette.mainWhite,
  },
  shadows: {
    black: palette.black,
    gray: palette.gray,
  },
};
