import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function LMSSection() {
  const courses = [
    "Business Analysis",
    "Design Thinking",
    "Effective Communication",
    "Entrepreneurship",
    "Career Development",
    "Business Model",
  ];

  return (
    <section className="w-full bg-[#EDE8ED] py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Circular Image */}
        <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src="/lms-img.jpg"
            alt="Two professionals smiling"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4">
          {/* Heading */}
          <h2 className="text-2xl md:text-4xl font-semibold font-nunito text-primary">
            Learning Management System
          </h2>

          {/* Body Text Card */}
          <div className="bg-[#DDD0DA] rounded-lg p-5">
            <p className="text-sm md:text-base text-main-text font-nunito-sans leading-relaxed">
              TG Academy is a hub of knowledge and skill-building resources designed to empower tech talents on their learning journey. From technical courses covering the latest programming languages and development frameworks to soft skills training in leadership, effective communication and project management, TG Academy offers a wide range of courses to cater to diverse learning needs. With accessible and interactive learning materials, individuals can enhance their skills and stay ahead in today's competitive tech landscape.
            </p>

            {/* Courses */}
            <p className="text-sm font-bold text-main-text mt-4 mb-2">
              Some of our courses include:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-2">
              {courses.map((course) => (
                <li key={course} className="flex items-center gap-2 text-sm text-main-text font-nunito-sans">
                  <span className="w-1.5 h-1.5 rounded-full bg-main-text inline-block" />
                  {course}
                </li>
              ))}
            </ul>
          </div>

          {/* Learn More Button */}
          <button className="flex items-center gap-2 bg-primary text-white text-sm font-semibold px-6 py-3 rounded-md cursor-pointer hover:opacity-90 transition w-fit">
            Learn More
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}