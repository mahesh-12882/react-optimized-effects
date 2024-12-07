import { useEffect, useRef } from 'react';

/**
 * Classic useOnInit example to help understand the flow of this Hook
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
 *   useOnInit(() => {
 *     // Your API call code here
 *     // This effect will prevent redundant API calls when multiple components use it
 *  });
 *  return (
 *  // Your component JSX here 
 *  );
 * }
 * 
 */

export const useOnInit = (callback: () => void): void => {
  const renderCounter = useRef<number>(0);
  useEffect(() => {
    if (renderCounter.current === 0) {
      renderCounter.current++;
      return callback && callback();
    }
    //increse corrent value
    renderCounter.current++;
    // Defualt return
    return () => {};
  }, [renderCounter]);
};
