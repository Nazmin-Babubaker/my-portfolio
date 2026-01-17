import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'

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
      
    </div>
  )
}

export default App
