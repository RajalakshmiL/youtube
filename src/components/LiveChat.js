import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addChatMessage } from '../utils/chatSlice';
import { generateRandomNames, makeTextGenerator } from '../utils/helper';

const LiveChat = () => {
    const [livechat, setLiveChat] = useState('');
    const dispatch = useDispatch();
    const getChatMessage = useSelector((store) => store.chat.message);
    
    useEffect(()=>{
        const i = setInterval(() => {
            dispatch(addChatMessage({
                name : generateRandomNames(),
                chat : makeTextGenerator(20)
            }))
        },1000);

        return () => clearInterval(i);
    },[])
  return (
    <div className='w-[30%]'>
        <div className='ml-3 border border-black  rounded-xl bg-slate-50 h-[530px] overflow-scroll flex flex-col-reverse'>
    
            {getChatMessage.map((chat,index) => <ChatMessage key={index} name={chat.name} chat={chat.chat} />)}
        </div>
        <form className='w-full m-2 mx-5' onSubmit={
            (e) => {
                e.preventDefault();
                dispatch(addChatMessage({
                    name : 'Rajii',
                    chat : livechat
                }));
                setLiveChat('')
            }
            }>
            <input type='text' 
            value={livechat} 
            onChange={(e) => setLiveChat(e.target.value)} 
            placeholder='Chat...'
            className=' w-80 p-2 border border-gray-500 bg-gray-100 rounded-2xl'></input>
            <button className='bg-green-100 p-2 px-3 mx-2 rounded-md'>Send</button>
        </form>
  </div>
  )
}

export default LiveChat