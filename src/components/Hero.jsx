import profileImg from '../assets/yomi.jpeg'

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-slate-50 overflow-hidden">
      {/* decorative blobs */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute -right-32 -bottom-10 w-96 h-96 bg-indigo-300 opacity-15 rounded-full filter blur-3xl transform rotate-12 animate-blob animation-delay-2000" aria-hidden="true"></div>

      <div className="max-w-6xl mx-auto px-8 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2">
          <span className="inline-block bg-linear-to-r from-indigo-500 to-pink-500 text-white text-sm px-3 py-1 rounded-full font-medium">Frontend Developer</span>

          <h1 className="mt-6 text-6xl sm:text-7xl font-black leading-tight text-slate-900" style={{
            textShadow: "2px 2px 0 rgba(0, 0, 0, 0.1)"
          }}>
            Hi, I'm <span className="bg-linear-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">Yomi Adi Fitroh</span>
          </h1>

          <p className="mt-4 text-xl text-slate-800 max-w-2xl leading-relaxed">
            I build modern web applications, solve real-world problems, and continuously explore new technologies.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a href="#projects" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-md shadow hover:bg-indigo-700 transition">View Projects</a>
            <a href="#contact" className="inline-flex items-center gap-2 border border-slate-400 px-5 py-3 rounded-md hover:bg-slate-100 transition">Contact Me</a>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <a aria-label="GitHub" href="#" className="text-slate-500 hover:text-slate-900 transition">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M12 0.5C5.65 0.5.5 5.65.5 12c0 5.09 3.29 9.41 7.86 10.94.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.69-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.72 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.04 11.04 0 0 1 2.9-.39c.99 0 1.99.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.45-2.7 5.42-5.28 5.7.42.36.8 1.08.8 2.18 0 1.58-.01 2.86-.01 3.25 0 .31.21.68.8.56C20.71 21.41 24 17.09 24 12c0-6.35-5.15-11.5-12-11.5z" />
              </svg>
            </a>

            <a aria-label="LinkedIn" href="#" className="text-slate-500 hover:text-slate-900 transition">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM9 9h3.8v1.6h.1c.5-.9 1.7-1.8 3.4-1.8 3.6 0 4.2 2.4 4.2 5.5V21h-4v-5.2c0-1.2 0-2.8-1.7-2.8-1.7 0-2 1.4-2 2.7V21H9z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition">
            <img src={profileImg} alt="Yomi Adi Fitroh" className="object-cover w-full h-full" />
            <div className="absolute -bottom-6 left-6 bg-white/60 px-3 py-1 rounded-full text-sm text-slate-700 backdrop-blur">React • Vite • Tailwind</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob{0%{transform:translate3d(0,0,0) scale(1)}33%{transform:translate3d(30px,-50px,0) scale(1.1)}66%{transform:translate3d(-20px,20px,0) scale(0.9)}100%{transform:translate3d(0,0,0) scale(1)}}
        .animate-blob{animation:blob 8s infinite}
        .animation-delay-2000{animation-delay:2s}
      `}</style>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 150"
            className="relative block w-full h-24"
            preserveAspectRatio="none"
          >
            <path
              fill="#f8fafc"
              d="M0,96L80,101.3C160,107,320,117,480,112C640,107,800,85,960,80C1120,75,1280,85,1360,90.7L1440,96L1440,160L1360,160C1280,160,1120,160,960,160C800,160,640,160,480,160C320,160,160,160,80,160L0,160Z"
            />
          </svg>
        </div>
    </section>
  );
}

export default Hero;