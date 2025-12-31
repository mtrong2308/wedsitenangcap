
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <span className="text-xl font-bold uppercase tracking-tighter">mt</span>
        </div>
        
        <div className="flex space-x-8 text-slate-400 text-sm">
          <a href="#" className="hover:text-white transition-colors">Điều khoản</a>
          <a href="#" className="hover:text-white transition-colors">Bảo mật</a>
          <a href="#" className="hover:text-white transition-colors">Liên hệ</a>
        </div>
        
        <p className="text-slate-500 text-sm">
          © 2025 mt. Tất cả quyền được bảo lưu.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
