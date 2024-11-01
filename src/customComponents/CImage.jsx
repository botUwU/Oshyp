import React from "react";
import styled, { css } from "styled-components";

export default function CImage({
  style,
  brightness = 1,
  shadow,
  height = 250,
  width = 250,
  src,
  fit = "cover",
  rounded = false,
  inView,
  grayScale = false,
  isAnimated = true,
  mediaQueries,
  WrapperStyle,
}) {
  return (
    <ImageWrapper WrapperStyle={WrapperStyle} width={width} height={height}>
      <Image
        style={style}
        inView={inView}
        src={src}
        shadow={shadow}
        fit={fit}
        rounded={rounded}
        grayScale={grayScale}
        isAnimated={isAnimated}
        brightness={brightness}
        mediaQueries={mediaQueries}
      />
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div.attrs((props) => ({
  style: props.WrapperStyle ? { ...props.WrapperStyle } : {},
}))`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const Image = styled.img.attrs((props) => ({
  style: props.style ? { ...props.style } : {},
}))`
  width: 100%;
  height: 100%;
  object-fit: ${(props) => (props.fit === "cover" ? "cover" : "contain")};
  border-radius: ${(props) => (props.rounded ? "100%" : "10%")};
  transition: transform 750ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform: translateY(50px);

  filter: ${(props) =>
    `brightness(${props.brightness}) grayscale(${props.grayScale ? 1 : 0})`};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  ${(props) => {
    if (props.isAnimated) {
      return css`
        &:hover {
          transform: scale(1.1) translateY(-25px);
        }
      `;
    }
  }}

  ${(props) => {
    switch (props.shadow) {
      case "small":
        return css`
          box-shadow: 0px 4px 4.65px rgba(0, 0, 0, 0.3);
        `;
      case "medium":
        return css`
          box-shadow: 0px 8px 10.32px rgba(0, 0, 0, 0.45);
        `;
      case "large":
        return css`
          box-shadow: 0px 16px 16px rgba(0, 0, 0, 0.6);
        `;
      default:
        return;
    }
  }}
  ${(props) => {
    if (props.inView) {
      return css`
        opacity: 1;
        transform: translateY(0);
      `;
    } else {
      return css`
        opacity: 0;
        transform: translateY(50);
      `;
    }
  }}
   ${(props) =>
    props.mediaQueries &&
    props.mediaQueries.map(
      ({ width, styles }) => css`
        @media (max-width: ${width}) {
          ${styles}
        }
      `
    )}
`;
