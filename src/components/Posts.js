import React from 'react'

function Posts({url}) {
  return (
    <div className='post__image'>
        <img src={url} alt="" />
    </div>
  )
}

export default Posts