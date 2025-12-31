
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800" 
              alt="Smart Home" 
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl hidden md:block border border-slate-100">
            <p className="text-4xl font-bold text-blue-600 mb-1">100%</p>
            <p className="text-slate-500 font-medium">Tự động hóa</p>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-bold uppercase tracking-wider">
            Smart Home Solutions
          </div>
          <h2 className="text-4xl font-bold text-slate-900 leading-tight">
            Kiến tạo không gian sống <span className="text-blue-600">thông minh & tiện nghi</span>.
          </h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            Chúng tôi cung cấp giải pháp nhà thông minh toàn diện, giúp bạn điều khiển mọi thiết bị trong ngôi nhà chỉ với một chạm, đảm bảo an toàn và tối ưu hóa năng lượng.
          </p>
          <div className="space-y-4">
            {[
              "Điều khiển chiếu sáng và thiết bị điện từ xa.",
              "Hệ thống an ninh giám sát AI hiện đại.",
              "Kịch bản sống thông minh tùy biến theo nhu cầu."
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                </div>
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
          <button className="mt-8 px-10 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg">
            Khám phá ngay
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
