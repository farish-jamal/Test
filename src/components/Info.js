import React from 'react'

function Info({heading, description}) {
  return (
    <div className='pro__info'>
       <p className='heading'>{heading}</p>
       <p className='desc'>{description}</p>
    </div>
  )
}

export default Info