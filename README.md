# React optimized effects, A very efficient component life-cycle hook.

This React package optimizes the usage of useEffect, eliminating unnecessary re-renders, and efficiently handling multiple API calls. It analyzes dependencies to trigger effects only when needed, ensuring optimal performance. Prevent redundant network requests and enhance the responsiveness of your React application with ease. Install React-Optimized-Effects now for streamlined useEffects and improved efficiency.

### Package contents/life-cycle hook:

| Life-cycle hook | description                                                            |
| --------------- | ---------------------------------------------------------------------- |
| useOnint        | Will fire only once the component loads, no depenecies.                |
| useOnChage      | Will fire only once the component loads or after a dependcies changed. |
| useOnDistry     | Coming soon in the next version.                                       |

### Key Features of React-Optimized-Effects:

1. Dependency Analysis: React-Optimized-Effects examines the dependencies of your useEffect hooks and ensures that they are executed only when the relevant dependencies change, avoiding unnecessary re-renders, It can analayis any type of dependencies however it's primitive type or reference type.

2. Intelligent API Call Handling: With React-Optimized-Effects, you can prevent multiple API calls triggered by different useEffect hooks. It intelligently manages the requests, preventing redundant calls and optimizing network utilization.

3. Seamless Integration: React-Optimized-Effects seamlessly integrates with your existing React codebase. Its API mirrors the useEffect hook, allowing for easy adoption and integration into your components.

### Installation:

1. Open your React app directory
2. Open termial or CMD
3. Install the library by this command : `npm i react-optimized-effects`

### Example

```
import { useOnInit, useOnChange } from "react-optimized-effects";

function ExampleComponent() {

  useOnInit(() => {
    // Your API call code here
    // This effect will prevent redundant API calls when multiple components use it
  });

  useOnChange(() => {
    // Your effect code here
    // This effect will only trigger when the dependencies change
  }, [dependency1, dependency2]);

  return (
    // Your component JSX here
  );
}

```
