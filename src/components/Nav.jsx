import React from 'react'
import { GoLightBulb } from "react-icons/go";

function Nav() {
  return (
    <header className='mb-5'>
      <div className='grid grid-cols-medium gap-x-4'>
        <div className='flex flex-row h-[120px] items-center col-start-2'>
          <div className='text-3xl font-bold grow select-none'>
            PJ
          </div>
          <button className='text-2xl bg-slate-50 rounded-md p-2 text-slate-500'>
            <GoLightBulb />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Nav