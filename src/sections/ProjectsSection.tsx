import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, ArrowRight, Code2, Sparkles } from 'lucide-react';
import { projectsConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  // Null check: if config is empty, do not render
  if (projectsConfig.projects.length === 0 && !projectsConfig.sectionTitle) {
    return null;
  }

  const sectionRef = useRef<HTMLDivElement>(null);
  const parallaxContainerRef = useRef<HTMLDivElement>(null);
  const topRowRef = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRefs = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Parallax strips animation
      if (topRowRef.current && bottomRowRef.current) {
        const st1 = ScrollTrigger.create({
          trigger: parallaxContainerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            if (topRowRef.current) {
              gsap.set(topRowRef.current, {
                x: -progress * 300,
              });
            }
            if (bottomRowRef.current) {
              gsap.set(bottomRowRef.current, {
                x: progress * 300 - 150,
              });
            }
          },
        });
        scrollTriggerRefs.current.push(st1);
      }

      // Grid items animation
      if (gridRef.current) {
        const st2 = ScrollTrigger.create({
          trigger: gridRef.current,
          start: 'top 80%',
          onEnter: () => {
            gsap.fromTo(
              gridRef.current?.querySelectorAll('.project-card') || [],
              { y: 60, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
            );
          },
          once: true,
        });
        scrollTriggerRefs.current.push(st2);
      }
    }, sectionRef);

    return () => {
      ctx.revert();
      scrollTriggerRefs.current.forEach(st => st.kill());
      scrollTriggerRefs.current = [];
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full bg-void-black"
    >
      {/* Parallax Strips Section */}
      <div
        ref={parallaxContainerRef}
        className="relative py-20 overflow-hidden"
      >
        {/* Section header */}
        <div className="px-12 mb-12">
          <p className="font-mono-custom text-xs text-neon-soft/60 uppercase tracking-wider mb-2">
            {projectsConfig.sectionLabel}
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white">
            {projectsConfig.sectionTitle}
          </h2>
          <p className="font-mono-custom text-sm text-white/50 mt-2">
            {projectsConfig.sectionSubtitle}
          </p>
        </div>

        {/* Top row - moves left */}
        <div
          ref={topRowRef}
          className="flex gap-4 mb-4 will-change-transform"
        >
          {projectsConfig.parallaxImagesTop.map((image) => (
            <div
              key={image.id}
              className="relative flex-shrink-0 w-[400px] h-[250px] overflow-hidden rounded-lg image-hover-scale"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void-black/50 to-transparent" />
            </div>
          ))}
        </div>

        {/* Bottom row - moves right */}
        <div
          ref={bottomRowRef}
          className="flex gap-4 will-change-transform"
          style={{ transform: 'translateX(-150px)' }}
        >
          {projectsConfig.parallaxImagesBottom.map((image) => (
            <div
              key={image.id}
              className="relative flex-shrink-0 w-[400px] h-[250px] overflow-hidden rounded-lg image-hover-scale"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void-black/50 to-transparent" />
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Section */}
      <div className="relative py-8 bg-void-dark overflow-hidden border-y border-white/5">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(8)].map((_, i) => (
            <span
              key={i}
              className="flex items-center gap-8 mx-8 text-2xl font-display text-white/20"
            >
              {projectsConfig.marqueeTexts.map((text, j) => (
                <span key={j}>{text}</span>
              ))}
              <Code2 className="w-6 h-6" />
              <Sparkles className="w-6 h-6" />
              <ArrowRight className="w-6 h-6" />
            </span>
          ))}
        </div>
      </div>

      {/* Projects Grid Section */}
      <div className="relative py-24 px-6 md:px-12">
        {/* Grid header */}
        <div className="max-w-7xl mx-auto mb-12">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono-custom text-xs text-neon-soft/60 uppercase tracking-wider mb-2">
                Selected Works
              </p>
              <h3 className="font-display text-3xl text-white">
                Featured Projects
              </h3>
            </div>
            <button
              onClick={scrollToContact}
              className="hidden md:flex items-center gap-2 text-white/60 hover:text-neon-cyan transition-colors"
            >
              <span className="font-mono-custom text-sm">Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div
          ref={gridRef}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsConfig.projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-neon-cyan/30 transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void-black via-void-black/20 to-transparent" />
                
                {/* Index number */}
                <div className="absolute top-4 left-4 font-mono-custom text-5xl text-white/10 font-bold">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-neon-cyan/0 group-hover:bg-neon-cyan/10 transition-colors duration-500" />
              </div>

              {/* Project Info */}
              <div className="relative p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono-custom text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h4 className="font-display text-xl text-white mb-2 group-hover:text-neon-cyan transition-colors">
                  {project.title}
                </h4>

                {/* Description */}
                <p className="text-sm text-white/50 mb-6 line-clamp-2">
                  {project.description}
                </p>

                {/* View Project Button */}
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-neon-cyan/10 border border-neon-cyan/30 rounded-full text-sm font-mono-custom text-neon-cyan hover:bg-neon-cyan/20 transition-all duration-300"
                >
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-neon-cyan/0 group-hover:border-neon-cyan/30 rounded-tr-2xl transition-colors duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="max-w-7xl mx-auto mt-16 text-center">
          <button
            onClick={scrollToContact}
            className="group inline-flex items-center gap-4"
          >
            <div className="w-16 h-16 rounded-full border border-white/20 group-hover:border-neon-cyan flex items-center justify-center transition-colors">
              <ArrowRight className="w-6 h-6 text-white/60 group-hover:text-neon-cyan group-hover:translate-x-1 transition-all" />
            </div>
            <span className="font-display text-lg text-white/60 group-hover:text-white uppercase tracking-wider transition-colors">
              {projectsConfig.endCtaText}
            </span>
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent" />
    </section>
  );
};

export default ProjectsSection;
