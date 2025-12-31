
import React from 'react';
import { ServiceDetail } from '../App';

interface ServicesProps {
  onServiceClick: (service: ServiceDetail) => void;
}

const ServiceCard: React.FC<{ service: ServiceDetail, onClick: () => void }> = ({ service, onClick }) => (
  <div 
    onClick={onClick}
    className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 cursor-pointer group"
  >
    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
      {service.icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
    <p className="text-slate-500 leading-relaxed text-sm mb-4">
      {service.description}
    </p>
    <div className="flex items-center text-blue-600 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
      Xem chi tiết
      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </div>
  </div>
);

const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  const services: ServiceDetail[] = [
    {
      title: "Bài giảng",
      description: "Các video bài giảng và slide tóm tắt kiến thức trọng tâm của môn học.",
      longDescription: "Hệ thống bài giảng trực quan giúp bạn nắm vững kiến thức:\n\n• Video chất lượng cao, giảng giải chi tiết.\n• Slide tóm tắt các ý chính để ôn tập nhanh.\n• Hệ thống hóa kiến thức theo sơ đồ tư duy.\n• Cập nhật liên tục theo chương trình học mới nhất.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Tài liệu",
      description: "Tổng hợp giáo trình, sách tham khảo và các đề thi thử chọn lọc.",
      longDescription: "Kho tàng tri thức đa dạng phục vụ việc tự học:\n\n• Giáo trình chuẩn từ các nguồn uy tín.\n• Danh mục sách tham khảo nâng cao kỹ năng.\n• Đề thi thử từ các trường top đầu.\n• Tài liệu được phân loại rõ ràng theo từng chủ đề.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Bài tập",
      description: "Hệ thống bài tập tự luyện từ cơ bản đến nâng cao có đáp án chi tiết.",
      longDescription: "Thực hành để khắc sâu kiến thức:\n\n• Ngân hàng câu hỏi trắc nghiệm và tự luận phong phú.\n• Đáp án giải chi tiết, dễ hiểu.\n• Phân loại độ khó từ dễ đến khó.\n• Theo dõi tiến độ và đánh giá năng lực cá nhân.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Tài liệu học tập</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Khám phá kho tài liệu phong phú giúp bạn chinh phục mọi môn học một cách hiệu quả nhất.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <ServiceCard 
              key={idx} 
              service={s} 
              onClick={() => onServiceClick(s)} 
            />
          ))}
        </div>
      </div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Services;
