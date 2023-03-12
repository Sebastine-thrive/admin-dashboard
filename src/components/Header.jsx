import React from 'react'

const Header = ({ title }) => {
  return (
    <div className='my-12 md:mb-10'>
      <p className='text-2xl font-extrabold tracking-tight text-slate-800 dark:text-white'> {title} 
      </p>
    </div>
  )
}

export default Header;