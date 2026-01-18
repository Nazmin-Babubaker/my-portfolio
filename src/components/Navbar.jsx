import { useState, useEffect } from "react";
import { Heart, Sparkles, Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [progress, setProgress] = useState(0);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );


  useEffect(() => {
    
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setProgress(Math.round(scrolled));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-4xl z-50">
      <div className="bg-white dark:bg-dark-card border-[3px] border-bubblegum dark:border-lavender rounded-2xl shadow-[0_6px_0_0_#cdb4db] flex items-center justify-between px-3 py-2 transition-colors">
        
        <div className="flex items-center gap-3">
          <div className="bg-bubblegum p-2 rounded-lg border-2 border-white shadow-sm">
            <Sparkles className="text-white" size={20} />
          </div>
          <div className="flex flex-col">
            <span className="font-pixel text-[8px] text-bubblegum dark:text-lavender leading-none uppercase">
              Exp: {progress}%
            </span>
            <span className="font-bold text-gray-700 dark:text-gray-200 tracking-tight">NZABBKR</span>
          </div>
        </div>

        <ul className="hidden md:flex items-center gap-1">
          <NavLink href="#" num="01" label="Home" />
          <Divider />
          <NavLink href="#about" num="02" label="Profile" />
          <Divider />
          <NavLink href="#inventory" num="03" label="Equipments" />
          <Divider />
          <NavLink href="#quests" num="04" label="Quest" />
          <Divider />
          <NavLink href="#contact" num="05" label="Contact" />
        </ul>

        <div className="flex items-center gap-4">
          {/* Progress Bar Container */}
          <div className="hidden sm:flex flex-col items-end gap-1">
             <span className="font-pixel text-[7px] text-gray-400 uppercase">Progress</span>
             <div className="w-24 h-3 bg-pink-100 dark:bg-gray-700 rounded-full overflow-hidden border border-pink-200 dark:border-gray-600">
                <div 
                  className="h-full bg-bubblegum transition-all duration-300 ease-out" 
                  style={{ width: `${progress}%` }}
                ></div>
             </div>
          </div>
          
         <button 
            onClick={() => setDarkMode(!darkMode)}
            className="bg-bubblegum dark:bg-lavender border-2 border-white text-white p-2 rounded-xl shadow-[4px_4px_0_0_#cdb4db] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
          >
            {darkMode ? <Sun size={20} fill="white" /> : <Moon size={20} fill="white" />}
          </button>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, num, label }) {
  return (
    <a href={href} className="group flex flex-col items-center px-4 py-1 cursor-pointer transition-all hover:-translate-y-1">
      <span className="text-[10px] font-pixel text-gray-400 group-hover:text-green-400">{num}</span>
      <span className="font-bold text-gray-600 dark:text-gray-300 group-hover:text-green-400 uppercase text-xs">{label}</span>
    </a>
  );
}

function Divider() {
  return <div className="w-0.5 h-6 bg-pink-100 mx-1"></div>;
}