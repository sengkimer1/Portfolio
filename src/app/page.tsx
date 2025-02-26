// src/app/page.tsx
"use client";

import Image from 'next/image';
import Header from "../compenets/Header";  // Fix the typo for the import
import Footer from "../compenets/Footer";
import 'animate.css';
import About from "../app/about/page";
import Project from "../app/project/page";
import Contact from "../app/contact/page";
import SkillsSection from "../app/skill/page";

export default function HomePage() {

  return (
    <div className="Home">
      {/* Header Section */}
      <Header />
     
      {/* Main Content */}
      <main className="pt-[100px]"> 
      <div className="px-4 sm:px-10  md:px-20 pt-10 sm:pt-12 md:pt-15 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16 lg:gap-20 text-center">
  <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight animated-text max-w-3xl">
    <span className="text-purple-500">WELCOME</span>
    <span> TO MY PORTFOLIO</span>
  </h1>
</div>


        {/* About Section */}
        <section id="about" className="py-10 px-10 ">
          <About />
        </section>

        {/* Project Section */}
        <section id="project" className="py-16 px-10">
          <Project />
        </section>
        {/* Skills Section */}
        <section id="skill" className="py-16 px-10">
          <SkillsSection />
        </section>
        {/* Contact Section */}
        <section id="contact" className="py-16 px-10">
          <Contact />
        </section>
       

        {/* Footer Section */}
        <Footer />
      </main>
    </div>
  );
}
