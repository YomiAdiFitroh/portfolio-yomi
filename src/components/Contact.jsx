function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 bg-slate-50 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-200 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-6xl mx-auto">

      <div className="grid lg:grid-cols-2 gap-16 items-center">
    
        {/* Left Side */}
        <div>
          <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
            Contact
          </span>
    
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Let's Build Something Together
          </h2>
    
          <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
            Whether you have a project idea, collaboration opportunity,
            or just want to say hello, feel free to reach out.
            I'm always open to discussing new ideas and challenges.
          </p>
        </div>
    
        {/* Right Side */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
    
          <div className="flex flex-col gap-4">
    
            <a
              href="mailto:fitrohyomi@gmail.com"
              className="w-full text-center px-6 py-4 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
            >
              Send Email
            </a>
    
            <a
              href="https://github.com/YomiAdiFitroh"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center px-6 py-4 rounded-xl border border-slate-300 hover:bg-slate-50 transition"
            >
              GitHub
            </a>
    
            <a
              href="https://linkedin.com/in/yomi-adi-fitroh"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center px-6 py-4 rounded-xl border border-slate-300 hover:bg-slate-50 transition"
            >
              LinkedIn
            </a>
    
          </div>
    
          <div className="mt-8 pt-6 border-t border-slate-200">
            <p className="text-sm text-slate-500 mb-2">
              Preferred Email
            </p>
    
            <h3 className="text-lg font-semibold text-slate-900">
              fitrohyomi@gmail.com
            </h3>
          </div>
    
        </div>
    
      </div>
    
    </div>
    </section>
  );
}

export default Contact;