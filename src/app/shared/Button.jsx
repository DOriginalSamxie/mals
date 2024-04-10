// components/Button.jsx

import React from 'react'

const Button = ({ text, icon, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={` flex  items-center justify-center px-6 py-3 border border-transparent text-base font-medium  text-white focus:outline-none  ${className}`}
    >
      {icon && <span className='mr-1'>{icon}</span>}
      {text}
    </button>
  )
}

export default Button
