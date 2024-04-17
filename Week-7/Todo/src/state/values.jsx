import { atom, selector } from "recoil";
export const Todos = atom({
    key: "Todos",
    default: [{
        title:"",
        description:""

}],
})
export const filterTodo = atom({
    key: "filterTodo",
    default: ""
})
//search functionality
//selector is used to derive the value from the atom



export const filteredTodos = selector({
    key: "filteredTodos",
    get: ({ get }) => {
        const filter = get(filterTodo)
        const todos = get(Todos)
        if (filter) {
            return todos.filter(todo => todo.title.includes(filter) || todo.description.includes(filter))
        }
        return todos
    }
})