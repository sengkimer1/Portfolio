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
      <div className="px-20 pt-15 flex justify-center items-center space-x-20 ">
      <h1 className="text-5xl font-bold leading-tight animated-text max-w-3xl text-center ">
                <span className="text-purple-500">WELCOME</span>
                <span className=""> TO MY PORTFOLIO</span>
              </h1>\
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
