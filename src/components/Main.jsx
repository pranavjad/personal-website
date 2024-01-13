import React from 'react'
import Project from './Project'
// 1fr minmax(auto, var(880px)) 1fr
function Main() {
  return (
    <div className='grid grid-cols-medium gap-y-12 gap-x-4'>
        <div></div>
        <div className='h-[400px] flex flex-col justify-center'>
            <h1 className='text-5xl font-bold mb-4'>
                Hello! I'm Pranav. A first year CS student at Purdue University interested in ML and LLMs.
            </h1>
            <div className='flex gap-5 text-2xl'>
                <a href="">
                    Work
                </a>
                <a href="">
                    Projects
                </a>
                <a href="">
                    Github
                </a>
            </div>
        </div>
        <div></div>
        <div></div>
        <section id='about' className=''>
            <h2 className='text-4xl font-bold mb-4'>
                About Me
            </h2>
            <div className='mb-4 text-base'>
                I am currently studying CS with the machine intelligence and software engineering tracks at Purdue University.
                I'm involved with Purdue Hackers where I work on technical projects every friday at hack night and
                ML@Purdue where i'm the project lead for Purdue's TE AI Cup team. Additionally I am involved in Purdue's datamine
                where I am working with SuperfluidDX to develop machine learning models to predict Alzheimer's Disease.
            </div>
            <div className='text-1xl'>
                Resume
            </div>
        </section>
        <div></div>
        <div></div>
        <section id='projects' className=''>
            <h2 className='text-4xl font-bold mb-6'>
                Projects
                
            </h2>
            <ul className='grid grid-columns-1 gap-x-4 gap-y-11'>
                <li className=''>
                    <div className='bg-gradient-to-r from-sky-500 to-indigo-500 rounded-[20px]'>
                        <img src="/Browser_Puzzle.png" alt="Picture of the browser puzzle website" className='rounded mb-2 scale-75' />
                    </div>
                    <h2 className='text-2xl font-bold'>Browser Puzzle</h2>
                    <span className=''>
                        A website to solve puzzles in the browser. Built using p5.js.
                    </span>
                </li>
                <li>
                <div className='bg-gradient-to-r from-sky-500 to-indigo-500 rounded-[20px]'>
                    <img src="/Multiplayer_Wordle.png" alt="Picture of the Multiplayer Wordle website" className='rounded mb-2 scale-75' />
                </div>
                    <h2 className='text-2xl font-bold'>Multiplayer Wordle</h2>
                    <span className=''>
                        Multiplayer wordle game made for the MIT Blueprint hackathon. Won 3rd place!
                    </span>
                </li>
                <li>
                <div className='bg-gradient-to-r from-sky-500 to-indigo-500 rounded-[20px]'>
                    <img src="/Ethereum_Dashboard.png" alt="Picture of the ethereum dashboard page" className='rounded mb-2 scale-75' />
                </div>
                    <h2 className='text-2xl font-bold'>Ethereum Dashboard</h2>
                    <span className=''>
                        Ethereum data web dashboard with custom dataset scraped from a multitude of free API sources.
                    </span>
                </li>
            </ul>
            
        </section>
        <div></div>
    </div>
  )
}

export default Main