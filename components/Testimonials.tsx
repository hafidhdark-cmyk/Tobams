"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Aisha Yusuf",
    title: "Founder, CraftHub NG",
    image: "/aisha.png",
    quote: "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
  },
  {
    name: "John Davies",
    title: "Marketing Manager, E-Commerce Emporium",
    image: "/john.png",
    quote: "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
  },
  {
    name: "Chinonso Nwankwo",
    title: "HR Director, FutureTech Solutions",
    image: "/chinonso.png",
    quote: "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="w-full bg-white py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold font-nunito text-main-text text-center mb-10">
          Testimonials
        </h2>

        {/* Desktop - 3 cards */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="border-l-4 border-primary rounded-lg p-6 shadow-sm bg-white flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={50}
                  height={50}
                  className="rounded-full object-cover w-12 h-12"
                />
                <div>
                  <p className="font-bold text-sm text-main-text font-nunito">{t.name}</p>
                  <p className="text-xs text-gray-500 font-nunito-sans">{t.title}</p>
                </div>
              </div>
              <p className="text-sm text-main-text font-nunito-sans leading-relaxed">
                {t.quote}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile - single card carousel */}
        <div className="md:hidden flex flex-col gap-4">
          <div className="border-l-4 border-primary rounded-lg p-6 shadow-sm bg-white flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src={testimonials[current].image}
                alt={testimonials[current].name}
                width={50}
                height={50}
                className="rounded-full object-cover w-12 h-12"
              />
              <div>
                <p className="font-bold text-sm text-main-text font-nunito">{testimonials[current].name}</p>
                <p className="text-xs text-gray-500 font-nunito-sans">{testimonials[current].title}</p>
              </div>
            </div>
            <p className="text-sm text-main-text font-nunito-sans leading-relaxed">
              {testimonials[current].quote}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-end gap-2">
            <button title="n" onClick={prev} className="bg-[#FFE4E4] text-primary p-2 rounded-md cursor-pointer hover:opacity-80 transition">
              <ChevronLeft size={18} />
            </button>
            <button title="n    " onClick={next} className="bg-[#FFE4E4] text-primary p-2 rounded-md cursor-pointer hover:opacity-80 transition">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}