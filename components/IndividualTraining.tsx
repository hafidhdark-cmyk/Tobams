import Image from "next/image";
import { Zap } from "lucide-react";

export default function CorporateTraining() {
  const features = [
    "Leadership Development",
    "Soft Skills Development",
    "Industry Specific Knowledge",
    "Technical Skills Enhancement",
    "Time Management and Productivity",
    "Career Development",
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* Image - Desktop only */}
        <div className="hidden md:block flex-1 rounded-4xl overflow-hidden">
          <Image
            src="/individual.jpg"
            alt="individual training"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content - Left */}
        <div className="flex flex-col gap-4 flex-1">
          <h2 className="text-2xl md:text-4xl font-semibold font-nunito text-main-text">
            Personalised Individual Training
          </h2>

          {/* Image - Mobile only */}
          <div className="block md:hidden w-full rounded-2xl overflow-hidden">
            <Image
              src="/individual.jpg"
              alt="Individual training"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-sm md:text-base text-[#696969] font-nunito-sans leading-relaxed">
            Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values.
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
      </div>
    </section>
  );
}