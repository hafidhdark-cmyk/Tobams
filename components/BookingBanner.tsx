export default function BookingBanner() {
  return (
    <section className="w-full bg-white py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto bg-[#571244] rounded-2xl px-8 py-10 flex flex-col items-center text-center gap-4">
        <p className="text-white text-sm md:text-base font-nunito-sans leading-relaxed">
          Want to accelerate professional growth and development at your organisation?{" "}
          <br className="hidden md:block" />
          See how we can help.
        </p>
        <button className="border border-white bg-white text-primary text-sm font-semibold px-8 py-3 rounded-md cursor-pointer ">
          Book a Consultation
        </button>
      </div>
    </section>
  );
}