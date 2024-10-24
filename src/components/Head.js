import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { CiSearch } from "react-icons/ci";
import { cacheQuery } from '../utils/searchSlice';


const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const cachedResult = useSelector((store) => store.search);
  
  useEffect(() => {  // debouncing method to set the time interval
    const timer = setTimeout(() =>
    {
      if(cachedResult[searchQuery]) {
        setSuggestions(cachedResult[searchQuery])
      }else{
        getSearchSuggestion()
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    }
  },[searchQuery]);

  const getSearchSuggestion = async() => {
    const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheQuery({    // Caching the search result
      [searchQuery] : json[1]
    }))

  }
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }
  const HandleSearchClick = (suggestion) => {
    setSearchQuery(suggestion);
  }

  return (
    <div className='grid grid-flow-col px-5 py-3 gap-5 fixed top-0 w-full bg-white'>
      <div className='flex col-span-1'>
        <img onClick={() => toggleMenuHandler()}
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0evWy6vmua96UkF8RqHQv-SoBcuu3V9fwZw&s' alt='menu' className=' h-7 cursor-pointer bg-gray-300'></img>
        <img src='https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-9.png' alt='youtube-logo' className='h-5 m-1 mx-5' ></img>
      </div>
      
      <div className='col-span-7 px-36 '>
        <input type='text' 
        onChange={(e)=>setSearchQuery(e.target.value)} 
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setShowSuggestions(false)}
        value={searchQuery} 
        className='w-3/4 border border-gray-200 px-5 rounded-l-full shadow-sm shadow-gray-100 py-2' />
        <button className='border border-gray-200 rounded-r-full bg-gray-100 px-2 pt-1 pb-3'><CiSearch fontSize={20} className='top-2'/></button>
        {showSuggestions && suggestions.length > 0 && 
          <div className='fixed bg-white p-2 shadow-md w-[40%] rounded-lg'>
            <ul>
              {suggestions.map((suggestion,key) => <div key={key}><li onMouseDown={()=>HandleSearchClick(suggestion)} className='p-2 hover:bg-gray-100 flex gap-3 cursor-pointer' ><CiSearch fontSize={20}  />{suggestion}</li></div>)}
            </ul>
          </div>
        }
       
      </div>   
      <div className='col-span-1'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMM9iuYpLlg4Z4qGzMITpHX9PmdEERT-GHtv7RXnVa7SXaJ6-pdi48oj792H-zPNBpiG0&usqp=CAU' alt='user-icon' className='h-8'></img>
      </div>
    </div>
  )
}

export default Head