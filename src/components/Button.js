import React from 'react'

const Button = ({button}) => {
  return (
    <div>
        <button className='bg-gray-100 px-3 py-1 rounded-lg'>{button}</button>
    </div>
  )
}

export default Button