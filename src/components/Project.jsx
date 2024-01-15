import React from 'react'

function Project(props) {
  return (
    <li className=''>
            <div className={`
                ${props.gradient}
                relative bg-inherit rounded-[20px]
                before:${props.gradient.split(' ')[0]} before:${props.gradient.split(' ')[1]} before:${props.gradient.split(' ')[2]}
                before:rounded-20px before:-inset-4 before:blur-md before:absolute before:opacity-0 before:rounded-[20px]
                hover:before:opacity-50 before:z-[-1] before:transition-opacity before:duration-300
                `}
            >
                <img src={props.img} alt={`Picture of the ${props.title} webpage`} className='rounded mb-2 scale-75 drop-shadow-2xl' />
            </div>
        <h2 className='text-3xl font-medium py-2'>{props.title}</h2>
        <span className='text-2xl text-zinc-500'>
            {props.children}
        </span>
    </li>
  )
}

export default Project