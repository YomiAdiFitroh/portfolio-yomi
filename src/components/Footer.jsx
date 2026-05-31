function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-slate-900">
            Yomi Adi Fitroh
          </h3>

          <p className="text-sm text-slate-500 mt-1">
            Frontend Developer • React • Tailwind CSS
          </p>
        </div>

        {/* Center */}
        <div className="flex items-center gap-6 text-sm">
          <a
            href="#about"
            className="text-slate-600 hover:text-indigo-600 transition"
          >
            About
          </a>

          <a
            href="#projects"
            className="text-slate-600 hover:text-indigo-600 transition"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-slate-600 hover:text-indigo-600 transition"
          >
            Contact
          </a>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/YomiAdiFitroh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-900 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/yomi-adi-fitroh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-900 transition"
          >
            LinkedIn
          </a>
        </div>

      </div>

      <div className="mt-8 pt-6 border-t border-slate-100 text-center">
        <p className="text-sm text-slate-500">
          Designed & Built by Yomi Adi Fitroh using React, Vite & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

export default Footer;