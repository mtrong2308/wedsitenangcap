
import React from 'react';

interface AboutProps {
  currentUser: { username: string, name: string } | null;
  onLogout: () => void;
}

const About: React.FC<AboutProps> = ({ currentUser, onLogout }) => {
  return (
    <section id="about" className="py-24 px-6 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Side: Image */}
        <div className="relative">
          <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800">
            <img 
              src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800" 
              alt="Smart Home" 
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-slate-900 dark:bg-slate-800 p-8 rounded-3xl shadow-2xl border border-slate-700 hidden md:block text-center min-w-[160px]">
            <p className="text-4xl font-bold text-blue-500 mb-1">100%</p>
            <p className="text-slate-300 text-sm font-medium">Tự động hóa</p>
          </div>
        </div>
        
        {/* Right Side: Content */}
        <div className="space-y-8 relative pt-4">
          <div className="flex justify-end">
             <button 
              onClick={onLogout}
              className="px-6 py-2.5 bg-white dark:bg-slate-800 text-red-500 dark:text-red-400 border border-slate-200 dark:border-slate-700 rounded-full font-bold hover:bg-red-50 dark:hover:bg-red-900/20 transition-all shadow-sm text-sm"
            >
              Đăng xuất hệ thống
            </button>
          </div>

          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-200/50 dark:border-blue-800/50">
              Smart Home Control Center
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
              Kiến tạo không gian sống <span className="text-blue-600">thông minh & tiện nghi</span>.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg max-w-xl">
              Xin chào <span className="text-blue-600 font-bold">{currentUser?.name || 'Người dùng'}</span>! Hệ thống của bạn đang ở trạng thái tối ưu. Bạn có toàn quyền điều khiển các thiết bị trong nhà ngay tại đây.
            </p>
            
            <div className="space-y-4 pt-4">
              {[
                { label: "Điều khiển chiếu sáng thông minh", status: "Hoạt động" },
                { label: "Hệ thống an ninh AI tích hợp", status: "An toàn" },
                { label: "Tối ưu năng lượng tự động", status: "Tiết kiệm 20%" }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 font-semibold">{item.label}</span>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
