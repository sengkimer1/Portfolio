import React from "react";
import ThemeToggle from "./ThemeToggle"; 
import Link from 'next/link';
import { useState } from "react";
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-black shadow-md z-50 p-4 md:p-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a className="text-2xl font-bold" href="#about">KIMER..</a>

        {/* Menu Button for Mobile */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation */}
        <nav className={`fixed md:static top-16 left-0 w-full md:w-auto bg-white dark:bg-black md:bg-transparent md:flex md:space-x-4 text-xl gap-5 ${isOpen ? 'block' : 'hidden'}`} onClick={() => setIsOpen(false)}>
          <a href="#about" className="block md:inline-block p-4 md:p-0 hover:text-purple-500">About</a>
          <a href="#project" className="block md:inline-block p-4 md:p-0 hover:text-purple-500">Projects</a>
          <a href="#skill" className="block md:inline-block p-4 md:p-0 hover:text-purple-500">Skill</a>
          <a href="#contact" className="block md:inline-block p-4 md:p-0 hover:text-purple-500">Contact</a>
          <div className="md:hidden p-4">
            <ThemeToggle />
          </div>
        </nav>

        {/* Theme Toggle */}
        <div className="hidden md:block">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
