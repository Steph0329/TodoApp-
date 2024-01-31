import React, { useEffect, useState } from 'react'
import MoonIcon from './icons/MoonIcon'
import SunIcon from './icons/SunIcon'
import Form from './Form'

const initialValueDarkMode = localStorage.getItem('theme') === 'dark'

const Header = () => {

  const [darkMode, setDarkMode] = useState(initialValueDarkMode)

  useEffect(() => {
    if(darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  return (
    <header className="h-52 bg-mobile-light bg-no-repeat bg-cover bg-center relative sm:bg-desktop-light dark:sm:bg-desktop-dark md:h-60 md:px-20 lg:px-60 xl:px-96 2xl:px-[450px] transition-all duration-500 dark:bg-mobile-dark">
        <section className='mx-auto px-7 py-10 md:px-0'>
            <div className='flex justify-between mb-8'>
                <h1 className='uppercase text-VeryLightGray tracking-[0.3em] font-bold text-2xl md:text-4xl'>Todo</h1>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <SunIcon /> : <MoonIcon />}
                </button>
            </div>

            <Form />
        </section>
    </header>
  )
}

export default Header
