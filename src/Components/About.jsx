import React from 'react';
import resume from '../assets/resume.pdf'; // Assuming you have a resume.pdf in assets
const About = () => {
  const handleDownloadResume = () => {
  
  window.open(resume, '_blank');

  };

  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-20 animate-pulse"></div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                alt="Alex Johnson"
                className="relative w-full h-full object-cover rounded-full border-4 border-slate-700 
                                                                                                                                                                                                                   shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="animate-slide-in-right">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Crafting Digital Experiences with Purpose
            </h3>

            <div className="space-y-4 text-slate-300 text-lg leading-relaxed mb-8">
              <p>
                With over 3 years of experience in web development, I specialize in creating
                modern, responsive applications that solve real-world problems. My journey began
                with a fascination for clean code and beautiful interfaces.
              </p>

              <p>
                I'm passionate about staying current with the latest technologies while
                maintaining focus on user experience and performance. When I'm not coding,
                you'll find me exploring new design trends or contributing to open-source projects.
              </p>

              <p>
                My expertise spans across front-end frameworks, back-end technologies, and
                modern development practices. I believe in writing maintainable code and
                creating intuitive user interfaces.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <h4 className="text-xl font-semibold text-indigo-400 mb-2">Frontend</h4>
                <p className="text-slate-300">React, Next.js TypeScript, Tailwind CSS</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <h4 className="text-xl font-semibold text-indigo-400 mb-2">Backend</h4>
                <p className="text-slate-300">Node.js,Express.js, MongoDB</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <h4 className="text-xl font-semibold text-indigo-400 mb-2">Tools</h4>
                <p className="text-slate-300"> Git, Figma</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <h4 className="text-xl font-semibold text-indigo-400 mb-2">Focus</h4>
                <p className="text-slate-300">Performance, Accessibility, UX</p>
              </div>
            </div>

            <button
              onClick={handleDownloadResume}
              className="group relative px-8 py-4 bg-gradient-secondary text-white font-semibold rounded-full 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           hover:scale-105 hover:-translate-y-1">
              <span className="relative z-10">Download Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-full 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
