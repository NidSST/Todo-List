import { TodoItem } from "./TodoItem"
export function TodoList({todos, toggleTodo, deleteTodos})
{
    return (
    <ul className="list">
    {todos.length === 0 && "No Todos"}
    {todos.map(todos=>{
      return(
        <TodoItem {...todos} key={todos.id} toggleTodo={toggleTodo} deleteTodos={deleteTodos}/>
    )
    })}
  </ul>
  )
}