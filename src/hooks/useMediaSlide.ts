import { useState, useEffect } from "react";
import { useMediaScreen } from "./useMediaScreen";

export function useMediaSlide() {
  const screenWidth = useMediaScreen();
  const [slideWidth, setSlideWidth] = useState(screenWidth * 0.9);

  useEffect(() => {
    setSlideWidth(screenWidth * 0.95);
  }, [screenWidth]);

  return slideWidth;
}
