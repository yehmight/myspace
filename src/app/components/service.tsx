'use client'

import Image from 'next/image'

const services = [
  { title: 'FULLSTACK DEV', image: '/service-1.png' },
  { title: 'MOBILE APP DEV', image: '/service-2.png' },
  { title: 'GITHUB', image: '/service-3.png' },
  { title: 'CLOUD COMPUTING', image: '/service-4.png' },
]

export default function Service() {
  return (
    <section className="bg-[#1A1A1A] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
        {/* Left - Cards */}
        <div className="grid grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-red-500 rounded-md text-center p-6 hover:shadow-lg transition duration-300"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <h3 className="text-red-400 font-semibold text-lg mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-white"></p>
            </div>
          ))}
        </div>

        {/* Right - Text Content */}
        <div className="flex flex-col justify-center">
          <p className="text-red-400 font-semibold uppercase tracking-wider mb-2">Why Choose Me</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Best Services For You</h2>
          <p className="text-white mb-3">
                Clean, scalable code built for performance and user experience.
                End-to-end solutions — from UI design to backend systems.
                Mobile-first, responsive, and optimized for real-world use.
                On-time delivery, clear communication, and attention to detail.
                I build with the latest tools to future-proof your product.
          </p>
          <p className="text-white mb-6">
          Clean, responsive websites and apps built with modern tools. Reliable, scalable, and easy to maintain.
          </p>
          <button className="border border-red-400 text-white px-6 py-2 rounded hover:bg-red-500 transition">
            <a href='https://wa.me/+2349125210177'>CHAT ME</a>
          </button>
        </div>
      </div>
    </section>
  )
}
