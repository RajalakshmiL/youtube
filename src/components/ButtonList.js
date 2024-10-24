import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const buttons = ['All','Music','Live','Cricket','Gaming','Mantras','News','Motivation','Songs','Information Technology','Plan','Podcasts'];
  return (
    <div className='flex gap-3'>
        {buttons.map((button,index)=><Button key={index} button={button}/>)}
    </div>
  )
}

export default ButtonList