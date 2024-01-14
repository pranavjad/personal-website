import React from 'react'
import Project from './Project'
import Link from './Link'
// 1fr minmax(auto, var(880px)) 1fr
function Main() {
  return (
    <div className='grid grid-cols-medium gap-y-24 gap-x-4 items-stretch'>
        <div className='h-[400px] flex flex-col justify-center col-start-2'>
            <h1 className='text-5xl font-medium mb-4 leading-normal font-display'>
                Hey there <div className='animate-wiggle inline-block mr-2'>👋</div>
                I'm Pranav, a first year CS student at Purdue University 🚂 interested in ML and LLMs 🤖.
            </h1>
            <div className='flex gap-2'>
                <Link href="">
                    About Me
                </Link>
                <Link href="">
                    Projects
                </Link>
                <Link href="">
                    Github
                </Link>
            </div>
        </div>
        <section id='about' className='py-8 bg-green-50 col-start-2'>
            <h2 className='text-4xl font-medium mb-4'>
                About Me
            </h2>
            <div className='mb-4 text-2xl'>
                I am currently studying CS with the machine intelligence and software engineering tracks at Purdue University.
                I'm involved with Purdue Hackers where I work on technical projects every friday at hack night and
                ML@Purdue where i'm the project lead for Purdue's TE AI Cup team. Additionally I am involved in Purdue's datamine
                where I am working with SuperfluidDX to develop machine learning models to predict Alzheimer's Disease.
            </div>
            <div className='text-2xl'>
                Resume
            </div>
        </section>
        <section id='projects' className='col-start-2'>
            <h2 className='text-4xl font-medium mb-6'>
                Projects
                
            </h2>
            <ul className='grid grid-columns-1 gap-x-4 gap-y-11'>
                <li className=''>
                    <div className='bg-gradient-to-r from-sky-200 to-indigo-200 rounded-[20px]'>
                        <img src="/Browser_Puzzle.png" alt="Picture of the browser puzzle website" className='rounded mb-2 scale-75' />
                    </div>
                    <h2 className='text-3xl font-medium py-2'>Browser Puzzle</h2>
                    <span className='text-2xl'>
                        A website to solve puzzles in the browser. Built using p5.js.
                    </span>
                </li>
                <li>
                <div className='bg-gradient-to-r from-sky-200 to-indigo-200 rounded-[20px]'>
                    <img src="/Multiplayer_Wordle.png" alt="Picture of the Multiplayer Wordle website" className='rounded mb-2 scale-75' />
                </div>
                    <h2 className='text-3xl font-medium py-2'>Multiplayer Wordle</h2>
                    <span className='text-2xl'>
                        Multiplayer wordle game made for the MIT Blueprint hackathon. Won 3rd place!
                    </span>
                </li>
                <li>
                <div className='bg-gradient-to-r from-sky-200 to-indigo-200 rounded-[20px]'>
                    <img src="/Ethereum_Dashboard.png" alt="Picture of the ethereum dashboard page" className='rounded mb-2 scale-75' />
                </div>
                    <h2 className='text-3xl font-medium py-2'>Ethereum Dashboard</h2>
                    <span className='text-2xl'>
                        Ethereum data web dashboard with custom dataset scraped from a multitude of free API sources.
                    </span>
                </li>
            </ul>
            
        </section>
    </div>
  )
}

export default Main