import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function AppMultiSlider({
  responsive,
  items,
  activeIndex,
  onSlideChanged,
  paddingLeft,
  paddingRight,
  animationType
}) {
  return (
    <AliceCarousel
      mouseTracking
      responsive={responsive}
      animationDuration={1000}
      autoPlay={true}
      autoPlayInterval={3500}
      autoPlayStrategy={"all"}
      disableDotsControls
      disableButtonsControls
      infinite={false}
      animationType={animationType}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      autoWidth={true}
      autoHeight={true}
      items={items}
      activeIndex={activeIndex}
      onSlideChanged={onSlideChanged}
    />
  );
}
