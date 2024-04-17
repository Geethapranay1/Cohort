import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";



export const todoAtomFamily = atomFamily({//atomFamily is used to store the state
    key: "todoAtomFamily",//unique id
    default: selectorFamily({//default value is a selectorFamily
        key: "todoAtomFamily/default",//unique id
        get: (id) => async () => {//In get we can use async function and id is passed as an argument to get the todo
            await new Promise((resolve) => setTimeout(resolve, 3000))
            //throw new Error("Failed to fetch todo")
            const response = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
            return response.data.todo;
        }
})
})

//we have to set loader until the data is fetched from the backend
//we can use suspense for that
