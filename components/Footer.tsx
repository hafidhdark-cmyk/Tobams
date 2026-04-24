import Image from "next/image";
import { Linkedin, Instagram, X } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#11040E] text-white px-6 md:px-16 pt-16 pb-6">
      <div className="max-w-6xl mx-auto">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Logo + Description + Socials */}
          <div className="flex flex-col gap-4">
            <Image
              src="/secondary-logo.png"
              alt="Tobams Group Logo"
              width={120}
              height={50}
            />
            <p className="text-white/70 text-sm font-nunito-sans leading-relaxed">
              Tobams Group is an innovative consultancy firm reshaping the future of tech talent development in Africa, specializing in talent acquisition, internships, and skill development with a global perspective.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <Link href="#" aria-label="LinkedIn" className="border border-white/30 rounded-full p-2 hover:border-white transition">
                <Linkedin size={16} />
              </Link>
              <Link href="#" aria-label="Instagram" className="border border-white/30 rounded-full p-2 hover:border-white transition">
                <Instagram size={16} />
              </Link>
              <Link href="#" aria-label="X" className="border border-white/30 rounded-full p-2 hover:border-white transition">
                <X size={16} />
              </Link>
            </div>
          </div>

          {/* What We Do */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-bold font-nunito text-base mb-2">What We Do</h3>
            {["Sustainability Services", "Strategy Planning and Implementation", "Tech Talent Solutions", "Training and Development", "IT Consulting Services", "Social Impact", "Talent Recruitment"].map((item) => (
              <Link key={item} href="#" className="text-white/70 text-sm font-nunito-sans hover:text-white transition">
                {item}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-bold font-nunito text-base mb-2">Company</h3>
            {["About", "Jobs", "Projects", "Our Founder", "Business Model", "The Team", "Contact Us", "Blog", "FAQs", "Testimonials"].map((item) => (
              <Link key={item} href="#" className="text-white/70 text-sm font-nunito-sans hover:text-white transition">
                {item}
              </Link>
            ))}
          </div>

          {/* Solution */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-bold font-nunito text-base mb-2">Solution</h3>
            {["Tobams Group Academy", "Help a Tech Talent", "Campus Ambassadors Program", "Join Our Platform", "Pricing", "Book a Consultation", "Join Our Slack Community"].map((item) => (
              <Link key={item} href="#" className="text-white/70 text-sm font-nunito-sans hover:text-white transition">
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Registered Offices + Contact */}
        <div className="bg-[#2D1A26] rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">

          {/* Registered Offices */}
          <div>
            <h3 className="text-white font-bold font-nunito text-base mb-4">Registered Offices</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-[#E8472A] text-sm font-semibold mb-1">United Kingdom</p>
                <p className="text-white/70 text-sm font-nunito-sans leading-relaxed">
                  07451196 (Registered by Company House)<br />
                  Vine Cottages, 215 North Street, Romford, Essex, United Kingdom, RM1 4QA
                </p>
              </div>
              <div>
                <p className="text-[#E8472A] text-sm font-semibold mb-1">Nigeria</p>
                <p className="text-white/70 text-sm font-nunito-sans leading-relaxed">
                  RC 1048722 (Registered by the Corporate Affairs Commission)<br />
                  4, Muaz Close, Angwar-Rimi
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-bold font-nunito text-base mb-4">Contact Information</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-white/70 text-sm font-nunito-sans">
                <span className="text-[#E8472A]">✉</span>
                theteam@tobamsgroup.com
              </div>
              <div className="flex items-center gap-3 text-white/70 text-sm font-nunito-sans">
                <span className="text-[#E8472A]">📞</span>
                +447886600748
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
          <p className="text-white/50 text-xs font-nunito-sans">
            Copyright © Tobams Group, 2026. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            <Link href="#" className="text-white/50 text-xs font-nunito-sans hover:text-white transition underline">Privacy Policy</Link>
            <Link href="#" className="text-white/50 text-xs font-nunito-sans hover:text-white transition underline">Cookies Policy</Link>
            <Link href="#" className="text-white/50 text-xs font-nunito-sans hover:text-white transition underline">Terms and Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}