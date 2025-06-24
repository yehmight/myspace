import Image from 'next/image';
import {
    Linkedin,
    Github,
    Instagram,
  } from 'lucide-react';
  

export default function FooterContact() {
  return (
    <footer className="bg-zinc-900 text-white py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left - Image and Form */}
        <div>
          <Image
            src="/form.jpg"
            alt="Camera and iPhone"
            width={600}
            height={400}
            className="rounded-md object-cover w-full mb-6"
          />
          {/* <form action="https://formspree.io/f/xeokpogd" method="POST" className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 bg-red-400 text-white placeholder-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 bg-red-400 text-white placeholder-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea
              rows={4}
              placeholder="Message"
              className="w-full px-4 py-3 bg-red-400 text-white placeholder-white rounded resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-zinc-800 text-white py-3 rounded border border-red-400 hover:bg-red-500 transition"
            >
              Submit
            </button>
          </form> */}

<form action="https://formspree.io/f/xeokpogd" method="POST" className="space-y-4">
  <input
    type="text"
    name="name" // ✅ required
    placeholder="Name"
    required
    className="w-full px-4 py-3 bg-red-400 text-white placeholder-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
  />
  <input
    type="email"
    name="email" // ✅ required
    placeholder="Email"
    required
    className="w-full px-4 py-3 bg-red-400 text-white placeholder-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
  />
  <textarea
    name="message" // ✅ required
    rows={4}
    placeholder="Message"
    required
    className="w-full px-4 py-3 bg-red-400 text-white placeholder-white rounded resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
  ></textarea>
  <button
    type="submit"
    className="w-full bg-zinc-800 text-white py-3 rounded border border-red-400 hover:bg-red-500 transition"
  >
    Submit
  </button>
</form>

        </div>

        {/* Right - Contact Info */}
        {/* Right - Contact Info */}
<div className="flex flex-col mt-20 justify-between">
  <div>
    <h3 className="text-red-400 uppercase text-sm tracking-wide mb-2">Let's Talk</h3>
    <h2 className="text-3xl font-bold mb-4">Keep In Touch</h2>
    <p className="text-gray-300 mb-6">
      Whether you have a question, want to work together, or just want to say hi — I will try my best to get back to you!
    </p>

    {/* Working Hours */}
    <div className="mb-6">
      <h4 className="text-white font-semibold mb-1">Working Hours</h4>
      <p className="text-gray-400 text-sm">Monday - Friday: 9:00am – 6:00pm</p>
      <p className="text-gray-400 text-sm">Saturday: 10:00am – 2:00pm</p>
    </div>

    {/* Social Media */}
    {/* Social Media */}
<div className="mb-8">
  <h4 className="text-white font-semibold mb-2">Follow Me</h4>
  <div className="flex gap-4">
    {/* <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-red-400 transition">
      <Twitter size={24} />
    </a> */}
    <a href="https://www.linkedin.com/in/adeyemi-okesanya-b708b82aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-red-400 transition">
      <Linkedin size={24} />
    </a>
    <a href="https://github.com/yehmight/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-red-400 transition">
      <Github size={24} />
    </a>
    <a href="https://www.instagram.com/dominion_dad?igsh=MWcyaGh5dTVnNnV2OQ%3D%3D&utm_source=qr/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-red-400 transition">
      <Instagram size={24} />
    </a>
  </div>
</div>

  </div>

  {/* Contact Icons (keep as-is) */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
    {[
      {
        src: '/contact-icon-1.png',
        label: 'Phone Number',
        value: '+2349125210177',
      },
      {
        src: '/contact-icon-2.png',
        label: 'Email address',
        value: 'Adeyemi_okesanya@outlook.com',
      },
      {
        src: '/contact-icon-3.png',
        label: 'Websites',
        value: 'www.adeyemiokes.com',
      },
      {
        src: '/contact-icon-4.png',
        label: 'Address',
        value: '177A Bleecker Street, NY',
      },
    ].map((item, idx) => (
      <div key={idx} className="flex items-start sm:items-center gap-4">
        <Image
          src={item.src}
          alt={item.label}
          width={40}
          height={40}
          className="rounded-full object-contain"
        />
        <div>
          <p className="text-red-400 font-semibold">{item.label}</p>
          <p className="text-white">{item.value}</p>
        </div>
      </div>
    ))}
  </div>
</div>

      </div>
    </footer>
  );
}
