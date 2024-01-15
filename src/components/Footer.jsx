import React from 'react'
import { GoLightBulb } from "react-icons/go";

function Nav() {
  return (
    <footer className='mt-12 border-t-2'>
      <div className='grid grid-cols-medium gap-x-4'>
        <div className='h-[120px] items-center col-start-2'>
            <div className='grid-cols-3'>
                <div></div>
                <div></div>
                <div></div>
            </div>
          {/* <div className='text-3xl font-bold grow select-none'>
            PJ
          </div>
          <button className='text-2xl bg-slate-50 rounded-md p-2 text-slate-500'>
            <GoLightBulb />
          </button> */}
        </div>
      </div>
    </footer>
  )
}

export default Nav