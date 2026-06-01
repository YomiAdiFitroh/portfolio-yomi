import { useState } from "react";
import profileImg from "../assets/yomi.jpeg";
import resume from "../assets/Yomi Adi Fitroh (CV).pdf";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
        <nav className="w-[95vw] max-w-6xl h-16 px-4 sm:px-6 lg:px-8 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-xl shadow-lg flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 min-w-0">
            <img src={profileImg} alt="Yomi Adi Fitroh" className="w-10 h-10 rounded-full object-cover border-2 border-indigo-500" />
            <div className="hidden sm:flex flex-col leading-none">
                <span className="font-semibold text-slate-900">
                    Yomi Adi Fitroh
                </span>

                <span className="text-xs text-slate-600">
                    Frontend Developer
                </span>
            </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4">
          <a href="#hero" className="relative px-4 py-2 text-slate-700 transition-colors duration-300 group">
            <span className="relative z-10">
                Home
            </span>

            <span className="absolute inset-0 bg-indigo-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
          </a>

          <a href="#about" className="relative px-4 py-2 text-slate-700 transition-colors duration-300 group">
            <span className="relative z-10">About</span>
            <span className="absolute inset-0 bg-indigo-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
          </a>

          <a href="#projects" className="relative px-4 py-2 text-slate-700 transition-colors duration-300 group">
            <span className="relative z-10">Projects</span>
            <span className="absolute inset-0 bg-indigo-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
          </a>

          <a href="#contact" className="relative px-4 py-2 text-slate-700 transition-colors duration-300 group">
            <span className="relative z-10">Contact</span>
            <span className="absolute inset-0 bg-indigo-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
          </a>

          <a
            href={resume}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl hover:bg-slate-100 transition"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-20 left-0 right-0 px-4 md:hidden">
          <div className="bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2x1 shadow-xl p-4 flex flex-col gap-2">
            <a href="#hero" onClick={() => setOpen(false)} className="px-4 py-3 rounded-xl hover:bg-slate-100 transition">
              Home
            </a>

            <a href="#about" onClick={() => setOpen(false)} className="px-4 py-3 rounded-xl hover:bg-slate-100 transition">
              About
            </a>

            <a href="#projects" onClick={() => setOpen(false)} className="px-4 py-3 rounded-xl hover:bg-slate-100 transition">
              Projects
            </a>

            <a href="#contact" onClick={() => setOpen(false)} className="px-4 py-3 rounded-xl hover:bg-slate-100 transition">
              Contact
            </a>

            <a
              href="/resume.pdf"
              className="mt-2 px-4 py-3 bg-indigo-600 text-white rounded-xl text-center"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;