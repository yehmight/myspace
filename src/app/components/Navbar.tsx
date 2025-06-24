'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react' // Optional icons, or replace with text/icons

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    
  ]

  return (
    <nav className="bg-[#242424]  sticky top-0 z-50 p-7" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 ">
        {/* Logo */}
        <div className="text-xl font-bold text-red-400">YEHMIGHT</div>

        {/* Desktop Menu */}
        {/* <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-blue-500 transition"
              style={{ color: 'white' }}
            >
              {link.label}
            </Link>
          ))}
        </div> */}


<div className="hidden md:flex space-x-6">
  {navLinks.map((link) => (
    <div key={link.href} className="relative group">
      <Link
        href={link.href}
        className="text-white transition hover:text-red-400"
      >
        {link.label}
        {/* Dash underline */}
        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-red-400 via-purple-500 to-pink-500 transition-all duration-500 group-hover:w-full"></span>

      </Link>
    </div>
  ))}
</div>


        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X size={24} className="text-red-400"/> : <Menu size={24} className="text-red-400" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      {isOpen && (
  <div className="md:hidden px-4 pb-4 space-y-2">
    {navLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        onClick={() => setIsOpen(false)}
        className="block text-white hover:text-red-400 transition"
      >
        <span className="relative inline-block group">
          {link.label}
          <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-red-400 via-purple-500 to-pink-500 transition-all duration-500 group-hover:w-full"></span>
        </span>
      </Link>
    ))}
  </div>
)}


{/* 
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 text-white hover:text-red-400"
              onClick={() => setIsOpen(false)} // close on click
            >
              {link.label}
              
            </Link>
          ))}
        </div>
      )} */}
    </nav>
  )
}
