import React from 'react'
import Posts from './Posts'

function ContentRight() {
  return (
    <div className='content__right'>
        <p className='post__heading'>Posts</p>
        <div className="posts">
            <Posts url="https://images.news18.com/ibnlive/uploads/2022/03/pjimage-2022-03-26t235858.237-16483196813x2.jpg"/>
            <Posts url="https://images.news18.com/ibnlive/uploads/2022/03/pjimage-2022-03-26t235858.237-16483196813x2.jpg"/>
            <Posts url="https://images.news18.com/ibnlive/uploads/2022/03/pjimage-2022-03-26t235858.237-16483196813x2.jpg"/>
            <Posts url="https://images.news18.com/ibnlive/uploads/2022/03/pjimage-2022-03-26t235858.237-16483196813x2.jpg"/>
            <Posts url="https://images.news18.com/ibnlive/uploads/2022/03/pjimage-2022-03-26t235858.237-16483196813x2.jpg"/>
            <Posts url="https://images.news18.com/ibnlive/uploads/2022/03/pjimage-2022-03-26t235858.237-16483196813x2.jpg"/>
        </div>
    </div>
  )
}

export default ContentRight