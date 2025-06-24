import from 'flowbite-react';

export default function Skills() {
  return (
    <section className="w-full bg-[#242424] text-white px-4 sm:px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left Column */}
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Vertical Accent Line */}
          <div className="hidden sm:block w-1 sm:w-2 bg-[#E86A64] rounded-full"></div>

          {/* Content */}
          <div className="space-y-6 w-full">
            <p className="uppercase tracking-wide text-sm text-[#FFFFFF] font-medium">
              my skills
            </p>

            <h1 className="text-xl sm:text-2xl font-bold">
              I am experienced in the following fields
            </h1>

            {/* Skills Progress Bars */}
            {[
              ['Html', 95],
              ['Tailwind CSS', 50],
              ['JavaScript', 65],
              ['React', 75],
              ['Next.js', 75],
              ['TypeScript', 65],
              ['GitHub', 80],
              ['Firebase', 65],
              ['React Native', 35],
            ].map(([skill, percent]) => (
              <div key={skill} className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
                <div
                  className="bg-blue-600 h-full rounded-full flex items-center justify-center text-white text-sm"
                  style={{ width: `${percent}%` }}
                >
                  {skill} {percent}%
                </div>
              </div>
            ))}

            {/* Description */}
            <p className="text-gray-300 leading-relaxed">
              Full Stack Developer with a strong focus on building scalable web applications. I
              work across the entire development stack—React, Next.js, Node.js, and databases—to
              deliver modern, performance-driven solutions.
            </p>

            {/* Button */}
            <button className="px-6 py-2 border border-[#E86A64] rounded-md text-white hover:bg-[#E86A64] transition">
              VIEW PORTFOLIO
            </button>
          </div>
        </div>

        {/* Right Column (Image) */}
        <div className="flex justify-center">
          <img
            src="/sweet.avif" // Replace with your own image in /public
            alt="Photographer"
            className="rounded-lg w-full max-w-sm sm:max-w-md object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
