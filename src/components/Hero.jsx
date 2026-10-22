import { ArrowUpRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto grid min-h-[650px] max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2"
    >
      {/* Introduction */}
      <div>
        <div className="mb-6 flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-accent" />

          <span className="text-xs font-bold uppercase tracking-[3px] text-accent">
            Software Engineering · AI · Research
          </span>
        </div>

        <h1 className="mb-7 text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          Building ideas
          <br />
          into <span className="text-accent">impact.</span>
        </h1>

        <p className="max-w-xl text-base leading-8 text-muted">
          My journey in technology began with a simple curiosity about how things work and grew into a 
          passion for programming and problem-solving. 
          I'm a Computer Science graduate from BRAC University, 
          currently working at IDLC Finance PLC as an Apprentince Softwaree Engineer, where I continue to grow professionally while exploring the ever-evolving world of technology.
        </p>

        <p className="mt-4 max-w-xl text-base leading-8 text-muted">
          My interests lie in software engineering, artificial intelligence, and machine learning. 
          I enjoy exploring new technologies, understanding how things work under the hood, 
          and turning complex problems into practical solutions. I'm always eager to learn, experiment, 
          and take on challenges that push me to grow as a developer.
        </p>

        {/* Buttons */}
        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-4 text-sm font-bold text-background transition hover:bg-white"
          >
            Explore My Work
            <ArrowUpRight size={18} />
          </a>

          <a
            href="./Resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-4 text-sm font-bold transition hover:border-accent hover:text-accent"
          >
            Download Resume
            <Download size={18} />
          </a>
        </div>
      </div>

      {/* Decorative Profile */}
      <div className="relative hidden items-center justify-center lg:flex">
        <div className="absolute h-96 w-96 rounded-full border border-accent/20" />

        <div className="flex h-80 w-80 items-center justify-center rounded-full border border-accent/40 bg-gradient-to-br from-[#23463c] to-background shadow-[0_0_100px_rgba(168,255,207,0.08)]">
          <span className="text-8xl font-black tracking-tighter text-accent">
            SM
          </span>
        </div>

        <div className="absolute right-0 top-12 rounded-xl border border-white/20 bg-surface px-5 py-3 text-sm shadow-xl">
          ✦ AI & Software Engineering
        </div>

        <div className="absolute bottom-12 left-0 rounded-xl border border-white/20 bg-surface px-5 py-3 text-sm shadow-xl">
          <span className="mr-2 text-accent">●</span>
          Open to Opportunities
        </div>
      </div>
      {/* <div className="flex justify-center items-center">
        <img
          src="../../public/images/SalimMiah.jpg"
          alt="Portrait of Salim"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover
                    border-4 border-emerald-300 shadow-xl"
        />
      </div> */}
    </section>
  );
}