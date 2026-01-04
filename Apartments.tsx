
import React, { useState } from 'react';

const Apartments: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Tất cả');
  
  const projects = [
    { title: "Năng lượng Tái tạo AI", type: "Nghiên cứu", tech: "AI Optimization", img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=400" },
    { title: "Giao tiếp Não - Máy", type: "Công nghệ", tech: "BCI Interface", img: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=400" },
    { title: "Robot Trợ lý Gia đình", type: "Nghiên cứu", tech: "Neural Networks", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400" },
    { title: "Nông nghiệp Đô thị 4.0", type: "Công nghệ", tech: "IoT Sensors", img: "https://images.unsplash.com/photo-1530836361253-efad5d6ff442?auto=format&fit=crop&q=80&w=400" },
  ];

  const filtered = activeFilter === 'Tất cả' 
    ? projects 
    : projects.filter(p => p.type === activeFilter);

  return (
    <section id="apartments" className="py-24 px-6 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Dự án đang nghiên cứu</h2>
            <p className="text-slate-500 dark:text-slate-400">Các công nghệ và giải pháp đột phá chúng tôi đang tập trung phát triển.</p>
          </div>
          
          <div className="flex bg-slate-100 dark:bg-slate-900 p-1 rounded-2xl">
            {['Tất cả', 'Nghiên cứu', 'Công nghệ'].map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                  activeFilter === f 
                    ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm' 
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filtered.map((proj, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative rounded-3xl overflow-hidden mb-4 shadow-md border dark:border-slate-800">
                <img 
                  src={proj.img} 
                  alt={proj.title} 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-blue-600 dark:text-blue-400">
                  {proj.tech}
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{proj.title}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">{proj.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Apartments;
