'use client';

import Image from 'next/image';
import { Instagram, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="w-full min-h-screen bg-[#242424] text-white px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
        {/* Left Column */}
        <div className="flex gap-6">
          <div className="w-2 bg-[#E86A64] rounded-full"></div>

          <div className="space-y-6">
            <p className="uppercase tracking-wide text-sm text-[#FFFFFF] font-medium">
              Fullstack Developer
            </p>

            <h1 className="text-4xl md:text-5xl font-bold">ADEYEMI OKESANYA</h1>

            {/* Social Icons */}
            <div className="flex gap-4 text-white text-lg">
              <a
                href="https://www.linkedin.com/in/adeyemi-okesanya-b708b82aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="hover:text-[#E86A64] cursor-pointer" />
              </a>
              <a
                href="https://www.instagram.com/dominion_dad?igsh=MWcyaGh5dTVnNnV2OQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="hover:text-[#E86A64] cursor-pointer" />
              </a>
            </div>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed">
              Full Stack Developer with a strong focus on building scalable web applications. I work across the entire development stack—React, Next.js, Node.js, and databases—to deliver modern, performance-driven solutions.
            </p>

            {/* Button */}
            <a
              href="/projects"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 border border-[#E86A64] rounded-md text-white hover:bg-[#E86A64] transition"
            >
              VIEW PORTFOLIO
            </a>
          </div>
        </div>

        {/* Right Column (Optimized Image) */}
        <div className="flex justify-center">
          <Image
            src="/about.jpg"
            alt="Portrait"
            width={400}
            height={500}
            className="rounded-lg object-cover shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}
