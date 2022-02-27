import React from 'react'

export default function Title({title, span}) {
  return (
    <div className='Title'>
        <h3>
            {title}
            <span>{span}</span>
        </h3>
    </div>
  )
}
