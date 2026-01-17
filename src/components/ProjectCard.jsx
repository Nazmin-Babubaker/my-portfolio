import { ExternalLink, Trophy } from "lucide-react";

export default function ProjectCard({ quest }) {
  return (
    <div className="bg-white border-4 border-white shadow-[0_10px_0_0_#ffc8dd] rounded-3xl overflow-hidden group hover:-translate-y-2 transition-all">
      <div className="h-48 overflow-hidden relative">
        <img src={quest.image} alt={quest.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute top-3 left-3 bg-bubblegum text-white font-pixel text-[10px] px-3 py-1 rounded-full shadow-md">
          {quest.difficulty}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <Trophy size={16} className="text-yellow-500" />
          <h3 className="font-bold text-gray-700 text-xl tracking-tight">{quest.title}</h3>
        </div>
        
        <p className="text-gray-500 text-sm mb-4 leading-relaxed font-medium">
          {quest.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {quest.rewards.map((reward) => (
            <span key={reward} className="bg-pink-50 text-bubblegum text-[10px] font-bold px-2 py-1 rounded-md border border-pink-100 uppercase">
              +{reward}
            </span>
          ))}
        </div>

        <button className="w-full bg-lavender hover:bg-bubblegum text-white font-pixel py-3 rounded-2xl transition-colors flex items-center justify-center gap-2 shadow-[0_4px_0_0_#9d81ac] active:shadow-none active:translate-y-1">
          VIEW_REWARD <ExternalLink size={14} />
        </button>
      </div>
    </div>
  );
}