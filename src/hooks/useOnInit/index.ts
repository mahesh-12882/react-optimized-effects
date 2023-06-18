import { useEffect, useRef } from "react";

export const useOnInit = (callback: () => void) => {
  const renderCounter = useRef<number>(0);
  useEffect(() => {
    if (renderCounter.current === 0) {
      renderCounter.current++;
      return callback && callback();
    }
    renderCounter.current++;
    // Defualt return
    return () => {};
  }, [renderCounter]);
};