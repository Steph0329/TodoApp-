import React from 'react'
import useTodo from '../hooks/useTodo'

const Computed = () => {

  const { filtroTodos, deleteCompleted} = useTodo()
  const filteredTodos = filtroTodos()

  const filterItemsLeft = filteredTodos.filter(todo => todo.completed === false).length

  return (
    <div className='flex justify-between px-6 py-4 text-gray-400 shadow-lg dark:bg-VeryDarkGrayishBlue transition-all duration-500'>
      <p>{filterItemsLeft} items left</p>
      <button 
        onClick={() => deleteCompleted()}
      >
        Clear Completed
      </button>
    </div>
  )
}

export default Computed
