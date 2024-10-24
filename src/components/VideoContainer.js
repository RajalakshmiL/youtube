import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard, { AdVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos(); 
  }, []);

  const getVideos = async () => {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      setVideos(json?.items);
  }
  return (
    <div className='flex flex-wrap'>
      {videos[0] && <Link to='#' className='mt-8 w-1/3 p-2'><AdVideoCard info={videos[0]} /></Link>}
      {videos.map((video) => <Link key={video.id} to={'/watch?v='+ video.id} className='mt-8 w-1/3 p-2'> <VideoCard info={video} /> </Link>
      )}
    </div>
  )

}

export default VideoContainer