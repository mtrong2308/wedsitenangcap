
import React, { useState } from 'react';
import { generateStructuredText } from '../services/gemini';

const TextGenView: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [type, setType] = useState('Bài viết Blog');
  const [result, setResult] = useState<{ title: string; body: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    setIsLoading(true);
    try {
      const data = await generateStructuredText(topic, type);
      setResult(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
      <div className="lg:col-span-1 space-y-6">
        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl">
          <h3 className="text-lg font-semibold mb-4">Cấu hình nội dung</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-slate-400 mb-1">Loại nội dung</label>
              <select 
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option>Bài viết Blog</option>
                <option>Email công việc</option>
                <option>Lời bài hát</option>
                <option>Kịch bản video</option>
                <option>Tóm tắt sách</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1">Chủ đề hoặc mô tả</label>
              <textarea 
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Ví dụ: Lợi ích của việc chạy bộ mỗi ngày..."
                rows={4}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-slate-200 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              />
            </div>
            <button
              onClick={handleGenerate}
              disabled={isLoading || !topic.trim()}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition-colors disabled:opacity-50"
            >
              {isLoading ? 'Đang tạo...' : 'Bắt đầu tạo'}
            </button>
          </div>
        </div>
      </div>

      <div className="lg:col-span-2">
        {result ? (
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl h-full animate-fadeIn">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-bold text-white leading-tight">{result.title}</h2>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(`${result.title}\n\n${result.body}`);
                  alert('Đã sao chép nội dung!');
                }}
                className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-300 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
              </button>
            </div>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed whitespace-pre-wrap">
              {result.body}
            </div>
          </div>
        ) : (
          <div className="bg-slate-800/50 border-2 border-dashed border-slate-700 rounded-2xl h-full flex flex-col items-center justify-center text-slate-500 p-8 text-center">
            <svg className="w-16 h-16 mb-4 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
            <p className="text-lg">Nội dung của bạn sẽ xuất hiện ở đây.</p>
            <p className="text-sm mt-2 max-w-xs">Nhập chủ đề bên trái và AI sẽ giúp bạn soạn thảo nội dung chuyên nghiệp.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextGenView;
