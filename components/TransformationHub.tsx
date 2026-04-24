import Image from "next/image";
import { Zap, ArrowUpRight } from "lucide-react";

export default function TransformationHub() {
  const benefits = [
    "Strategic Career Guidance",
    "Leadership Development",
    "CV Development",
    "Sustainability Leadership",
    "Communication Skills",
    "Business Model",
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto bg-[#EF435333] rounded-2xl p-8 md:p-10">
        
        {/* Top Text */}
        <div className="mb-6">
          <p className="text-primary text-sm font-[600] italic font-nunito mb-1">
            Learning With Our CEO:
          </p>
          <h2 className="text-2xl md:text-3xl font-bold font-nunito text-primary italic">
            Transformation Hub With Jite Newton
          </h2>
          <p className="text-sm md:text-base text-main-text font-nunito-sans leading-relaxed mt-3">
            Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO, Dr. Jite Newton. Designed to elevate career trajectories and leadership capabilities, this exclusive event offers invaluable insights and strategies for personal and professional growth. Whether you're seeking to advance your career or enhance your leadership skills, the Transformation Hub provides a transformative learning experience to unlock your full potential and drive success in your endeavours.
          </p>
        </div>

        {/* Bottom - Image + Grid */}
        <div className="flex flex-col md:flex-row gap-6 items-start">
          
          {/* Image */}
          <div className="w-full md:w-[45%] rounded-xl overflow-hidden flex-shrink-0">
            <Image
              src="/transformation.jpg"
              alt="Transformation Hub with Jite Newton"
              width={500}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Pills + Button */}
          <div className="flex flex-col gap-4 flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 bg-white text-main-text text-sm font-nunito-sans px-4 py-3 rounded-xl"
                >
                  <Zap size={16} className="text-primary fill-primary flex-shrink-0" />
                  {benefit}
                </div>
              ))}
            </div>

            <button className="flex items-center gap-2 bg-primary text-white text-sm font-semibold px-6 py-3 rounded-md cursor-pointer hover:opacity-90 transition w-fit mt-2">
              Learn More
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}