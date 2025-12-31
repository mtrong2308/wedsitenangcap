
import React from 'react';
import { ViewType } from '../types';

interface HeaderProps {
  currentView: ViewType;
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, toggleSidebar }) => {
  const titles = {
    [ViewType.CHAT]: 'Trò chuyện thông minh',
    [ViewType.TEXT_GEN]: 'Sáng tạo nội dung',
    [ViewType.IMAGE_GEN]: 'Trình tạo hình ảnh AI',
    [ViewType.HISTORY]: 'Lịch sử hoạt động'
  };

  return (
    <header className="h-16 border-b border-slate-800 flex items-center justify-between px-6 bg-slate-900/50 backdrop-blur-md sticky top-0 z-10">
      <div className="flex items-center space-x-4">
        <button 
          onClick={toggleSidebar}
          className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
        <h2 className="text-lg font-semibold text-slate-200">{titles[currentView]}</h2>
      </div>
      
      <div className="flex items-center space-x-4">
        <span className="hidden md:block text-xs text-slate-500 uppercase tracking-widest font-bold">Powered by Gemini 3</span>
        <button className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors">
           <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
