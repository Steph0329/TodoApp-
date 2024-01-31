import React from 'react'
import useTodo from '../hooks/useTodo'

const Filtro = () => {

  const { filter, changeFilter } = useTodo()

  return (
    <div className='bg-white mt-5 p-5 flex justify-center gap-5 text-DarkGrayishBlue rounded-md dark:bg-VeryDarkGrayishBlue transition-all duration-500'>
      <button
        className={`${filter === 'all' ? 'text-BrightBlue font-bold' : 'hover:text-BrightBlue hover:font-bold hover:transition-all dark:text-gray-400'}`}
        onClick={() => changeFilter('all')}
      >
        All
      </button>

      <button
        className={`${filter === 'active' ? 'text-BrightBlue font-bold' : 'hover:text-BrightBlue hover:font-bold hover:transition-all dark:text-gray-400'}`}
        onClick={() => changeFilter('active')}
      >
        Active
      </button>

      <button
        className={`${filter === 'completed' ? 'text-BrightBlue font-bold' : 'hover:text-BrightBlue hover:font-bold hover:transition-all dark:text-gray-400'}`}
        onClick={() => changeFilter('completed')}
      >
        Completed
      </button>
    </div>
  )
}

export default Filtro
