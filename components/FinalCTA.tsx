export default function FinalCTA() {
  return (
    <section className="w-full bg-[#1D0617] py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-white/70 text-xs md:text-sm font-nunito-sans">
            Ready to be a part of something extraordinary?
          </p>
          <h2 className="text-white text-xl md:text-3xl font-bold font-nunito">
            Let's work together to create a difference
          </h2>
        </div>
        <button className="bg-primary text-white text-sm font-semibold px-8 py-3 rounded-md cursor-pointer hover:opacity-90 transition w-auto">
          Get In Touch
        </button>
      </div>
    </section>
  );
}