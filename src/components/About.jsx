import profileImg from "../assets/yomi.jpeg";

function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-6 bg-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
            About Me
          </span>

          <h2 className="text-5xl font-bold text-slate-900 bg-purple-200 text-purple-900 rounded-full">
            Get To Know Me
          </h2>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="flex justify-center">
            <div className="relative">

              <div className="absolute -inset-4 bg-linear-to-r from-indigo-500 to-purple-500 rounded-3xl blur-xl opacity-20"></div>

              <img
                src={profileImg}
                alt="Yomi"
                className="relative w-[350px] h-[450px] object-cover rounded-3xl shadow-xl"
              />

            </div>
          </div>

          {/* Right */}
          <div>

            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Frontend Developer who loves building beautiful experiences.
            </h3>

            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              I'm Yomi, a web developer focused on creating responsive,
              modern, and user-friendly applications. I enjoy turning ideas
              into real products and continuously learning new technologies.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              My main stack revolves around React, JavaScript, Tailwind CSS,
              and modern frontend development practices.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">

              <div className="bg-slate-50 rounded-2xl p-5 text-center border border-slate-200">
                <h4 className="text-3xl font-bold text-indigo-600">2+</h4>
                <p className="text-sm text-slate-500 mt-1">
                  Years Learning
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-5 text-center border border-slate-200">
                <h4 className="text-3xl font-bold text-indigo-600">10+</h4>
                <p className="text-sm text-slate-500 mt-1">
                  Projects
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-5 text-center border border-slate-200">
                <h4 className="text-3xl font-bold text-indigo-600">∞</h4>
                <p className="text-sm text-slate-500 mt-1">
                  Curiosity
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;