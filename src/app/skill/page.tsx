import Head from 'next/head';
import {FaBootstrap, FaReact, FaGit, FaHtml5, FaCss3Alt, FaJsSquare,FaNodeJs ,FaCloud,FaGithub,FaTasks,FaBug,FaRegFileAlt} from 'react-icons/fa';
import { DiDocker } from 'react-icons/di';
import { SiStrapi,SiExpress,SiNextdotjs,SiMongodb,SiMysql,SiTailwindcss} from "react-icons/si";
import { GiElephantHead } from "react-icons/gi";

export default function Skills() {
  return (
    <>
      {/* Hero Section */}
      <header className="  text-center">
      <h1 className='text-3xl sm:text-6xl font-bold  text-center mb-10 py-10'>MY SKILL</h1>
      <p className="mt-4 text-xl">A collection of the skills I've mastered over the years.</p>
      </header>

      {/* Main Content */}
      <div className=" px-6 py-12 flex flex-col justify-center items-center">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-screen-xl text-black">
          {/* Web Development Section */}
          <div className="bg-white p-8 rounded-2xl shadow-2xl hover:shadow-purple-500 transition-shadow duration-300 transform hover:scale-105">
            <h2 className="text-3xl font-semibold text-purple-700 mb-4">
              Web Development
            </h2>
            <ul className="space-y-3 text-lg">
              <li>
                <FaHtml5 className="inline-block mr-2 text-2xl text-orange-600" />
                HTML
              </li>
              <li>
                <FaCss3Alt className="inline-block mr-2 text-2xl text-blue-600" />
                CSS
              </li>
              <li>
                <FaJsSquare className="inline-block mr-2 text-2xl text-yellow-500" />
                JavaScript
              </li>
              <li>
              <FaReact className="inline-block mr-2 text-2xl text-blue-500" />

                React.js
                </li>
            </ul>
          </div>

          {/* Backend Development Section */}
          <div className="bg-white p-8 rounded-2xl shadow-2xl hover:shadow-purple-500 transition-shadow duration-300 transform hover:scale-105">
            <h2 className="text-3xl font-semibold text-purple-700 mb-4">Backend Development</h2>
            <ul className="space-y-3 text-lg">
              <li>
                <SiNextdotjs className="inline-block mr-2 text-2xl text-black"/>
                Next.js
                </li>
              <li>
              <SiExpress className="inline-block mr-2 text-2xl text-black"/>

                Express.js
                </li>
                <li>
              <SiStrapi className="inline-block mr-2 text-2xl text-blue-500"/>

                Strapi
                </li>
                
            </ul>
          </div>
          {/* Database Management Section */}
          <div className="bg-white p-8 rounded-2xl shadow-2xl hover:shadow-purple-500 transition-shadow duration-300 transform hover:scale-105">
            <h2 className="text-3xl font-semibold text-purple-700 mb-4">Magement Tool</h2>
            <ul className="space-y-3 text-lg">
              <li>
              <FaTasks className="inline-block mr-2 text-2xl text-black" />
                Trello
                </li>
              <li>
                <FaBug className="inline-block mr-2 text-2xl text-blue-700"/>
                Jira
                </li>
                <li>
                <FaRegFileAlt className="inline-block mr-2 text-2xl text-blue-700"/>
                Notion
                </li>
            
            </ul>
          </div>
            {/* Database  Section */}
            <div className="bg-white p-8 rounded-2xl shadow-2xl hover:shadow-purple-500 transition-shadow duration-300 transform hover:scale-105">
            <h2 className="text-3xl font-semibold text-purple-700 mb-4">Database Tools</h2>
            <ul className="space-y-3 text-lg">
              <li>
              <SiMongodb className="inline-block mr-2 text-2xl text-green-700" />
                Mongo DB
                </li>
              <li>
                <GiElephantHead className="inline-block mr-2 text-2xl text-blue-700"/>
                pgAdmin4
                </li>
                <li>
                <SiMysql className="inline-block mr-2 text-2xl text-blue-700"/>
                MYSQL workbench
                </li>
            
            </ul>
          </div>
          {/* Other Skills Section */}
          <div className="bg-white p-8 rounded-2xl shadow-2xl hover:shadow-purple-500 transition-shadow duration-300 transform hover:scale-105">
            <h2 className="text-3xl font-semibold text-purple-700 mb-4">Other Skills</h2>
            <ul className="space-y-3 text-lg">
              <li>
              <FaGit className="inline-block mr-2 text-2xl text-black" />
                Git
                </li>
              <li>
                <DiDocker className="inline-block mr-2 text-2xl text-blue-700"/>
                Docker
                </li>
                <li>
                <FaCloud className="inline-block mr-2 text-2xl text-gray-700"/>
                 Vercel
                </li>
                <li>
                <FaGithub className="inline-block mr-2 text-2xl text-black"/>
                 Github
                </li>
                <li>
                <FaBootstrap className="inline-block mr-2 text-2xl text-purple-500"/>
                 Boostrap
                </li>
                <li>
                <SiTailwindcss className="inline-block mr-2 text-2xl text-blue-700"/>
                 Tailwind CSS
                </li>
            </ul>
          </div>
      
        </section>
      </div>
    </>
  );
}
