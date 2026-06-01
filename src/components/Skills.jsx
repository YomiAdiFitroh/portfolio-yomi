function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      items: ["React", "Tailwind CSS", "HTML5", "CSS3"],
    },
    {
      title: "Languages",
      items: ["JavaScript", "TypeScript"],
    },
    {
      title: "Tools",
      items: ["Git", "GitHub", "VS Code", "Figma"],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-32 px-6 overflow-hidden bg-linear-to-b from-white to-purple-50"
    >
      <div className="absolute inset-0 opacity-30">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,128L30,144C60,160,120,192,180,202.7C240,213,300,203,360,186.7C420,171,480,149,540,144C600,139,660,149,720,160C780,171,840,181,900,186.7C960,192,1020,192,1080,186.7C1140,181,1200,171,1260,160C1320,149,1380,139,1410,134.7L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0Z"
          ></path>
        </svg>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
        {/* Left Side */}
        <div>
            <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
                Tech Stack
            </span>

            <h2 className="text-5xl font-bold text-purple-900 leading-tight">
                Technologies I Use
            </h2>

            <p className="mt-6 text-lg text-purple-600 leading-relaxed max-w-lg">
                I build modern web applications using a combination of
                frontend technologies, development tools, and best
                practices focused on performance and user experience.
            </p>
        </div>

        {/* Right Side */}
          <div className="space-y-6">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-medium hover:border-indigo-400 hover:text-indigo-600 transition"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

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

export default Skills;