// /* eslint-disable react/prop-types */
// import React from "react";
// import { colors } from "../constants/colors";
// import styled from "styled-components";

// export default function Cbutton({
//   children,
//   variation = "primary",
//   size = "md_regular",
//   onClick,
// }) {
//   const [fontSize, fontWeight] = size.split("_");
//   return <button>{children}</button>;
// }

// const Button = styled.button`
//   background-color: ${(props) => {
//     if (props.variation === "primary") {
//       return colors.button.buttonBackGroundColor.primary;
//     } else if (props.variation === "secondary") {
//       return colors.button.buttonBackGroundColor.secondary;
//     } else if (props.variation === "success") {
//       return colors.button.buttonBackGroundColor.success;
//     } else if (props.variation === "danger") {
//       return colors.button.buttonBackGroundColor.danger;
//     } else {
//       return colors.button.buttonBackGroundColor.primary;
//     }
//   }};
//   color: ${(props) => {
//     if (props.variation === "primary") {
//       return colors.button.buttonTextColor.primary;
//     } else if (props.variation === "secondary") {
//       return colors.button.buttonTextColor.secondary;
//     } else if (props.variation === "success") {
//       return colors.button.buttonTextColor.success;
//     } else if (props.variation === "danger") {
//       return colors.button.buttonTextColor.danger;
//     } else {
//       return colors.button.buttonTextColor.primary;
//     }
//   }};
//   padding: 10px 20px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   font-size: ${(props) => {
//     if (props.fontSize === "sm") {
//       return "12px";
//     } else if (props.fontSize === "md") {
//       return "14px";
//     } else if (props.fontSize === "lg") {
//       return "16px";
//     } else if (props.fontSize === "xl") {
//       return "18px";
//     } else if (props.fontSize === "xxl") {
//       return "22px";
//     } else {
//       return "14px";
//     }
//   }};
//   font-weight: ${(props) => {
//     if (props.fontWeight === "thin") {
//       return "100";
//     } else if (props.fontWeight === "light") {
//       return "300";
//     } else if (props.fontWeight === "medium") {
//       return "500";
//     } else if (props.fontWeight === "bold") {
//       return "700";
//     } else if (props.fontWeight === "black") {
//       return "900";
//     } else {
//       return "500";
//     }
//   }};
// `;
