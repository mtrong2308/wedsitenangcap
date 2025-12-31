
import React, { useState } from 'react';

const About: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'nhacuatrong') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Thông tin đăng nhập không chính xác.');
    }
  };

  if (!isAuthenticated) {
    return (
      <section id="about" className="py-24 px-6 bg-slate-50 flex items-center justify-center min-h-[600px]">
        <div className="max-w-md w-full bg-white p-10 rounded-[40px] shadow-2xl border border-slate-100 animate-scaleIn">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mx-auto mb-4 text-blue-600">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Khu vực hạn chế</h2>
            <p className="text-slate-500 mt-2">Vui lòng nhập thông tin để truy cập Smart Home</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">ID Truy cập</label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Nhập ID"
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Mật khẩu</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                required
              />
            </div>
            {error && (
              <p className="text-red-500 text-sm font-medium text-center">{error}</p>
            )}
            <button 
              type="submit"
              className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 transform active:scale-95"
            >
              Xác nhận truy cập
            </button>
          </form>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="py-24 px-6 bg-slate-50 animate-fadeIn">
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
            Chào mừng admin! Hệ thống nhà thông minh của bạn đã sẵn sàng điều khiển. Mọi thiết bị hiện đang được tối ưu hóa cho trải nghiệm của bạn.
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
          <button 
            onClick={() => setIsAuthenticated(false)}
            className="mt-8 px-10 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg"
          >
            Đăng xuất hệ thống
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
