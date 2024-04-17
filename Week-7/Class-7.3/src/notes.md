# Today Class Outline
- atomFamily
- selectorFamily
- asynchronous data queries
- useRecoilValueLoadable
- useRecoilStateLoadable

## atomFamily
- atomFamily is a function that returns an atom given a parameter.
- The syntax of atomFamily is as follows:
```jsx
import { atomFamily } from 'recoil';
const countState = atomFamily({
  key: 'countState',
  default: 0,
});
```
- The key is a unique identifier for the atom.
- The default value is the initial value of the atom.
- The parameter is used to create a unique atom for each parameter value.

---

## selectorFamily
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

## asynchronous data queries
- Recoil supports asynchronous data queries using the useRecoilValueLoadable and useRecoilStateLoadable hooks.
- The useRecoilValueLoadable hook returns a Loadable object that represents the state of the atom or selector.
- The useRecoilStateLoadable hook returns a tuple of the current value of the atom or selector and a setter function to update the value.
- The Loadable object has three states: hasValue, hasError, and loading.
- The value property of the Loadable object contains the value of the atom or selector.
- The error property of the Loadable object contains the error if the state is hasError.
- The syntax of useRecoilValueLoadable is as follows:
```jsx
import { useRecoilValueLoadable } from 'recoil';
const countLoadable = useRecoilValueLoadable(countState);
```
- The syntax of useRecoilStateLoadable is as follows:
```jsx
import { useRecoilStateLoadable } from 'recoil';
const [count, setCount] = useRecoilStateLoadable(countState);
```


