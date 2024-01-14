import React, { Children } from 'react'

function LinkButton(props) {
  return (
    <a href={props.href} className='bg-green-50 p-3 rounded-md text-green-800'>
        {props.children}
    </a>
  )
}

export default LinkButton