import React from 'react'

const VideoCard = ({info,ad}) => {
  
    const {snippet, statistics} = info;
    const {channelTitle,title,thumbnails} = snippet;
  return (
    <div>
        <img alt='thumbnail' src={thumbnails.medium.url} className='pb-2 rounded-2xl w-full'></img>
        {!ad &&
            <ul>
                <li className='font-bold'>{title}</li>
                <li className='text-gray-400 font-bold'>{channelTitle}</li>
                <li>{statistics.viewCount} views</li>  
            </ul>
        }
        {ad && <div className='text-center p-2'>Advertisment</div> }
    </div>
  )
}

export const AdVideoCard = ({info}) => {
    return (
        <div className='border border-gray-500 rounded-2xl'>
            <VideoCard info={info} ad={1}/>
        </div>
        
    )
}

export default VideoCard