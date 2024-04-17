
import { createContext } from 'react';

export const CountContext = createContext({
    count: 0, setCount: () => { }
});

//creatContext is a function that creates a context object that is used to share the data between the components without passing the props down manually at every level of the component tree
//createContext() method is used to create a context object
//createContext() method takes the default value as an argument
//createContext() method returns an object that contains the Provider and Consumer components
//createContext(0) // this will create a context object with the default value 0
//export the context object using createContext() method