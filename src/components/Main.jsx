import React from 'react'
import Project from './Project'
import LinkButton from './LinkButton'
import Link from './Link';
import { TbDownload } from "react-icons/tb";

// 1fr minmax(auto, var(880px)) 1fr
function Main() {
  return (
    <div>
        <div className='grid grid-cols-medium gap-y-24 gap-x-4 items-stretch'>
            <div className='h-[400px] flex flex-col justify-center col-start-2'>
                <h1 className='text-5xl font-medium mb-4 leading-normal font-display'>
                    Hey there <div className='animate-wiggle inline-block mr-2'>👋</div>
                    I'm Pranav, a first year CS student at Purdue University 🚂 interested in ML and LLMs 🤖.
                </h1>
                <div className='flex gap-2'>
                    <LinkButton href="">
                        About Me
                    </LinkButton>
                    <LinkButton href="">
                        Projects
                    </LinkButton>
                    <LinkButton href="">
                        Github
                    </LinkButton>
                </div>
            </div>
        </div>
        <section id='about' className='py-8'>
            <div className='bg-green-50 grid grid-cols-medium gap-x-4 items-stretch'>
                <div className='col-start-2 my-10'>
                    <h2 className='text-4xl font-medium mb-8'>
                        About Me
                    </h2>
                    <p className='mb-8 text-2xl leading-relaxed'>
                        I am studying CS with the machine intelligence and software engineering tracks at Purdue University.
                        Outside of classes, I'm active in <Link href="https://www.purduehackers.com/">Purdue Hackers </Link> 
                        where I work on technical projects every friday at hack night. 
                        I'm also active in <Link href="https://mlp.cs.purdue.edu/">ML@Purdue</Link> where I am lead for the club's TE AI Cup team. 
                        Following my interest in AI, I recently began doing research in LLMs and intelligent agents with Purdue's <Link href="https://e-lab.github.io/">ELab</Link>.
                        When I'm not coding, you can find me practicing my saxophone, climbing, or playing ultimate frisbee.
                    </p>
                    <button className='text-1xl bg-green-600 p-3 rounded-lg text-green-50 flex flex-row items-center'>
                        Resume.pdf
                        <TbDownload className='ml-2 text-2xl'/>
                    </button>
                </div>
            </div>
        </section>
        <section id='projects' className='grid grid-cols-medium gap-x-4 items-stretch mt-8'>
            <div className='col-start-2'>
                <h2 className='text-4xl font-medium mb-6'>
                    Projects
                
                </h2>
                <ul className='grid grid-columns-1 gap-x-4 gap-y-24'>
                    <li className=''>
                        <div className='bg-gradient-to-r from-emerald-100 to-green-100 rounded-[20px]'>
                            <img src="/Browser_Puzzle.png" alt="Picture of the browser puzzle website" className='rounded mb-2 scale-75 drop-shadow-2xl' />
                        </div>
                        <h2 className='text-3xl font-medium py-2'>Browser Puzzle</h2>
                        <span className='text-2xl text-zinc-500'>
                            Browser based puzzle game. Built using p5.js.
                        </span>
                    </li>
                    <li>
                    <div className='bg-gradient-to-r from-sky-100 to-indigo-100 rounded-[20px]'>
                        <img src="/Multiplayer_Wordle.png" alt="Picture of the Multiplayer Wordle website" className='rounded mb-2 scale-75 drop-shadow-2xl' />
                    </div>
                        <h2 className='text-3xl font-medium py-2'>Multiplayer Wordle</h2>
                        <span className='text-2xl text-zinc-500'>
                            Multiplayer wordle game made for the MIT Blueprint hackathon. Won 3rd place!
                        </span>
                    </li>
                    <li>
                    <div className='bg-gradient-to-r from-indigo-100 to-rose-100 rounded-[20px]'>
                        <img src="/Ethereum_Dashboard.png" alt="Picture of the ethereum dashboard page" className='rounded mb-2 scale-75 drop-shadow-2xl' />
                    </div>
                        <h2 className='text-3xl font-medium py-2'>Ethereum Dashboard</h2>
                        <span className='text-2xl text-zinc-500'>
                            Ethereum data web dashboard with custom dataset scraped from a multitude of free API sources.
                        </span>
                    </li>
                </ul>
            </div>
        </section>
    </div>
  )
}

export default Main