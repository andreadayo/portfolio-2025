import { useEffect, useState } from "react";

const useViewportWidth = () => {
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      setViewportWidth(window.innerWidth || 0);
    };

    window.addEventListener("resize", updateWidth);
    updateWidth();

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return viewportWidth;
};

export default useViewportWidth;
