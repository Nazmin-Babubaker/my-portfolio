import { Mail, Github, Instagram, MapPin, Navigation, Linkedin} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="mt-32 px-4 max-w-4xl mx-auto pb-40">
      <div className="text-center mb-10">
        <h2 className="font-pixel text-2xl text-bubblegum drop-shadow-[2px_2px_0px_#ffc8dd] dark:drop-shadow-[2px_2px_0px_#4a3a40]">
        CONTACT_POINT
        </h2>
        <p className="font-mono text-xs text-gray-400 mt-2 uppercase tracking-[0.3em]">
          Travel to the final destination
        </p>
      </div>

      <div className="relative bg-[#fefae0] dark:bg-zinc-900 border-8 border-[#d4a373] dark:border-zinc-700 rounded-[50px] p-8 md:p-16 shadow-[20px_20px_0_0_#faedcd] dark:shadow-[20px_20px_0_0_#27272a] overflow-hidden">
        
        <div className="absolute inset-0 opacity-10 pointer-events-none dark:opacity-5" 
             style={{ backgroundImage: `radial-gradient(#d4a373 1px, transparent 1px)`, backgroundSize: '30px 30px' }}>
        </div>

        <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block">
          <path 
            d="M 100 200 Q 250 50 400 200 T 700 150" 
            fill="none" 
            stroke="#d4a373" 
            strokeWidth="4" 
            strokeDasharray="12 12"
            className="opacity-40"
          />
        </svg>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="text-left space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#d4a373] dark:bg-zinc-700 text-white px-4 py-1 rounded-full font-pixel text-[10px]">
              <MapPin size={12} /> CURRENT_LOCATION: REMOTE_WORLD
            </div>
            
            <h3 className="text-5xl font-black text-[#bc6c25] dark:text-lavender leading-none tracking-tighter">
              NEED A <br />NEW <br />
              <span className="text-bubblegum">PLAYER?</span> 

            </h3>
            
            <p className="text-[#997b66] dark:text-gray-400 font-mono text-sm max-w-sm">
              The journey doesn't end here. Send an email to start our next adventure together.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <MapWaypoint 
              icon={Mail} 
              label="Send a Letter" 
              sub="nazminbabubaker@gmail.com" 
              href="mailto:nazminbabubaker@gmail.com"
              color="bg-[#faedcd] text-[#bc6c25]"
            />
            <MapWaypoint 
              icon={Github} 
              label="The Repository" 
              sub="github.com/Nazmin-Babubaker" 
              href="https://github.com/Nazmin-Babubaker"
              color="bg-white text-gray-700"
            />
            <MapWaypoint 
            icon={Linkedin} 
            label="Professional Guild" 
            sub="linkedin.com/in/Nazmin-Babu-Baker" 
             href="https://linkedin.com/in/Nazmin-Babu-Baker"
            color="bg-blue-50 text-blue-600"
            />
            <MapWaypoint 
              icon={Instagram} 
              label="Visual Logs" 
              sub="@nzabbkr" 
              href="https://instagram.com/nzabbkr"
              color="bg-[#ffc8dd] text-[#fb6f92]"
            />
          </div>
        </div>

        <div className="absolute bottom-8 right-12">
          <Navigation size={40} className="text-[#d4a373] rotate-45" />
        </div>
      </div>
    </section>
  );
}

function MapWaypoint({ icon: Icon, label, sub, href, color }) {
  return (
    <a 
      href={href}
      className={`${color} p-5 rounded-3xl border-4 border-white shadow-sm flex items-center gap-4 transition-all hover:-translate-x-2 hover:shadow-md group`}
    >
      <div className="bg-white p-3 rounded-2xl shadow-inner  transition-transform">
        <Icon size={24} />
      </div>
      <div>
        <div className="font-pixel text-[10px] uppercase tracking-tighter opacity-70">{label}</div>
        <div className="font-bold text-sm tracking-tight">{sub}</div>
      </div>
    </a>
  );
}