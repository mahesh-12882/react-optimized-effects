/* eslint-disable consistent-return */
import isEqual from '../../helpers/lodash.isequal/index';

import { useEffect, useRef } from 'react';

const isSame = (ref1: unknown, ref2: unknown): boolean => {
  return isEqual(ref1, ref2);
};

export const useOnChange = (effect: () => void, dependencies: unknown[]): void => {
  const previousDependenciesRef = useRef<null | unknown[]>([]);
  const isFirstRenderRef = useRef<boolean>(true);
  useEffect(() => {
    const isDependenciesChanged = !isSame(
      dependencies,
      previousDependenciesRef.current,
    );
    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false;
      previousDependenciesRef.current = dependencies;
      return effect();
    }
    if (isDependenciesChanged) {
      previousDependenciesRef.current = dependencies;
      return effect();
    }
  }, dependencies);
};