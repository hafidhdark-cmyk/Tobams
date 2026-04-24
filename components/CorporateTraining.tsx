import Image from "next/image";
import { Zap } from "lucide-react";

export default function CorporateTraining() {
  const features = [
    "Leadership Training",
    "Strategic Planning and Implementation",
    "Project Management",
    "Sustainability Training",
    "Customised Training",
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Content - Left */}
        <div className="flex flex-col gap-4 flex-1">
          <h2 className="text-2xl md:text-4xl font-semibold font-nunito text-main-text">
            Corporate Trainings
          </h2>

          {/* Image - Mobile only */}
          <div className="block md:hidden w-full rounded-2xl overflow-hidden">
            <Image
              src="/corporate.jpg"
              alt="Corporate training session"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-sm md:text-base text-[#696969] font-nunito-sans leading-relaxed">
            Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today's professionals.  
          </p>
          <ul className="flex flex-col gap-3">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm text-[#696969] font-nunito-sans">
                <Zap size={16} className="text-primary fill-primary flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Image - Desktop only */}
        <div className="hidden md:block flex-1 rounded-4xl overflow-hidden">
          <Image
            src="/corporate.jpg"
            alt="Corporate training session"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}