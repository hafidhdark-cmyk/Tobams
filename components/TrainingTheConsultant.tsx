import { ArrowUpRight } from "lucide-react";

export default function TrainingTheConsultant() {
  const features = [
    {
      title: "Expert-Led Learning",
      description: "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.",
    },
    {
      title: "Interactive Workshops",
      description: "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.",
    },
    {
      title: "Comprehensive Curriculum",
      description: "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.",
    },
    {
      title: "Global Recognition",
      description: "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.",
    },
  ];

  return (
    <section className="w-full bg-[#5712441A] py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">

        {/* Top Text */}
        <div>
          <h2 className="text-2xl md:text-4xl font-bold font-nunito text-primary mb-2">
            Training The Consultant
          </h2>
          <p className="text-sm font-semibold text-primary font-nunito-sans mb-3">
            Maximise Your Potential as a Certified Trainer:
          </p>
          <p className="text-sm md:text-base text-main-text font-nunito-sans leading-relaxed">
            With the help of our Training Consultants program, take a revolutionary step toward becoming a distinguished certified training consultant. Learn from professionals in the field, immerse yourself in a thorough curriculum, and hone your training methods through interactive workshops. Participating in our program will enable you to gain expertise in diverse courses while also developing the abilities to mentor and encourage others in their career advancement.
          </p>
        </div>

        {/* 2x2 Grid Card */}
        <div className="bg-[#571244] rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col gap-2">
              <h3 className="text-white font-bold font-nunito text-base">
                {feature.title}
              </h3>
              <p className="text-white/80 text-sm font-nunito-sans leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        <button className="flex items-center gap-2 bg-primary text-white text-sm font-semibold px-6 py-3 rounded-md cursor-pointer hover:opacity-90 transition w-fit">
          Learn More
          <ArrowUpRight size={16} />
        </button>

      </div>
    </section>
  );
}