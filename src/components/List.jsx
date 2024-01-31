import React from 'react'
import useTodo from '../hooks/useTodo'
import Item from './Item'
import Computed from './Computed'

const List = () => {

    const { filtroTodos } = useTodo()
    const filteredTodos = filtroTodos()

  return (
    <div className='bg-white -mt-10 md:-mt-14 relative rounded-md overflow-hidden transition-all duration-500'>
      {
        filteredTodos.map( todo => (
            <Item
                key={todo.id}
                todo={todo}
            />
        ))
      }

      <Computed />
    </div>
  )
}

export default List
