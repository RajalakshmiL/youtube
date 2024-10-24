import React from 'react'

const ChatMessage = ({name, chat}) => {
  return (
     <div className='p-2 flex items-center'>
         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMM9iuYpLlg4Z4qGzMITpHX9PmdEERT-GHtv7RXnVa7SXaJ6-pdi48oj792H-zPNBpiG0&usqp=CAU' alt='user-icon' className='h-8'></img>
         <span className='font-bold px-2'>{name}</span>
         <span >{chat}</span>
    </div>

  )
}

export default ChatMessage