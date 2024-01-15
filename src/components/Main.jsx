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
                    <LinkButton href="#about">
                        About Me
                    </LinkButton>
                    <LinkButton href="#projects">
                        Projects
                    </LinkButton>
                    <LinkButton href="https://github.com/pranavjad">
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
        <div className='grid grid-cols-medium gap-x-4 items-stretch mt-8 gap-y-24'>
            <section id='projects' className='col-start-2'>
                <div>
                    <h2 className='text-4xl font-medium mb-6'>
                        Projects
                    </h2>
                    <ul className='grid grid-columns-1 gap-x-4 gap-y-24'>
                        <Project img="/Browser_Puzzle.png" title="Browser Puzzle" gradient='bg-gradient-to-r from-blue-100 to-indigo-100'>
                            Browser based puzzle game. Built using p5.js.
                        </Project>
                        <Project img='/Multiplayer_Wordle.png' title="Multiplayer Wordle" gradient="bg-gradient-to-r from-sky-100 to-indigo-100">
                            Multiplayer wordle game made for the MIT Blueprint hackathon. Won 3rd place!
                        </Project>
                        <Project img='/Ethereum_Dashboard.png' title="Ethereum Dashboard" gradient="bg-gradient-to-r from-indigo-100 to-rose-100">
                            Ethereum data web dashboard with custom dataset scraped from a multitude of free API sources.
                        </Project>
                    </ul>
                </div>
            </section>
            <section id='contact' className='col-start-2 my-6'>
                <h2 className='text-4xl font-medium mb-6'>
                    Contact
                </h2>
                <p className='text-2xl'>
                    Email me at pra168109@gmail.com, or jadhav14@purdue.edu.
                </p>
            </section>
        </div>
    </div>
  )
}

export default Main