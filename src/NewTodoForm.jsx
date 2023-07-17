import { useState } from "react"

export function NewTodoForm(props)
{
    const {setTodos} = props;
    props.onSubmit()
    const[newItem, setNewItem] = useState("")

    function addTodo(newTodo) {
        // Implement the logic to add the newTodo to your list of todos
        setTodos(currentTodos =>{
            return[
              ...currentTodos,
              {id: crypto.randomUUID(), title, completed: false},
            ]
          })
        console.log("Adding new todo:", newTodo);
      }

    function handleSubmit(e)
    {
        e.preventDefault()
        if(newItem === "") return

        addTodo(newItem)

        /*setTodos(currentTodos =>{
        return[
            ...currentTodos,
            {id: crypto.randomUUID(), title: newItem, completed: false},
        ]
    })*/
        setNewItem("")
  }
    return(
        <form onSubmit={handleSubmit} class="new-item-form">
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input type="text" id="item"/>
            </div>
            <button className="btn">Add</button>
        </form>
    )
}