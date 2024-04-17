import { useMemo, useEffect } from 'react'
import axios from 'axios'
import {useRecoilValue,RecoilRoot, useRecoilState } from 'recoil'
import { todoAtomFamily } from './atoms'



function App() {
  return <RecoilRoot>
    {/* <MainApp /> */}
    <Todo id={3} />
    <Todo id={2} />
  </RecoilRoot>
}

// function MainApp() {
//   // const [networkNotificationCount, setNetworkNotificationCount] = useRecoilState(networkAtom)
//   // const jobsAtoms = useRecoilValue(jobsAtom)
//   // const notificationsAtoms = useRecoilValue(notificationsAtom)
//   // const [ messagesAtoms, setMessagesAtoms] = useRecoilState(messagesAtom);
//   // const totalNotificationsCount = useRecoilValue(totalNotificationsAtom)
//   const notificationsAtoms = useRecoilValue(notifications)
//   const totalNotificationsCount = useRecoilValue(notificationsSelector)

//   // useEffect(() => {
//   //   axios.get("https://sum-server.100xdevs.com/notifications")
  
//   //   .then(res => {
//   //     console.log(res.data)
//   //     setNotificationCount(res.data)
      
//   // })
//   // },[])
//   //The problem with useEffect is that it loads default values first and then the actual values.
//   //So we directly hit the backend in teh default value of the atom

//   // const totalNotifications = useMemo(() => {
//   //   return networkNotificationCount + jobsAtoms + notificationsAtoms + messagesAtoms
//   // },[networkNotificationCount, jobsAtoms, notificationsAtoms, messagesAtoms])

//   return (
//     <div>
//       <button>Home</button>
//       <button>My network ({notificationsAtoms.network >= 100 ? "99+" : notificationsAtoms.network})</button>
//       <button>Jobs ({notificationsAtoms.jobs})</button>
//       <button>Messages ({notificationsAtoms.messaging})</button>
//       <button>Notifications ({notificationsAtoms.notifications})</button>
//       <button>Me ({totalNotificationsCount})</button>
//     </div>
//   )
// }

function Todo({id}) {
  const currTodo = useRecoilValue(todoAtomFamily(id))

  return <div>
    <h1>{currTodo.title}</h1>
    <p>{currTodo.description}</p> 
  </div>
}

export default App
