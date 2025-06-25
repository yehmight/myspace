// components/Hero.jsx or page.tsx

import Image from 'next/image';

export default function About() {
  return (
    <section className="w-full min-h-screen bg-[#242424] text-white px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
        {/* Left Column */}
        <div className="flex gap-6">
          {/* Vertical Accent Line */}
          <div className="w-4 bg-[#E86A64] rounded-full"></div>

          {/* Content */}
          <div className="space-y-6">
            <p className="uppercase tracking-wide text-sm text-[#FFFFFF] font-medium">
              {/* Optional small subtitle */}
            </p>

            <h1 className="text-4xl md:text-5xl font-bold">ABOUT ME</h1>

            <p className="text-gray-300 leading-relaxed">
              I am a Fullstack Developer with a passion for crafting high-quality, user-focused web applications.
              With experience in both frontend and backend development, I specialize in building scalable digital 
              products that bridge the gap between elegant user interfaces and robust server-side functionality.

              On the frontend, I work extensively with React and Next.js (13+), combined with Tailwind CSS to create clean, 
              responsive, and modern UI experiences. I have built complex interfaces including e-commerce marketplaces, property 
              listing platforms (similar to Zillow), and responsive dashboards for monitoring app performance and user data.

              On the backend, I develop efficient APIs and services using Node.js, and I leverage Firebase for real-time databases, 
              user authentication, and scalable backend operations. My experience includes integrating payment systems, handling 
              user-generated content, and managing cloud-based infrastructure.
            </p>
          </div>
        </div>

        {/* Right Column (Image with Next.js Image component) */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-[500px]">
            <Image
              src="/img1.avif" // Make sure this file is inside your /public folder
              alt="Photographer"
              fill
              className="object-cover rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
