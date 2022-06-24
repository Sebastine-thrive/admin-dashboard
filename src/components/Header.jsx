import React from 'react'

const Header = ({ category, title }) => {
  return (
    <div className='mb-10'>
      <p className='text-gray-400 dark:text-white'>
        {category}
      </p>
      <p className='text-2xl font-extrabold tracking-tight text-slate-800 dark:text-white'> {title} 
      </p>
    </div>
  )
}

export default Header