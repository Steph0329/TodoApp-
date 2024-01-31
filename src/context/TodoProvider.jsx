import { createContext, useState, useEffect } from "react";

const TodoContext = createContext()

const initialValue = [
    {
        id: 1,
        title: 'Go to the gym',
        completed: true
    },
    {
        id: 2,
        title: 'Complete online JavaScript course',
        completed: false
    },
    {
        id: 3,
        title: '10 minutes mediation',
        completed: false
    },
    {
        id: 4,
        title: 'Pickup groceries',
        completed: true
    },
    {
        id: 5,
        title: 'Complete todo app on frontend mentor',
        completed: false
    },
]

const TodoProvider = ({children}) => {
    const storedTodos = localStorage.getItem("todos")
    const initialTodos = storedTodos ? JSON.parse(storedTodos) : []

    const [todos, setTodos] = useState(initialTodos)
    const [filter, setFilter] = useState('all')

    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])
    
    const newTodo = title => {
        const item = {
            id: Date.now(),
            title,
            completed: false
        }

        setTodos([...todos, item])
    }

    
    const updateTodo = id => {
        const update = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)

        setTodos(update)
    }

    const deleteTodo = id => {
        const deleteItem = todos.filter(todo => todo.id !== id)

        setTodos(deleteItem)
    }

    const deleteCompleted = () => {
        const deleteItemsCompleted = todos.filter(todo => todo.completed === false)

        setTodos(deleteItemsCompleted)
    }

    const changeFilter = filter => setFilter(filter)

    const filtroTodos = () => {
        switch(filter) {
            case 'all':
                return todos

            case 'active': 
                return todos.filter(todo => !todo.completed)

            case 'completed':
                return todos.filter(todo => todo.completed)
            default: 
                return todos
        }
    }

    return (
        <TodoContext.Provider
            value={{
                initialValue,
                todos,
                newTodo,
                updateTodo,
                deleteTodo,
                deleteCompleted,
                filter,
                changeFilter,
                filtroTodos,
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}

export {
    TodoProvider
}

export default TodoContext