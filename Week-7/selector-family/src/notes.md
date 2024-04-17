# selectorFamily
- selectorFamily is a function that returns a selector given a parameter.
- selector is used to derive state from one or more atoms or other selectors.
- The syntax of selectorFamily is as follows:
```jsx
import { selectorFamily } from 'recoil';
const doubleCountState = selectorFamily({
  key: 'doubleCountState',
  get: (param) => ({get}) => {
    const count = get(countState(param));
    return count * 2;
  },
});
```
- The key is a unique identifier for the selector.
- The get function is a function that returns the value of the selector.
- The parameter is used to create a unique selector for each parameter value.
- param is the parameter value passed to the selector.
- double arrow function is used to return a function that takes get as an argument.

---

## Suspense API
- The Suspense API is used to handle loading states in React applications.
- Suspense is a component that can be used to wrap asynchronous components and handle loading states.
- Suspense is used with the React.lazy function to load components asynchronously.
- The syntax of Suspense is as follows:
```jsx
import React, { Suspense } from 'react';
const LazyComponent = React.lazy(() => import('./LazyComponent'));
const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazyComponent />
  </Suspense>
);
```
- The fallback prop is used to render a loading state while the component is loading.
- Suspense can be used with the useRecoilValueLoadable and useRecoilStateLoadable hooks to handle loading states in Recoil applications.

---

## useRecoilValueLoadable
- useRecoilValueLoadable is a hook that returns a Loadable object that represents the state of the atom or selector.
- The Loadable object has three states: hasValue, hasError, and loading.
- The value property of the Loadable object contains the value of the atom or selector.
- The error property of the Loadable object contains the error if the state is hasError
- The syntax of useRecoilValueLoadable is as follows:
```jsx
import { useRecoilValueLoadable } from 'recoil';
const countLoadable = useRecoilValueLoadable(countState);
```

---

## useRecoilStateLoadable
- useRecoilStateLoadable is a hook that returns a tuple of the current value of the atom or selector and a setter function to update the value.
- The syntax of useRecoilStateLoadable is as follows:
```jsx
import { useRecoilStateLoadable } from 'recoil';
const [count, setCount] = useRecoilStateLoadable(countState);
```

[]: # (END)


