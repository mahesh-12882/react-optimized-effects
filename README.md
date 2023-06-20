## React optimized effects, A very efficient component life-cycle hook.

This React package optimizes the usage of useEffect, eliminating unnecessary re-renders, and efficiently handling multiple API calls. It analyzes dependencies to trigger effects only when needed, ensuring optimal performance. Prevent redundant network requests and enhance the responsiveness of your React application with ease. Install React-Optimized-Effects now for streamlined useEffects and improved efficiency.

### Package contents/life-cycle hook:

| Life-cycle Hook  | Description                                                                                                                                                                                                                                                                                     |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| useOnInit        | This effect will be called only one time once the component loads, with no dependencies.                                                                                                                                                                                                                  |
| useOnChange      | This effect will be called only one time once the component loads or after any dependency is changed.                                                                                                                                                                                                     |
| useOnDistroy     | This effect will be called only one time just after the component is fully unmounted/destroyed.                                                                                                                                                                                                                |

### Key Features of React-Optimized-Effects:

1. Dependency Analysis: React-Optimized-Effects examines the dependencies of your useEffect hooks and ensures that they are executed only when the relevant dependencies change, avoiding unnecessary re-renders, It can analyze any type of dependency however it's a primitive type or reference type.

2. Intelligent API Call Handling: With React-Optimized-Effects, you can prevent multiple API calls triggered by different useEffect hooks. It intelligently manages the requests, preventing redundant calls and optimizing network utilization.

3. Seamless Integration: React-Optimized-Effects seamlessly integrates with your existing React codebase. Its API mirrors the useEffect hook, allowing for easy adoption and integration into your components.

### Installation:

1. Open your React app directory
2. Open terminal or CMD
3. Install the library by this command: `npm i react-optimized-effects`

### The acutaul arrange for these life-cycle hooks:

**If the 4 hooks are implmemnted the arrange must be like this**

1. useOnInit, useOnChange (Not changed dependencies)
2. useOnChange (After change dependencies)
4. useOnDistroy

### Example

```
import { useOnInit, useOnChange } from "react-optimized-effects";

function ExampleComponent() {

  useOnInit(() => {
    // Your API call code here
    // This effect will be fired only once the component loads, with no dependencies.
  });

  useOnChange(() => {
    // Your effect code here
    // This effect will be fired only once the component loads or after any dependency is changed.
  }, [dependency1, dependency2]);


  useOnDistroy(() => {
    // Your API call code here
    // This effect will be fired only after the component is fully unmounted/destroyed.
   });

  return (
    // Your component JSX here
  );
}

```
