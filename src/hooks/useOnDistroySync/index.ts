import { useLayoutEffect, useRef } from "react";

/**
 * Classic useOnDistroySync example to help understand the flow of this Hook
 * The effect will run synchronous after the UI is updated, so it will be always fired before the original "useOnDistroy"
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
 *   useOnDistroySync(() => {
 *     // Your API call code here
 *     // This Hook is based on "useLayoutEffect",  effect will only target callback when the component is fully unmounted, the effect will run synchronous after the UI is updated
 *  });
 *  return (
 *  // Your component JSX here
 *  );
 * }
 *
 */

export const useOnDistroySync = (callback: () => void): void => {
  const renderCounter = useRef<number>(0);

  useLayoutEffect(() => {
    if (renderCounter.current === 0 && process.env.NODE_ENV === "development") {
      renderCounter.current++;
      return () => {};
    }

    return () => callback();
  }, []);
};