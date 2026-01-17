import React from 'react';

export default function SkillCard({ icon: Icon, name, colorClass, rarityColor }) {
  return (
    <div className="group relative flex flex-col items-center">
     
      <div className={`absolute inset-0 opacity-20 blur-xl transition-opacity group-hover:opacity-50 ${rarityColor}`}></div>
      
      <div className="relative bg-white/40 backdrop-blur-md border-[3px] border-white rounded-2xl p-4 w-32 h-40 flex flex-col items-center justify-between shadow-[0_8px_0_0_rgba(0,0,0,0.05)] transition-all group-hover:-translate-y-2 group-hover:shadow-[0_12px_0_0_rgba(0,0,0,0.1)]">
        
        <div className={`h-1 w-12 rounded-full mb-2 ${rarityColor}`}></div>

        <div className={`relative p-4 rounded-xl transition-transform ${colorClass}`}>
          <Icon size={32} strokeWidth={2.5} />
        </div>

        <div className="w-full text-center">
          <p className="text-[10px] font-pixel uppercase text-gray-400 tracking-tighter">Legendary</p>
          <p className="font-bold text-gray-700 text-sm leading-none pb-1">{name}</p>
        </div>

        <div className="absolute top-1 right-2 opacity-0 group-hover:opacity-100 transition-opacity">✨</div>
      </div>
    </div>
  );
}