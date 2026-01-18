import React from 'react';

export default function SkillCard({ icon: Icon, name, colorClass, rarityColor }) {
  return (
    <div className="group relative flex flex-col items-center">
      
      <div className={`absolute inset-0 opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-60 ${rarityColor}`}></div>
      
      <div className="relative bg-white dark:bg-dark-card border-[3px] border-gray-500 dark:border-gray-600 rounded-2xl p-3 w-32 h-44 flex flex-col items-center justify-between shadow-[6px_6px_0_0_#cdb4db] transition-all group-hover:border-bubblegum group-hover:shadow-[6px_6px_0_0_#ffc8dd] group-hover:-translate-y-2 overflow-hidden">
        
        <div className="w-full flex justify-between items-center mb-2 px-1">
          <div className={`h-1.5 w-8 rounded-full ${rarityColor} shadow-sm`}></div>
        </div>

        <div className={`relative p-4 rounded-xl transition-all duration-500 group-hover:scale-110 ${colorClass} border-2 border-transparent group-hover:border-white shadow-sm`}>
          <Icon size={32} strokeWidth={2.5} />
        </div>

        <div className="w-full mt-2 text-center">
          <p className="font-bold text-gray-700 dark:text-gray-200 text-[11px] uppercase tracking-tight group-hover:text-bubblegum transition-colors">
            {name}
          </p>
          
          <div className="mt-2 w-full h-1 bg-gray-100 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
            <div className={`h-full animate-pulse ${rarityColor}`} style={{ width: '85%' }}></div>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-4 h-4 overflow-hidden">
            <div className={`absolute top-0 right-0 w-2 h-2 rotate-45 translate-x-1 -translate-y-1 ${rarityColor} opacity-20`}></div>
        </div>

      </div>
    </div>
  );
}