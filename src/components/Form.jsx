import React, { useState } from 'react'
import useTodo from '../hooks/useTodo'

const Form = () => {

  const { newTodo } = useTodo()

  const [title, setTitle] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    if(!title.trim()){
      return setTitle('')
    }

    newTodo(title)
    setTitle('')
  }

  return (
    <form 
        className='px-6 py-1 rounded-md bg-white flex items-center dark:bg-VeryDarkGrayishBlue transition-all duration-500'
        onSubmit={handleSubmit}
    >
      <span className='border-2 rounded-full w-6 h-6 inline-block dark:border-gray-600'></span>
      <input 
        type="text"
        className='w-full px-4 py-3 rounded-md outline-none text-DarkGrayishBlue dark:bg-VeryDarkGrayishBlue dark:placeholder:text-DarkGrayishBlue dark:text-gray-400' 
        placeholder='Create a new todo...'
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
    </form>
  )
}

export default Form
