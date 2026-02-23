import React from 'react';

// icon: komponent yoki rasm, title: matn, value: raqam, color: rang nomi
const StatCard = ({ icon, title, value, color = "blue" }) => {
  
  // Ranglar konfiguratsiyasi (rasmdagi gradiyentlarga moslangan)
  const colorStyles = {
    blue: "from-[#e3f2fd] to-[#64b9ff] text-blue-700",
    green: "from-[#e8f5e9] to-[#2bfa32] text-green-700",
    purple: "from-[#f3e5f5] to-[#e268f8] text-purple-700",
    orange: "from-[#fff3e0] to-[#fcaa2f] text-orange-700",
  };

  return (
    <div className={`relative overflow-hidden w-full h-32 rounded-2xl bg-gradient-to-br ${colorStyles[color]} p-5 shadow-md flex flex-col justify-center`}>
      
      {/* Kontent qismi */}
      <div className="relative z-10 flex items-center gap-4">
        <div className="text-3xl filter drop-shadow-sm">
          {icon}
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-gray-600 tracking-tight">
            {title}
          </span>
          <span className="text-2xl font-bold text-gray-800">
            {value}
          </span>
        </div>
      </div>

      {/* Rasmdagi to'lqinli (wave) effekt (Glassmorphism) */}
      <div className="absolute -bottom-6 -left-4 w-full h-16 bg-white/30 rounded-[100%] blur-xl z-0 transform -rotate-6"></div>
      <div className="absolute -bottom-8 -right-4 w-full h-20 bg-white/20 rounded-[100%] blur-2xl z-0"></div>
    </div>
  );
};

export default StatCard;