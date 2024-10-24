import React from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { GrChannel } from "react-icons/gr";
import { GoHistory } from "react-icons/go";
import { CgPlayList } from "react-icons/cg";
import { RiArrowRightSLine } from "react-icons/ri";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if(!isMenuOpen) return null;
  
  return (
    <div className='px-4 py-3 shadow-md' id='nav-bar'>
      <ul className='list-none '>
      <Link to='/'><li><AiOutlineHome fontSize={20}/>Home</li></Link>
        <Link to='/'><li><SiYoutubeshorts fontSize={20}/>Shorts</li></Link>
        <Link to='/'><li><MdOutlineSubscriptions fontSize={20}/>Subscribtions</li></Link>
      </ul>
      <h1 className='flex font-bold pt-5'>You <RiArrowRightSLine fontSize={20} className='mt-1 ml-1'/></h1>
      <ul className='list-none pt-2'>
        <Link to='/'><li><GrChannel fontSize={20}/>Your Channel</li></Link>
        <Link to='/'><li><GoHistory fontSize={20}/>History</li></Link>
        <Link to='/'><li><CgPlayList fontSize={20}/> Playlists</li></Link>
        <Link to='/'><li><CgPlayList fontSize={20}/> Playlists</li></Link>
        <Link to='/'><li><CgPlayList fontSize={20}/> Playlists</li></Link>
      </ul>
      <h1 className='flex font-bold pt-5'>Subscribtions</h1>
      <ul className='list-none pt-2'>
        <Link to='/'><li><GrChannel fontSize={20}/>Your Channel</li></Link>
        <Link to='/'><li><GoHistory fontSize={20}/>History</li></Link>
        <Link to='/'><li><CgPlayList fontSize={20}/> Playlists</li></Link>
        <Link to='/'><li><CgPlayList fontSize={20}/> Playlists</li></Link>
        <Link to='/'><li><CgPlayList fontSize={20}/> Playlists</li></Link>
      </ul>
      <h1 className='flex font-bold pt-5'>Watch Later</h1>
      <ul className='list-none pt-2'>
        <Link to='/'><li><GrChannel fontSize={20}/>Your Channel</li></Link>
        <Link to='/'><li><GoHistory fontSize={20}/>History</li></Link>
        <Link to='/'><li><CgPlayList fontSize={20}/> Playlists</li></Link>
        <Link to='/'><li><CgPlayList fontSize={20}/> Playlists</li></Link>
        <Link to='/'><li><CgPlayList fontSize={20}/> Playlists</li></Link>
      </ul>
    </div>
  )
}

export default Sidebar