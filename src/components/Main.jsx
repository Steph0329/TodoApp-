import React from 'react'
import List from './List'
import Filtro from './Filtro'

const Main = () => {
  return (
    <main className='bg-gray-200 px-7 dark:bg-VeryDarkBlue md:px-20 lg:px-60 xl:px-96 2xl:px-[450px]'>
      <List />
      <Filtro />
    </main>
  )
}

export default Main
