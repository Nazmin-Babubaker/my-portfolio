import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import { 
  Code2, FileJson, Database, Terminal, 
  Cpu, Layers, Box, Coffee, Layout, 
  Globe, Server, Settings, Search
} from "lucide-react";import SkillCard from './components/SkillCard';


const App = () => {
  return (
    <div className="min-h-screen">
        <Navbar />

      <section className="pt-32 flex flex-col items-center justify-center text-center px-4">
        <div className="relative">
    
        <h1 className="flex flex-col items-center">
        <span className="text-l font-medium text-gray-500 tracking-widest uppercase leading-none">
          Hi, I'm
        </span>
        <span className="text-7xl font-bold font-pixel text-lavender drop-shadow-[6px_6px_0px_#fb6f92] -mt-1 ">
          Nazmin!
        </span>
        </h1>

        <div className="absolute -bottom-4 -right-10 text-pop-pink animate-pulse text-2xl">💖</div>
        </div>

        <p className="mt-10 text-lg text-gray-600 max-w-md font-medium leading-relaxed">
          
           <span className="text-bubblegum font-bold">Backend developer</span> with a soft aesthetic and strong logic 

        </p>
  
  
      </section>

      <About />


   <section id="inventory" className="mt-24 px-4 max-w-6xl mx-auto pb-20">
  <h2 className="font-pixel text-2xl text-lavender text-center mb-12 drop-shadow-[3px_3px_0px_#fb6f92]">
    EQUIPPED_SKILLS
  </h2>

  <div className="flex flex-wrap justify-center gap-8 md:gap-12">
    <SkillCard icon={Globe} name="HTML" colorClass="bg-orange-100 text-orange-500" rarityColor="bg-orange-400" />
    <SkillCard icon={Layout} name="CSS" colorClass="bg-blue-100 text-blue-500" rarityColor="bg-blue-400" />
    <SkillCard icon={FileJson} name="JavaScript" colorClass="bg-yellow-100 text-yellow-600" rarityColor="bg-yellow-400" />
    
    <SkillCard icon={Server} name="Node.js" colorClass="bg-green-100 text-green-600" rarityColor="bg-green-400" />
    <SkillCard icon={Layers} name="Express" colorClass="bg-gray-100 text-gray-600" rarityColor="bg-gray-400" />
    <SkillCard icon={Coffee} name="Java" colorClass="bg-red-100 text-red-500" rarityColor="bg-red-400" />
    <SkillCard icon={Box} name="Python" colorClass="bg-blue-50 text-blue-400" rarityColor="bg-blue-300" />
    <SkillCard icon={Cpu} name="C Language" colorClass="bg-purple-100 text-purple-600" rarityColor="bg-purple-400" />

    <SkillCard icon={Database} name="SQL" colorClass="bg-indigo-100 text-indigo-500" rarityColor="bg-indigo-400" />
    <SkillCard icon={Database} name="Postgres" colorClass="bg-cyan-100 text-cyan-600" rarityColor="bg-cyan-400" />
    <SkillCard icon={Database} name="MongoDB" colorClass="bg-emerald-100 text-emerald-500" rarityColor="bg-emerald-400" />

    <SkillCard icon={Settings} name="Linux" colorClass="bg-slate-200 text-slate-700" rarityColor="bg-slate-500" />
    <SkillCard icon={Terminal} name="Bash" colorClass="bg-purple-100 text-purple-500" rarityColor="bg-purple-400" />  </div>
</section>
      
    </div>
  )
}

export default App
