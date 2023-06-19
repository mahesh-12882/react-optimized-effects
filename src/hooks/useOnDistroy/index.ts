import { useEffect, useRef } from "react";

/**
 * Classic useOnDistroy example to help understand the flow of this Hook
 *
 * @param    {Function<void>} callback
 *           The target callback logic
 *
 * @return   {void}
 *           No return
 *
 * @property {React.MutableRefObject<number>} renderCounter
 *           Counts the real renders
 *
 * @example
 *
 * function ExampleComponent() {
 *   useOnDistroy(() => {
 *     // Your API call code here
 *     // This effect will only target callback after the component is fully unmounted/distroyed
 *  });
 *  return (
 *  // Your component JSX here
 *  );
 * }
 *
 */

export const useOnDistroy = (callback: () => void): void => {
  const renderCounter = useRef<number>(0);

  useEffect(() => {
    if (renderCounter.current === 0 && process.env.NODE_ENV === "development") {
      renderCounter.current++;
      return () => {};
    }
    return () => callback();
  }, []);
};