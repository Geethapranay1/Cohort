import axios from "axios";
import { atom, selector, atomFamily } from "recoil";
import { TODOS } from "./todos";

// // export const networkAtom = atom({
// //     key: "networkAtom",
// //     default: 104
// // })

// // export const jobsAtom = atom({
// //     key: "jobsAtom",
// //     default: 0
// // })

// // export const notificationsAtom = atom({
// //     key: "notificationsAtom",
// //     default: 12
// // })

// // export const messagesAtom = atom({
// //     key: "messagesAtom",
// //     default: 0
// // })

// // export const notifications = atom({
// //     key: "notifications",
// //     default: { //The default value should directly hit the backend and get the data
// //         network: 0,
// //         jobs: 0,
// //         messaging: 0,
// //         notifications: 0,
// //     }

// // })
// //the one way to get rid of the useEffect is the default value should directly hit the backend and get the data
// export const notifications = atom({ //atom is used to store the state
//     key: "notifications", //unique id
//     default: selector({ //default value is a selector)
//         key: "notifications/default", //unique id
//         get: async () => { //In get we can use async function
//             const res = await axios.get("https://sum-server.100xdevs.com/notifications")
//             return res.data
//         }
//     })
// })

// //default value cannot be a async function
// //Here comes into the picture of asynchronous data queries  

// export const notificationsSelector = selector({
//     key: "notificationsSelector",
//     get: ({ get }) => {
//         const allNotifications = get(notifications)
//         return allNotifications.network + allNotifications.jobs + allNotifications.notifications + allNotifications.messaging
//     }
// })

// // export const totalNotificationsAtom = selector({
// //     key: "totalNotificationsAtom",
// //     get: ({ get }) => {
// //         const networkNotificationCount = get(networkAtom)
// //         const jobsAtoms = get(jobsAtom)
// //         const notificationsAtoms = get(notificationsAtom)
// //         const messagesAtoms = get(messagesAtom)
// //         return networkNotificationCount + jobsAtoms + notificationsAtoms + messagesAtoms;
// //     }
// // })


//atom family is used to store the state of the individual todo
export const todoAtomFamily = atomFamily({
    key: "todoAtomFamily",
    default: (id) => TODOS.find(todo => todo.id === id)
})

// //39:00
