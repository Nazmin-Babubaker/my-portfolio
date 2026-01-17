import { ExternalLink, Trophy, Star, Layout, Puzzle, Terminal } from "lucide-react";

export default function ProjectCard({ quest }) {
  const getCategoryStyles = (category) => {
    switch (category) {
      case "Web App":
        return { color: "bg-blue-400", icon: Layout };
      case "Extension":
        return { color: "bg-purple-400", icon: Puzzle };
      default:
        return { color: "bg-bubblegum", icon: Terminal };
    }
  };

  const styles = getCategoryStyles(quest.category);
  const CategoryIcon = styles.icon;

  return (
    <div className="bg-white border-[6px] border-white shadow-[10px_10px_0_0_#ffc8dd] rounded-4xl overflow-hidden group hover:-translate-y-3 transition-all duration-300 flex flex-col h-full">
      
      <div className="h-44 overflow-hidden relative">
        <img 
          src={quest.image} 
          alt={quest.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
        />
        
        <div className="absolute top-0 right-0 p-4">
          <div className={`flex items-center gap-1.5 px-3 py-1 rounded-lg border-2 border-white shadow-md font-pixel text-[8px] uppercase text-white ${styles.color}`}>
            <CategoryIcon size={10} />
            {quest.category}
          </div>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <div className="bg-pink-100 p-1.5 rounded-lg">
            <Trophy size={16} className="text-bubblegum" />
          </div>
          <h3 className="font-bold text-gray-700 text-lg leading-tight group-hover:text-bubblegum transition-colors">
            {quest.title}
          </h3>
        </div>
        
        <p className="text-gray-500 text-xs mb-4 leading-relaxed font-medium line-clamp-3">
          {quest.description}
        </p>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-1.5 mb-5">
            {quest.rewards.map((reward) => (
              <span key={reward} className="bg-[#fff0f3] text-bubblegum text-[9px] font-bold px-2 py-1 rounded-md border border-pink-100 uppercase tracking-tighter">
                +{reward}
              </span>
            ))}
          </div>

          <button className="w-full bg-lavender hover:bg-bubblegum text-white font-pixel text-xs py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_4px_0_0_#b596c4] hover:shadow-[0_4px_0_0_#fb6f92] active:translate-y-1 active:shadow-none">
            VIEW_SOURCE <ExternalLink size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}