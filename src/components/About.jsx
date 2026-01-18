import { Star, Heart, Zap, Coffee, Shield, Swords, Wand2, Sparkles } from "lucide-react";
import myAvatar from "../assets/avatar.png";
export default function About() {
  return (
    <section id="about" className="mt-32 px-4 max-w-4xl mx-auto flex justify-center">
      <div className="w-full bg-[#fffcf2] dark:bg-dark-card border-[6px] border-bubblegum rounded-[40px] shadow-[15px_15px_0_0_#ffc8dd] dark:shadow-[15px_15px_0_0_#4a3a40] overflow-hidden relative">
        
        <div className="bg-bubblegum p-4 flex justify-between items-center border-b-[6px] border-bubblegum">
          <div className="flex gap-2">
            <div className="w-4 h-4 rounded-full bg-white shadow-inner"></div>
            <div className="w-4 h-4 rounded-full bg-white/50"></div>
          </div>
          <span className="font-pixel text-white text-sm tracking-[0.2em]">The_Character</span>
          <div className="w-10"></div>
        </div>

        <div className="p-8 md:p-12 flex flex-col md:flex-row gap-12">
          
          <div className="flex flex-col items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-tr from-pink-200 to-lavender rounded-full animate-spin-slow opacity-30"></div>
              
        <div className="relative w-64 h-64 bg-white border-4 border-bubblegum rounded-3xl overflow-hidden flex items-center justify-center shadow-inner">                 <img 
                   src={myAvatar} 
                   alt="Nazmin Pixel Avatar" 
                   className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                 />
              </div>
              
              <div className="absolute -top-4 -left-4 bg-yellow-400 border-4 border-white text-white font-pixel px-4 py-2 rounded-2xl -rotate-12 shadow-lg">
                LVL 22
              </div>
            </div>

            <div className="mt-8 w-full max-w-50">
              <div className="flex justify-between font-pixel text-[10px] mb-1 text-gray-500">
                <span>EXP</span>
                <span>8500 / 10000</span>
              </div>
              <div className="h-4 w-full bg-pink-100 rounded-lg border-2 border-bubblegum p-0.5">
                <div className="h-full bg-bubblegum rounded-sm w-[85%]"></div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="mb-6">
              <h2 className="text-4xl font-black text-gray-700 dark:text-gray-300 uppercase italic tracking-tighter">
                Nazmin <span className="text-bubblegum">Babu Baker</span>
              </h2>
              <div className="h-1 w-24 bg-lavender mt-1"></div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 font-mono leading-relaxed mb-8 bg-white/50 dark:bg-black/20 p-4 rounded-2xl border-2 border-dashed border-pink-200 dark:border-pink-900">
              I’m a Computer Science student with a strong interest in backend development, system design, and network communication. I enjoy working on APIs, authentication, databases, backend services, and network protocols that make applications efficient, secure, and reliable. 
              Through projects like indoor navigation systems, AI tools, and service platforms, I enjoy exploring new technologies and learning by building. I focus on writing clean, scalable code and continuously strengthening my skills while creating practical, impactful solutions.
            </p>

            
          </div>
        </div>

        <div className="bg-pink-50 p-6 flex flex-wrap justify-center gap-6 border-t-4 border-white">
          <EquipmentSlot icon={Heart} label="Kindness" />
          <EquipmentSlot icon={Zap} label="Fast Learner" />
          <EquipmentSlot icon={Coffee} label="Curious" />
        </div>
      </div>
    </section>
  );
}



function EquipmentSlot({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full border-2 border-white shadow-sm hover:scale-105 transition-transform cursor-default">
      <Icon size={14} className="text-bubblegum" />
      <span className="text-xs font-bold text-gray-600 tracking-tight">{label}</span>
    </div>
  );
}