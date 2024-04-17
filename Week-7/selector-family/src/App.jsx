import { RecoilRoot, useRecoilState, useRecoilStateLoadable, useRecoilValue } from 'recoil'
import { todoAtomFamily } from './atoms'

function App() {


  return (
    <RecoilRoot>
      <Todo id={4} />
      <Todo id={2} />
    </RecoilRoot>
  )
}

function Todo({id}) {
  const [todo, setTodos] = useRecoilStateLoadable(todoAtomFamily(id))//useRecoilValueLoadable is used to get the state of the atom
  //{
  //   state: "hasValue",
  //   contents: {
  //     title: "Learn Recoil",
  //     description: "Learn Recoil from scratch"

  //   }
  console.log(todo.state)
  //suspense, ErrorBoundary
  if (todo.state === "loading") {
    
    return <div>Loading...</div>
  }else if (todo.state === "hasValue") {
    return (
      <div>
        <h1>{todo.contents.title}</h1>
        <p>{todo.contents.description}</p>
      </div>
    )
  }

  
}

export default App
