## why do we need to use context api?
- Context API is a way to share data between components without having to pass the data down through props manually at every level of the component tree.
- To make syntax cleaner and get rid of prop drilling
- To make the code more readable
- It doesn't fix rerendering issues only fixes prop drilling
- context api lets you teleport the data to the component that needs it

---


## What is state management?
- A cleaner way to store the state of your application and share it between components
- A way to manage the state of your application
- unnecessary rerendering of the components

---

## state management using Recoil
- Recoil is a state management library for React that provides several capabilities that are difficult to achieve with React alone, while being compatible with the newest features of React.
- other popular ones are Redux, Zustand, MobX, etc.
- Main thing is state and components are separate
- Has a concept of atom to store the state
- An atom can be defined outside of a component and can be teleported to the component that needs it
- Seperate folder to store the atoms

---
## Things to learn
- RecoilRoot
- atom
- useRecoilState
- useRecoilValue
- useSetRecoilState
- useRecoilCallback
- selector

### RecoilRoot
- RecoilRoot is a component that provides the context for your Recoil atoms and selectors. It should be placed at the root of your application.
- It is a provider component that wraps the entire application
- It wraps the entire application and provides the context to the entire application
- The syntax of RecoilRoot is as follows: 
```jsx
import { RecoilRoot } from 'recoil';
<RecoilRoot>
  <Count />
</RecoilRoot>
```

### atom
- Atoms are units of state. They represent a piece of state that can be read from and written to.
- Atoms are defined using the atom function, which takes an object with a key and a default value.
- The syntax of atom is as follows:
```jsx
import { atom } from 'recoil';
const countState = atom({
  key: 'countState',
  default: 0,
});
```

### useRecoilState
- useRecoilState is a hook that returns a tuple of the current value of an atom and a setter function to update the value.
- The syntax of useRecoilState is as follows:
```jsx
import { useRecoilState } from 'recoil';
const [count, setCount] = useRecoilState(countState);
```

### useRecoilValue
- useRecoilValue is a hook that returns the current value of an atom or selector.
- The syntax of useRecoilValue is as follows:
```jsx
import { useRecoilValue } from 'recoil';
const count = useRecoilValue(countState);
```

### useSetRecoilState
- useSetRecoilState is a hook that returns a setter function to update the value of an atom or selector.
- The syntax of useSetRecoilState is as follows:
```jsx
import { useSetRecoilState } from 'recoil';
const setCount = useSetRecoilState(countState);
```


### Selectors
- Selectors are derived state. They represent a piece of state that is calculated from one or more atoms or other selectors.
- Selectors are defined using the selector function, which takes an object with a key and a get function.
- The syntax of selector is as follows:
```jsx 
import { selector } from 'recoil';
const countState = atom({
  key: 'countState',
  default: 0,
});
const doubleCountState = selector({
  key: 'doubleCountState',
  get: ({get}) => {
    const count = get(countState);
    return count * 2;
  },
});
```



