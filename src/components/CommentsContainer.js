import React from 'react'
import { commentData } from '../utils/helper'
import CommentList from './CommentList'

const CommentsContainer = () => {
  return (
    <>
      <div className='text-2xl font-bold pt-5'>
        Comments:
      </div>
      <CommentList comments={commentData}/>
    </>
   
  )
}

export default CommentsContainer