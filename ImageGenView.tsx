
import React, { useState } from 'react';
import { generateAIImage } from '../services/gemini';

const ImageGenView: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setIsLoading(true);
    setImageUrl(null);
    try {
      const url = await generateAIImage(prompt);
      setImageUrl(url);
    } catch (error) {
      console.error(error);
      alert("Lỗi khi tạo hình ảnh. Hãy thử prompt đơn giản hơn.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-8 h-full">
      <div className="w-full max-w-3xl bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-2xl">
        <h3 className="text-xl font-bold mb-4 text-center">Tạo hình ảnh từ mô tả văn bản</h3>
        <div className="flex flex-col md:flex-row gap-4">
          <input 
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ví dụ: Một phi hành gia đang cưỡi ngựa trên sao Hỏa, phong cách cyberpunk..."
            className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
            onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
          />
          <button
            onClick={handleGenerate}
            disabled={isLoading || !prompt.trim()}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-lg disabled:opacity-50"
          >
            {isLoading ? 'Đang vẽ...' : 'Tạo ảnh'}
          </button>
        </div>
      </div>

      <div className="flex-1 w-full max-w-3xl flex items-center justify-center">
        {imageUrl ? (
          <div className="relative group rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-700 animate-fadeIn">
            <img src={imageUrl} alt="Generated" className="max-w-full h-auto" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
              <a 
                href={imageUrl} 
                download="gemini-art.png"
                className="p-3 bg-white text-slate-900 rounded-full hover:scale-110 transition-transform"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              </a>
            </div>
          </div>
        ) : isLoading ? (
          <div className="w-full aspect-square md:w-[512px] md:h-[512px] bg-slate-800 border-2 border-slate-700 rounded-2xl flex flex-col items-center justify-center text-slate-400">
            <div className="relative w-24 h-24 mb-6">
              <div className="absolute inset-0 border-4 border-blue-500/20 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <p className="text-lg font-medium animate-pulse">AI đang phân tích và vẽ...</p>
          </div>
        ) : (
          <div className="w-full aspect-square md:w-[512px] md:h-[512px] bg-slate-800/50 border-2 border-dashed border-slate-700 rounded-2xl flex flex-col items-center justify-center text-slate-500 p-8 text-center">
             <svg className="w-20 h-20 mb-4 opacity-10" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" /></svg>
             <p className="text-lg">Hình ảnh của bạn sẽ xuất hiện ở đây.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGenView;
