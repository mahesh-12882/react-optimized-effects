import isEqual from '../../helpers/lodash.isequal/index';
import { useEffect, useRef } from 'react';

/**
 * Classic useOnChange example to help understand the flow of this Hook
 *
 * @param    {Function<void>} callback
 *           The target callback logic
 *
 * @param    {unknown[]} dependencies
 *           These are the target dependicies array
 *
 * @return   {void}
 *           No return
 *
 * @property {React.MutableRefObject<unknown[]>} previousDependenciesRef
 *           These are the previous dependicies array
 *
 * @property {React.MutableRefObject<boolean>} isFirstRenderRef
 *           Check if the dependicies are changed
 *
 * @example
 *
 * function ExampleComponent() {
 *   useOnChange(() => {
 *     // Your API call code here
 *     // This effect will only trigger when the dependencies change
 *  }, [dependency1, dependency2]);
 *  return (
 *  // Your component JSX here
 *  );
 * }
 *
 */

export const useOnChange = (callback: () => void, dependencies: unknown[]): void => {
  const previousDependenciesRef = useRef<null | unknown[]>([]);
  const isFirstRenderRef = useRef<boolean>(true);
  useEffect(() => {
    const isDependenciesChanged = !isEqual(
      dependencies,
      previousDependenciesRef.current,
    );
    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false;
      previousDependenciesRef.current = dependencies;
      return callback();
    }
    if (isDependenciesChanged) {
      previousDependenciesRef.current = dependencies;
      return callback();
    }
  }, dependencies);
};