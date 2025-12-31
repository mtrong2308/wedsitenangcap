
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-[#f4f8ff] min-h-[100vh] flex items-center px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        <div className="space-y-6 animate-fadeIn">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#1e293b] leading-[1.1] tracking-tight">
            Chào mừng đến với <br />
            <span className="text-blue-600 italic block mt-2">website của mtrong.</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-md">
            Khám phá không gian sáng tạo và kho tàng kiến thức được thiết kế dành riêng cho bạn.
          </p>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="w-full max-w-lg lg:max-w-2xl relative">
            {/* Minimalist House Illustration */}
            <svg viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-2xl animate-float">
              <path d="M60 400V220L300 60L540 220V400H60Z" fill="white" />
              <path d="M60 220L300 60L540 220" stroke="#3b82f6" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="100" cy="150" r="60" fill="#dbeafe" opacity="0.5" />
              <circle cx="480" cy="380" r="100" fill="#dbeafe" opacity="0.3" />
              <rect x="100" y="240" width="80" height="80" rx="12" fill="#f0f7ff" />
              <rect x="280" y="160" width="160" height="300" rx="24" fill="#1e293b" />
              <rect x="310" y="230" width="60" height="120" rx="8" fill="#3b82f6" />
            </svg>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-200/20 blur-[120px] -z-10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
