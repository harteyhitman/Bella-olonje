import React from 'react'

const Button = ({label, className, onClick}) => {
  return (
    <button onClick={onClick} className={className}>
    {label}
  </button>
  )
}

export default Button