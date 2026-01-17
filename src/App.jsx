import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import { 
  Code2, FileJson, Database, Terminal, 
  Cpu, Layers, Box, Coffee, Layout, 
  Globe, Server, Settings, Search,Atom,          
  Wind
} from "lucide-react";import SkillCard from './components/SkillCard';
import ProjectCard from './components/ProjectCard';
import explainerImg from "./assets/context.png";
import ritImg from "./assets/Rit.png";
import serviceImg from "./assets/service.png";
import mentoraImg from "./assets/mentora.png";
import accImg from "./assets/acc.png";
import Contact from './components/Contact';




const QUESTS = [
  {
    id: 1,
    title: "Contextual Explainer",
category: "Extension", 
    description: "An AI-powered assistant that explains content in context by analyzing user input and generating meaningful, easy-to-understand responses.",
    rewards: ["Manifest.json", "JavaScript", "HTML,CSS"],
    repoUrl: "https://github.com/Nazmin-Babubaker/contextual-explainer", 
    image: explainerImg
  },
  {
    id: 2,
    title: "RIT Tracker",
    category: "Web App", 
    description: "A campus navigation platform with indoor and outdoor mapping that helps users locate departments, facilities, and services using intelligent pathfinding.",
    rewards: ["JS", "Pannellum", "CSS"],
    repoUrl: "https://github.com/Nazmin-Babubaker/RIT_TRACKER",
    image: ritImg 
  },
  {
    id: 3,
    title: "ServiceProvision",
    category: "Web App", 
    description: "A service-based web platform that connects users with nearby workers for tasks like cleaning, gardening, and plumbing through a role-based system.",
    rewards: ["JS", "Express", "Postgres"],
    repoUrl: "https://github.com/Nazmin-Babubaker/Service-Provision", 
    image: serviceImg
  },
  {
    id: 4,
    title: "Mentora",
    category: "Extension", 
    description: "An AI-driven mentoring assistant that provides guidance, learning support, and contextual help for users through interactive conversations.",
    rewards: ["JS", "HTML", "Gemini API"],
    repoUrl: "https://github.com/Nazmin-Babubaker/SAND", 
    image: mentoraImg
  },
  {
    id: 5,
    title: "Adaptive Cruise Control",
    category: "Other", 
    description: "A driver-assistance system that automatically maintains safe speed and distance from vehicles ahead using sensor data and control logic.",
    rewards: ["ROS","Python"],
    repoUrl: "https://github.com/Nazmin-Babubaker/Adaptive-Cruise-Control", 
    image: accImg
  }
];


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


   

  <section id="inventory" className="mt-32 px-4 max-w-7xl mx-auto pb-40"> 
  <div className="flex flex-col items-center justify-center gap-2 mb-16">
    <h2 className="font-pixel text-4xl text-bubblegum drop-shadow-[3px_3px_0px_#ffc8dd]">
       EQUIPMENTS
    </h2>
    <p className="font-mono text-xs text-lavender uppercase tracking-widest">My arsenal of choice</p>
  </div>

 <div className="flex flex-wrap justify-center gap-8 md:gap-12">
  <SkillCard icon={Globe} name="HTML" colorClass="bg-orange-50 text-orange-500" rarityColor="bg-orange-400" />
  <SkillCard icon={Layout} name="CSS" colorClass="bg-blue-50 text-blue-500" rarityColor="bg-blue-400" />
  <SkillCard icon={FileJson} name="JavaScript" colorClass="bg-yellow-50 text-yellow-600" rarityColor="bg-yellow-400" />
  
  <SkillCard icon={Atom} name="React" colorClass="bg-cyan-50 text-cyan-500" rarityColor="bg-cyan-400" /> 
  <SkillCard icon={Wind} name="Tailwind" colorClass="bg-sky-50 text-sky-500" rarityColor="bg-sky-400" />  

  <SkillCard icon={Server} name="Node.js" colorClass="bg-emerald-50 text-emerald-600" rarityColor="bg-emerald-500" />
  <SkillCard icon={Layers} name="Express" colorClass="bg-slate-100 text-slate-600" rarityColor="bg-slate-500" />
  <SkillCard icon={Coffee} name="Java" colorClass="bg-red-50 text-red-600" rarityColor="bg-red-500" />
  <SkillCard icon={Box} name="Python" colorClass="bg-indigo-50 text-indigo-500" rarityColor="bg-indigo-400" />
  <SkillCard icon={Cpu} name="C Language" colorClass="bg-violet-50 text-violet-600" rarityColor="bg-violet-500" />

  <SkillCard icon={Database} name="SQL" colorClass="bg-blue-100 text-blue-700" rarityColor="bg-blue-600" />
  <SkillCard icon={Database} name="Postgres" colorClass="bg-indigo-100 text-indigo-600" rarityColor="bg-indigo-500" />
  <SkillCard icon={Database} name="MongoDB" colorClass="bg-green-50 text-green-600" rarityColor="bg-green-500" />

  <SkillCard icon={Settings} name="Linux" colorClass="bg-zinc-100 text-zinc-700" rarityColor="bg-zinc-600" />
  <SkillCard icon={Terminal} name="Bash" colorClass="bg-pink-50 text-bubblegum" rarityColor="bg-bubblegum" /> 
</div>
</section>



<section id="quests" className="mt-32 px-4 max-w-7xl mx-auto pb-40"> 
  <div className="flex flex-col items-center justify-center gap-2 mb-16">
    <h2 className="font-pixel text-4xl text-bubblegum drop-shadow-[3px_3px_0px_#ffc8dd]">
      QUEST_LOG
    </h2>
    <p className="font-mono text-xs text-lavender uppercase tracking-widest">The archive of missions</p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {QUESTS.map((quest) => (
      <ProjectCard key={quest.id} quest={quest} />
    ))}
  </div>
</section>


<Contact />
<footer className="text-center font-pixel text-[10px] text-lavender pb-10">
        © 2026 NAZMIN // MADE WITH SPARKLES & REACT
      </footer>
      
    </div>
  )
}

export default App
