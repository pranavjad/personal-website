import React, { Children } from 'react'

function LinkButton(props) {
  return (
    <a href={props.href} className='relative'>
      <div className='relative rounded-md bg-green-50 text-green-800 p-3 z-10 hover:shadow-mui transition-shadow'>
        {props.children}
      </div>
      {/* <div className='absolute opacity-0 hover:opacity-75 -inset-2 rounded-lg bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 blur'>
      </div> */}
    </a>
  )
}

export default LinkButton