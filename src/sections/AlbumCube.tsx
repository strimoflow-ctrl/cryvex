import { useRef, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTexture, Environment } from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';
import { techStackConfig } from '../config';
import { Brain, Layers, Smartphone, Cloud } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ICON_MAP = {
  brain: Brain,
  layers: Layers,
  smartphone: Smartphone,
  cloud: Cloud,
};

interface CubeProps {
  rotationProgress: number;
}

const Cube = ({ rotationProgress }: CubeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  const textures = useTexture(techStackConfig.cubeTextures);

  // Responsive cube size
  const cubeSize = Math.min(viewport.width * 0.4, 3);

  useFrame(() => {
    if (meshRef.current) {
      // Map rotation progress (0-1) to rotation angles
      const targetRotationY = rotationProgress * Math.PI * 2;
      const targetRotationX = Math.sin(rotationProgress * Math.PI) * 0.3;

      // Smooth interpolation
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        targetRotationY,
        0.1
      );
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        targetRotationX,
        0.1
      );
    }
  });

  return (
    <mesh ref={meshRef} castShadow>
      <boxGeometry args={[cubeSize, cubeSize, cubeSize]} />
      {textures.map((texture, index) => (
        <meshStandardMaterial
          key={index}
          attach={`material-${index}`}
          map={texture}
          roughness={0.2}
          metalness={0.1}
        />
      ))}
    </mesh>
  );
};

const AlbumCube = () => {
  // Null check: if config is empty, do not render
  if (techStackConfig.cubeTextures.length === 0) {
    return null;
  }

  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const techListRef = useRef<HTMLDivElement>(null);
  const [rotationProgress, setRotationProgress] = useState(0);
  const [currentTechIndex, setCurrentTechIndex] = useState(0);
  const [blurAmount, setBlurAmount] = useState(0);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: '+=300%',
      scrub: 1,
      pin: true,
      onUpdate: (self) => {
        const progress = self.progress;
        setRotationProgress(progress);

        // Calculate current tech index
        const techIndex = Math.min(
          Math.floor(progress * techStackConfig.techStacks.length),
          techStackConfig.techStacks.length - 1
        );
        setCurrentTechIndex(techIndex);

        // Velocity-based blur effect
        const velocity = Math.abs(self.getVelocity());
        const targetBlur = Math.min(velocity / 500, 8);
        const targetSpacing = Math.min(velocity / 100, 30);

        setBlurAmount(prev => prev + (targetBlur - prev) * 0.2);
        setLetterSpacing(prev => prev + (targetSpacing - prev) * 0.2);
      },
    });

    scrollTriggerRef.current = st;

    return () => {
      st.kill();
    };
  }, []);

  // Animate tech list on mount
  useEffect(() => {
    if (techListRef.current) {
      gsap.fromTo(
        techListRef.current.querySelectorAll('.tech-item'),
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, stagger: 0.1, delay: 0.5, ease: 'power3.out' }
      );
    }
  }, []);

  const currentTech = techStackConfig.techStacks[currentTechIndex];
  const IconComponent = currentTech ? ICON_MAP[currentTech.icon as keyof typeof ICON_MAP] : Brain;

  return (
    <section
      id="techstack"
      ref={sectionRef}
      className="relative w-full h-screen bg-void-black overflow-hidden"
    >
      {/* Background title with blur effect */}
      <div
        ref={titleRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
        style={{
          filter: `blur(${blurAmount}px)`,
          letterSpacing: `${letterSpacing}px`,
        }}
      >
        <h2 className="font-display text-[20vw] text-white/5 uppercase whitespace-nowrap select-none">
          {techStackConfig.sectionSubtitle}
        </h2>
      </div>

      {/* Section header */}
      <div className="absolute top-12 left-12 z-30">
        <p className="font-mono-custom text-xs text-neon-soft/60 uppercase tracking-wider mb-2">
          {techStackConfig.sectionLabel}
        </p>
        <h2 className="font-display text-4xl md:text-5xl text-white">
          {techStackConfig.sectionTitle}
        </h2>
      </div>

      {/* 3D Canvas */}
      <div className="absolute inset-0 z-10">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.4} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              intensity={1}
              castShadow
            />
            <spotLight
              position={[-10, -10, -10]}
              angle={0.15}
              penumbra={1}
              intensity={0.5}
              color="#9DC4FF"
            />
            <pointLight position={[0, 0, 5]} intensity={0.5} color="#00D4FF" />
            <Cube rotationProgress={rotationProgress} />
            <Environment preset="city" />
          </Suspense>
        </Canvas>
      </div>

      {/* Tech stack info overlay */}
      <div className="absolute bottom-12 left-12 z-20">
        <p className="font-mono-custom text-xs text-neon-soft/60 uppercase tracking-wider mb-2">
          Skill {String(currentTechIndex + 1).padStart(2, '0')} / {String(techStackConfig.techStacks.length).padStart(2, '0')}
        </p>
        <div className="flex items-center gap-4 mb-2">
          {IconComponent && (
            <div className="w-12 h-12 rounded-xl bg-neon-cyan/20 flex items-center justify-center">
              <IconComponent className="w-6 h-6 text-neon-cyan" />
            </div>
          )}
          <div>
            <h3 className="font-display text-4xl md:text-5xl text-white transition-all duration-300">
              {currentTech?.name}
            </h3>
            <p className="font-mono-custom text-sm text-white/50">
              {currentTech?.category}
            </p>
          </div>
        </div>
      </div>

      {/* Tech stack list */}
      <div
        ref={techListRef}
        className="absolute bottom-12 right-12 z-20 hidden md:block"
      >
        <div className="space-y-3">
          {techStackConfig.techStacks.map((tech, index) => {
            const TechIcon = ICON_MAP[tech.icon as keyof typeof ICON_MAP];
            return (
              <div
                key={tech.id}
                className={`tech-item flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                  index === currentTechIndex
                    ? 'bg-neon-cyan/20 border border-neon-cyan/40'
                    : 'bg-white/5 border border-white/10'
                }`}
              >
                {TechIcon && <TechIcon className={`w-4 h-4 ${index === currentTechIndex ? 'text-neon-cyan' : 'text-white/50'}`} />}
                <span className={`text-sm ${index === currentTechIndex ? 'text-white' : 'text-white/50'}`}>
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Progress indicator */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 z-20">
        <div className="flex flex-col gap-3">
          {techStackConfig.techStacks.map((tech, index) => (
            <div
              key={tech.id}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentTechIndex
                  ? 'bg-neon-cyan w-2 h-8'
                  : 'bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-12 right-12 md:right-48 z-20">
        <p className="font-mono-custom text-xs text-white/40 uppercase tracking-wider">
          {techStackConfig.scrollHint}
        </p>
      </div>

      {/* Decorative corner lines */}
      <div className="absolute top-12 left-12 w-20 h-px bg-gradient-to-r from-neon-cyan/50 to-transparent" />
      <div className="absolute top-12 left-12 w-px h-20 bg-gradient-to-b from-neon-cyan/50 to-transparent" />
    </section>
  );
};

export default AlbumCube;
