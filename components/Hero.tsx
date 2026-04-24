export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[420px] md:min-h-[500px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-16 max-w-3xl mx-auto">
        {/* Pill Tag */}
        <span className="bg-black/100 text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-full mb-6">
          What We Do
        </span>

        {/* Heading */}
        <h1 className="text-white text-3xl md:text-5xl font-bold font-nunito mb-4">
          Training and Development
        </h1>

        {/* Subtext */}
        <p className="text-white/80 text-sm md:text-base font-nunito-sans text-center max-w-xl mb-8">
          Our comprehensive range of programs and resources is designed to enhance skills, broaden knowledge, and propel careers forward in today's ever-evolving landscape.
        </p>

        {/* CTA Button */}
        <button className="items-center gap-2 border border-[#571244] bg-[#571244] text-white text-sm font-semibold px-8 py-3 rounded-md cursor-pointer hover:opacity-90 transition">
          Book a Consultation
        </button>
      </div>
    </section>
  );
}