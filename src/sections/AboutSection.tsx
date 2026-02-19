import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Code2, Cpu, Zap } from 'lucide-react';
import { aboutConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  // Null check: if config is empty, do not render
  if (!aboutConfig.creatorName && !aboutConfig.bioText) {
    return null;
  }

  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRefs = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Content fade in
      if (contentRef.current) {
        const st1 = ScrollTrigger.create({
          trigger: contentRef.current,
          start: 'top 80%',
          onEnter: () => {
            gsap.fromTo(
              contentRef.current?.querySelectorAll('.animate-item') || [],
              { y: 50, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
            );
          },
          once: true,
        });
        scrollTriggerRefs.current.push(st1);
      }

      // Image parallax
      if (imageRef.current) {
        const st2 = ScrollTrigger.create({
          trigger: imageRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
          onUpdate: (self) => {
            if (imageRef.current) {
              gsap.set(imageRef.current, {
                y: self.progress * 50 - 25,
              });
            }
          },
        });
        scrollTriggerRefs.current.push(st2);
      }

      // Stats counter animation
      if (statsRef.current) {
        const st3 = ScrollTrigger.create({
          trigger: statsRef.current,
          start: 'top 85%',
          onEnter: () => {
            gsap.fromTo(
              statsRef.current?.querySelectorAll('.stat-item') || [],
              { y: 30, opacity: 0, scale: 0.9 },
              { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.7)' }
            );
          },
          once: true,
        });
        scrollTriggerRefs.current.push(st3);
      }
    }, sectionRef);

    return () => {
      ctx.revert();
      scrollTriggerRefs.current.forEach(st => st.kill());
      scrollTriggerRefs.current = [];
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-void-black py-24 overflow-hidden"
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-neon-blue/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="animate-item font-mono-custom text-xs text-neon-soft/60 uppercase tracking-wider mb-4">
            {aboutConfig.sectionLabel}
          </p>
          <h2 className="animate-item font-display text-5xl md:text-6xl lg:text-7xl text-white">
            {aboutConfig.sectionTitle}
          </h2>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Image column */}
          <div ref={imageRef} className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src={aboutConfig.portraitImage}
                alt={aboutConfig.creatorName}
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-void-black/60 via-transparent to-transparent" />
              
              {/* Decorative frame */}
              <div className="absolute inset-0 border border-neon-cyan/20 rounded-2xl" />
              <div className="absolute -top-2 -left-2 w-20 h-20 border-t-2 border-l-2 border-neon-cyan/40 rounded-tl-2xl" />
              <div className="absolute -bottom-2 -right-2 w-20 h-20 border-b-2 border-r-2 border-neon-cyan/40 rounded-br-2xl" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-void-dark border border-neon-cyan/30 rounded-xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neon-cyan/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-neon-cyan" />
                </div>
                <div>
                  <p className="font-mono-custom text-xs text-white/50">Status</p>
                  <p className="font-display text-sm text-white">Available for Work</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content column */}
          <div ref={contentRef} className="order-1 lg:order-2">
            <div className="animate-item flex items-center gap-2 mb-6">
              <Code2 className="w-5 h-5 text-neon-cyan" />
              <span className="font-mono-custom text-sm text-neon-soft/70">{aboutConfig.creatorTitle}</span>
            </div>

            <h3 className="animate-item font-display text-3xl md:text-4xl text-white mb-6">
              Hello, I'm <span className="gradient-text">{aboutConfig.creatorName}</span>
            </h3>

            <p className="animate-item text-lg text-white/70 leading-relaxed mb-8">
              {aboutConfig.bioText}
            </p>

            {/* Skills tags */}
            <div className="animate-item flex flex-wrap gap-3 mb-8">
              {['AI Automation', 'Full Stack', 'React', 'Node.js', 'Python', 'Cloud'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/70 hover:border-neon-cyan/50 hover:text-neon-cyan transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Tech icons */}
            <div className="animate-item flex items-center gap-6">
              <div className="flex items-center gap-2 text-white/50">
                <Cpu className="w-5 h-5" />
                <span className="text-sm">AI Powered</span>
              </div>
              <div className="flex items-center gap-2 text-white/50">
                <Zap className="w-5 h-5" />
                <span className="text-sm">Fast Delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {aboutConfig.stats.map((stat, index) => (
            <div
              key={index}
              className="stat-item relative p-6 bg-white/5 border border-white/10 rounded-xl text-center hover:border-neon-cyan/30 transition-colors"
            >
              <p className="font-display text-4xl md:text-5xl text-neon-cyan mb-2">
                {stat.value}
              </p>
              <p className="font-mono-custom text-xs text-white/50 uppercase tracking-wider">
                {stat.label}
              </p>
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-neon-cyan/20 rounded-tr-xl" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-neon-cyan/20 rounded-bl-xl" />
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent" />
    </section>
  );
};

export default AboutSection;
