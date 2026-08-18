'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '@/components/ui/FadeIn';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { AuroraBackground } from '@/components/ui/AuroraBackground';

export default function AboutPage() {
  const timeline = [
    { year: '1998', title: 'GGSIPU Established', desc: 'Guru Gobind Singh Indraprastha University was established by the Government of NCT of Delhi.' },
    { year: '1999', title: 'The Technology Journey Begins', desc: 'The university\'s technology education journey traces back to the establishment of the University School of Information Technology.' },
    { year: '2008', title: 'USICT Emerges', desc: 'The University School of Information & Communication Technology came into existence with a focus on Computer Science, Electronics and Communication.' },
    { year: '2009', title: 'First Academic Session', desc: 'The first postgraduate academic session commenced.' },
    { year: '2011', title: 'First PG Graduates', desc: 'The first postgraduate batch successfully graduated.' },
    { year: '2016', title: 'USIT + USET', desc: 'The University School of Information Technology and University School of Engineering & Technology were merged, creating the present USICT.' },
    { year: '2023', title: 'NAAC A++', desc: 'GGSIPU achieved NAAC A++ accreditation, reflecting its institutional academic standards.' },
    { year: '2025', title: 'A Growing Ecosystem', desc: 'USICT recorded 280 placement offers, with 70+ companies participating.' },
  ];

  const recruiters = ['Microsoft', 'Google', 'Amazon', 'Meta', 'Adobe', 'Oracle', 'LinkedIn', 'Deloitte', 'EY', 'TCS', 'Infosys', 'Accenture', 'Nagarro', 'JP Morgan'];

  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  
  // Maps the scroll progress (0 to 1) to horizontal translation
  // Since we have 8 cards, -75% will slide it perfectly to the end without overflowing.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <div className="w-full bg-slate-50 min-h-screen font-sans selection:bg-blue-600 selection:text-white">
      
      {/* 1. Cinematic Hero & Map */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/About uspage.webp" 
            alt="USICT Campus" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
          <FadeIn delay={0.1}>
            <a 
              href="https://www.google.com/maps/place/University+School+of+Information,+Communication+and+Technology/data=!4m2!3m1!1s0x0:0x13344ae6ed1a7c7b?sa=X&ved=1t:2428&ictx=111" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-bold backdrop-blur-md transition-all mb-8 group"
            >
              <span className="material-symbols-outlined text-[18px] text-blue-400 group-hover:animate-bounce">pin_drop</span>
              View on Google Maps
              <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
            </a>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading text-white tracking-tight mb-6">
              About USICT
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <p className="text-xl md:text-3xl text-slate-300 max-w-3xl font-medium leading-snug mx-auto">
              Where technology meets education, research and innovation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Intro Statement */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium">
              The University School of Information, Communication & Technology (USICT) is a constituent school of Guru Gobind Singh Indraprastha University (GGSIPU), focused on building strong foundations in technology, engineering, research and professional development.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2. The USICT Journey (Sticky Horizontal Scroll) */}
      <section ref={targetRef} className="relative h-[300vh] bg-slate-950 text-white">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden pt-20">
          
          <div className="absolute top-24 md:top-32 left-6 md:left-24 z-10 pointer-events-none">
            <h2 className="text-4xl md:text-6xl font-bold font-heading mb-4 text-white">Our Journey</h2>
            <p className="text-slate-400 text-lg max-w-xl">A legacy of technological evolution. Scroll down to explore.</p>
          </div>

          <motion.div style={{ x }} className="flex gap-8 px-6 md:px-24 mt-20">
            {timeline.map((item, index) => (
              <div key={index} className="w-[85vw] sm:w-[400px] md:w-[500px] flex-shrink-0 group">
                <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 p-8 md:p-12 rounded-[2.5rem] h-full min-h-[400px] flex flex-col justify-between hover:bg-slate-800 transition-colors duration-500 shadow-2xl relative overflow-hidden">
                  
                  {/* Giant Background Year */}
                  <div className="absolute -right-4 -bottom-10 text-[180px] font-bold font-heading text-slate-800/20 group-hover:text-slate-700/30 transition-colors pointer-events-none select-none">
                    {item.year.slice(-2)}'
                  </div>

                  <div className="relative z-10">
                    <span className="text-4xl md:text-5xl font-bold font-heading text-slate-400 group-hover:text-white transition-colors duration-500 block mb-6">
                      {item.year}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6 leading-tight">{item.title}</h3>
                  </div>
                  
                  <p className="text-slate-400 text-lg md:text-xl leading-relaxed relative z-10">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. What Drives USICT? */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-16 text-center">What Drives USICT?</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0.1} className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-200 hover:shadow-xl transition-shadow group">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-800 mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">school</span>
              </div>
              <h3 className="text-3xl font-bold font-heading text-slate-900 mb-4">Education</h3>
              <p className="text-lg text-slate-600 leading-relaxed">Building strong technical foundations through rigorous undergraduate, postgraduate and doctoral programmes.</p>
            </FadeIn>

            <FadeIn delay={0.2} className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-200 hover:shadow-xl transition-shadow group">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-800 mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">science</span>
              </div>
              <h3 className="text-3xl font-bold font-heading text-slate-900 mb-4">Research</h3>
              <p className="text-lg text-slate-600 leading-relaxed">Encouraging exploration across emerging areas of computing, electronics, communication and engineering.</p>
            </FadeIn>

            <FadeIn delay={0.3} className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-200 hover:shadow-xl transition-shadow group">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-800 mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">lightbulb</span>
              </div>
              <h3 className="text-3xl font-bold font-heading text-slate-900 mb-4">Innovation</h3>
              <p className="text-lg text-slate-600 leading-relaxed">Creating an environment where students can experiment, build projects and transform ideas into solutions.</p>
            </FadeIn>

            <FadeIn delay={0.4} className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-200 hover:shadow-xl transition-shadow group">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-800 mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">rocket_launch</span>
              </div>
              <h3 className="text-3xl font-bold font-heading text-slate-900 mb-4">Industry</h3>
              <p className="text-lg text-slate-600 leading-relaxed">Connecting students with companies, internships, professional opportunities and real-world technology challenges.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 7. Vision & Mission (Aurora) */}
      <AuroraBackground className="py-32">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-slate-500 mb-8">Our Vision</h2>
            <p className="text-3xl md:text-5xl lg:text-7xl font-bold font-heading text-slate-900 leading-tight max-w-5xl mx-auto mb-12">
              “To become an internationally recognized centre for education and research.”
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-sm md:text-lg font-bold text-slate-900 mb-32">
              <span>Education</span>
              <span className="text-slate-400">&rarr;</span>
              <span>Research</span>
              <span className="text-slate-400">&rarr;</span>
              <span>Innovation</span>
              <span className="text-slate-400">&rarr;</span>
              <span>Global Impact</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-slate-500 mb-8">Our Mission</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
              {[
                { num: '01', title: 'Technical Excellence', desc: 'Develop deep technical knowledge.' },
                { num: '02', title: 'Professional Skills', desc: 'Build communication, analytical and problem-solving abilities.' },
                { num: '03', title: 'Research Mindset', desc: 'Encourage curiosity, experimentation and discovery.' },
                { num: '04', title: 'Global Readiness', desc: 'Prepare students for rapidly evolving technology careers.' },
              ].map((m, i) => (
                <div key={i} className="bg-white/40 backdrop-blur-md p-8 rounded-3xl border border-white/60 shadow-glass">
                  <span className="text-3xl font-bold text-slate-300 mb-4 block font-heading">{m.num}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{m.title}</h3>
                  <p className="text-slate-600">{m.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </AuroraBackground>

      {/* 8. Final CTA */}
      <section className="py-32 px-6 bg-slate-950 text-center">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6">Explore the USICT Experience</h2>
            <p className="text-xl text-slate-400 mb-12">Discover the people, technology, research and ideas shaping the next generation of engineers and professionals.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton>
                <Link href="/about" className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold shadow-lg hover:shadow-xl transition-all">
                  Explore Academics
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link href="/events" className="px-8 py-4 bg-slate-800 text-white border border-slate-700 rounded-full font-bold shadow-lg hover:bg-slate-700 transition-all">
                  View Events
                </Link>
              </MagneticButton>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
