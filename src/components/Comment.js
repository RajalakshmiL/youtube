import React from 'react'

const Comment = ({data}) => {
const {name, text, replies} = data; 
  return (
    <div className='flex p-3 bg-gray-100'>
         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMM9iuYpLlg4Z4qGzMITpHX9PmdEERT-GHtv7RXnVa7SXaJ6-pdi48oj792H-zPNBpiG0&usqp=CAU' alt='user-icon' className='h-8'></img>
         <div className='pl-2'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
         </div>
    </div>
  )
}

export default Comment