import Image from "next/image";
import { Zap } from "lucide-react";

export default function ManagementDevelopment() {
  const benefits = [
    "Enhanced Leadership Skills",
    "Improved Employee Engagement",
    "Stronger Organisational Culture",
    "Sustainable Growth",
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto bg-[#2C0922] rounded-2xl p-8 md:p-10">
        <div className="flex flex-col md:flex-row gap-8 items-center">

          {/* Image */}
          <div className="w-full md:w-[45%] rounded-xl overflow-hidden flex-shrink-0 min-h-[300px] md:min-h-[450px]">
            <Image
              src="/management.jpg"
              alt="Management development team"
              width={500}
              height={500}
              className="w-full h-full object-cover min-h-[300px] md:min-h-[450px]"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-4 flex-1">
            <h2 className="text-2xl md:text-4xl font-semibold font-nunito text-white">
              Management Development Program
            </h2>

            <p className="text-sm text-white/80 font-nunito-sans leading-relaxed">
              Tobams Group offers a comprehensive Management Development Program designed to equip corporate organisations with the high-performing leaders they need to thrive.
            </p>

            <p className="text-sm text-white/80 font-nunito-sans leading-relaxed">
              Our program includes workshops, seminars, coaching sessions, online courses, and experiential learning opportunities designed to improve leadership, strategic thinking, communication, and other essential managerial competencies for corporate organisations.
            </p>

            {/* Benefit Pills */}
            <div className="flex flex-col gap-3 mt-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 bg-[#8F6182] text-white text-xs md:text-sm font-nunito-sans px-4 py-3 rounded-md"
                >
                  <Zap size={16} className="text-white fill-white flex-shrink-0" />
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}