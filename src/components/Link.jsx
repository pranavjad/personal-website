import React from 'react'

function Link(props) {
  return (
    <a className='text-green-800 border-transparent border-b-2 border-dotted transition-colors ease-in duration-150  hover:border-green-600' href={props.href}>
        {props.children}
    </a>
  )
}

export default Link