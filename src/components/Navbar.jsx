import { Heart, Sparkles, Home, Briefcase, Mail } from "lucide-react";

export default function Navbar() {
  return (
  <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-4xl z-50">


    <div className="bg-white border-[3px] border-bubblegum rounded-2xl shadow-[0_6px_0_0_#cdb4db]  flex items-center justify-between px-3 py-2">
        
        <div className="flex items-center gap-3">
          <div className="bg-bubblegum p-2 rounded-lg border-2 border-white shadow-sm">
                <Sparkles className="text-white" size={20} />
          </div>
          <div className="flex flex-col">
            <span className="font-pixel text-xs text-bubblegum leading-none">LVL 22</span>
            <span className="font-bold text-gray-700 tracking-tight">NZABBKR</span>
          </div>
        </div>

        
        <ul className="hidden md:flex items-center gap-1">
  
            <a href="#" className="group flex flex-col items-center px-4 py-1 cursor-pointer transition-all hover:-translate-y-1">
                <span className="text-[10px] font-pixel text-gray-400 group-hover:text-green-400">01</span>
                <span className="font-bold text-gray-600 group-hover:text-green-400 uppercase text-xs">Home</span>
            </a>

            <div className="w-0.5 h-6 bg-pink-100 mx-2"></div>

  
            <a href="#about" className="group flex flex-col items-center px-4 py-1 cursor-pointer transition-all hover:-translate-y-1">
                <span className="text-[10px] font-pixel text-gray-400 group-hover:text-green-400">02</span>
                <span className="font-bold text-gray-600 group-hover:text-green-400 uppercase text-xs">Profile</span>
            </a>

            <div className="w-0.5 h-6 bg-pink-100 mx-2"></div>

  
            <a href="#inventory" className="group flex flex-col items-center px-4 py-1 cursor-pointer transition-all hover:-translate-y-1">
                <span className="text-[10px] font-pixel text-gray-400 group-hover:text-green-400">03</span>
                <span className="font-bold text-gray-600 group-hover:text-green-400 uppercase text-xs">Equipments</span>
            </a>

            <div className="w-0.5 h-6 bg-pink-100 mx-2"></div>


            <a href="#quests" className="group flex flex-col items-center px-4 py-1 cursor-pointer transition-all hover:-translate-y-1">
                <span className="text-[10px] font-pixel text-gray-400 group-hover:text-green-400">04</span>
                <span className="font-bold text-gray-600 group-hover:text-green-400 uppercase text-xs">Quest</span>
            </a>

            <div className="w-0.5 h-6 bg-pink-100 mx-2"></div>


            <a href="#contact" className="group flex flex-col items-center px-4 py-1 cursor-pointer transition-all hover:-translate-y-1">
                <span className="text-[10px] font-pixel text-gray-400 group-hover:text-green-400">05</span>
                <span className="font-bold text-gray-600 group-hover:text-green-400 uppercase text-xs">Contact</span>
            </a>
        </ul>

      
        <div className="flex items-center gap-4">
          <div className="hidden sm:block w-24 h-3 bg-pink-100 rounded-full overflow-hidden border border-pink-200">
            <div className="w-[85%] h-full bg-bubblegum animate-pulse"></div>
          </div>
          <button className="bg-bubblegum border-2 border-white text-white p-2 rounded-xl shadow-[4px_4px_0_0_#cdb4db] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all">
            <Heart size={20} fill="white" />
          </button>
        </div>
    </div>
 </nav>
  );
}