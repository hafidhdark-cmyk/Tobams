"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { UserCircle, ChevronDown, Menu } from "lucide-react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full bg-white shadow-sm relative">
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-3 border-b border-gray-100">
                {/* Logo */}
                <Image
                    src="/secondary-logo.png"
                    alt="Tobams Group Logo"
                    width={120}
                    height={50}
                    priority
                />

                {/* Top Right Buttons - Desktop */}
                <div className="hidden md:flex items-center gap-3">
                    <button className="flex items-center gap-2 border border-[#571244] bg-[#571244] text-[white] text-sm font-semibold px-4 py-2 cursor-pointer rounded-md">
                        <UserCircle size={18} />
                        Account
                        <ChevronDown size={16} />
                    </button>
                    <button className="bg-[#EF4353] text-white text-sm font-semibold px-5 py-2 cursor-pointer rounded-md">
                        Take Assessment
                    </button>
                </div>

                {/* Hamburger - Mobile */}
                <button
                    className="md:hidden border border-gray-300 rounded-md p-2 cursor-pointer"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <Menu size={22} className="text-gray-700" />
                </button>
            </div>

            {/* Bottom Nav Links - Desktop */}
            <div className="hidden md:flex items-center justify-center gap-8 px-6 py-3 text-md font-400 text-main-text">
                <Link href="#" className="flex items-center gap-1 hover:text-[#571244]">About <ChevronDown size={14} /></Link>
                <Link href="#" className="flex items-center gap-1 hover:text-[#571244]">What We Do <ChevronDown size={14} /></Link>
                <Link href="#" className="flex items-center gap-1 hover:text-[#571244]">Jobs <ChevronDown size={14} /></Link>
                <Link href="#" className="flex items-center gap-1 hover:text-[#571244]">Projects <ChevronDown size={14} /> </Link>
                <Link href="#" className="flex items-center gap-1 hover:text-[#571244]">TG Academy <ChevronDown size={14} /> </Link>
                <Link href="#" className="flex items-center gap-1 hover:text-[#571244]">Strategic Partnership <ChevronDown size={14} /> </Link>
                <Link href="#" className="flex items-center gap-1 hover:text-[#571244]">Pricing <ChevronDown size={14} /> </Link>
                <Link href="#" className="flex items-center gap-1 hover:text-[#571244]">Book a Consultation <ChevronDown size={14} /> </Link>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md px-6 py-4 flex flex-col gap-4 z-50">
                    <Link href="#" className="text-sm font-medium text-main-text">About</Link>
                    <Link href="#" className="text-sm font-medium text-main-text">What We Do</Link>
                    <Link href="#" className="text-sm font-medium text-main-text">Jobs</Link>
                    <Link href="#" className="text-sm font-medium text-main-text">Projects</Link>
                    <Link href="#" className="text-sm font-medium text-main-text">TG Academy</Link>
                    <Link href="#" className="text-sm font-medium text-main-text">Strategic Partnership</Link>
                    <Link href="#" className="text-sm font-medium text-main-text">Pricing</Link>
                    <Link href="#" className="text-sm font-medium text-main-text">Book a Consultation</Link>
                    <hr />
                    <button className="flex items-center gap-2 border border-[#571244] bg-[#571244] text-[white] text-sm font-semibold px-4 py-2 rounded-md  w-full justify-center">
                        <UserCircle size={18} />
                        Account
                    </button>
                    <button className="bg-[#EF4353] text-white text-sm font-semibold px-5 py-2 rounded-md w-full">
                        Take Assessment
                    </button>
                </div>
            )}
        </nav>
    );
}