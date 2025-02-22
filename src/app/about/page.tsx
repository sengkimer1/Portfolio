// import Image from 'next/image';
// import Link from 'next/link';
// import kimer from 'src/images/kimer.png';

// export default function HomePage() {
//     return (
//         <div className="Home px-4 sm:px-8 md:px-16 lg:px-20 py-10 sm:py-16 md:py-20">     
//             <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-10 lg:space-x-20">

//                 {/* My text */}
//                 <section id="home" className="text-center md:text-left max-w-xl">
//                     <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
//                         Hello, I'm <span className="text-purple-500">KIMER</span> <br />
//                     </h2>
//                     <p className="text-base sm:text-lg md:text-xl mt-4">
//                         I'm a Creative Designer and Developer. I don’t have much experience working for companies, but I learned many skills from school projects. I can understand how applications work and write good, clean code. I work well in a team and have good technical skills.
//                     </p>
//                     <div className="mt-6 sm:mt-8 space-y-2 text-left">
//                         <p className="text-lg sm:text-xl font-semibold">Contact Information:</p>
//                         <p className="text-sm sm:text-base"><span className="font-bold">Full Name:</span> Seng Kimer</p>
//                         <p className="text-sm sm:text-base"><span className="font-bold">Email:</span> sengkimer@gmail.com</p>
//                         <p className="text-sm sm:text-base"><span className="font-bold">Mobile:</span> +855 717179565</p>
//                         <p className="text-sm sm:text-base"><span className="font-bold">LinkedIn:</span> <Link href="https://www.linkedin.com/in/kimer-seng-09a679342">Kimer Seng</Link></p>
//                     </div>
//                 </section>

//                 {/* My picture */}
//                 <div className="h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-[600px] lg:w-[600px] rounded-es-full bg-gradient-to-r from-blue-900 via-purple-700 to-pink-600 p-2 shadow-2xl transform transition-transform hover:scale-105">
//                     <div className="h-full w-full rounded-es-full bg-gray-900 overflow-hidden border-4 shadow-lg">
//                         <Image
//                             src={kimer}
//                             alt="Kimer Seng"
//                             className="h-full w-full object-cover transition-transform duration-10 hover:scale-2"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
"use client";
import React from "react";
import { Download } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import kimer from 'src/images/kimer.png';

const DownloadCV = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "https://docs.google.com/document/d/12Qmjz420SVnXL2D-6MC-h4cTJXgLn-K6ggxEsVPu4ow/edit?usp=drive_link"; // Update with the correct CV file path
    link.download = "Sengkimer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button 
      onClick={handleDownload} 
      className="bg-purple-600 text-white px-4 py-4 rounded-lg flex items-center gap-2 hover:bg-purple-700 transition"
    >
      <Download size={20} /> Download CV
    </button>
  );
};

export default function HomePage() {
    return (
        <div className="Home px-4 sm:px-8 md:px-16 lg:px-20 py-10 sm:py-16 md:py-20">     
            <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-10 lg:space-x-20">

                {/* My text */}
                <section id="home" className="text-center md:text-left max-w-xl">
                    <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
                        Hello, I'm <span className="text-purple-500">KIMER</span> <br />
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl mt-4">
                        I'm a Creative Designer and Developer. I don’t have much experience working for companies, but I learned many skills from school projects. I can understand how applications work and write good, clean code. I work well in a team and have good technical skills.
                    </p>
                    {/* <div className="mt-6 sm:mt-8 space-y-2 text-left">
                        <p className="text-lg sm:text-xl font-semibold">Contact Information:</p>
                        <p className="text-sm sm:text-base"><span className="font-bold">Full Name:</span> Seng Kimer</p>
                        <p className="text-sm sm:text-base"><span className="font-bold">Email:</span> sengkimer@gmail.com</p>
                        <p className="text-sm sm:text-base"><span className="font-bold">Mobile:</span> +855 717179565</p>
                        <p className="text-sm sm:text-base"><span className="font-bold">LinkedIn:</span> <Link href="https://www.linkedin.com/in/kimer-seng-09a679342">Kimer Seng</Link></p>
                    </div> */}
                    <div className="mt-6">
                        <DownloadCV />
                    </div>
                </section>

                {/* My picture */}
                <div className="h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-[600px] lg:w-[600px] rounded-es-full bg-gradient-to-r from-blue-900 via-purple-700 to-pink-600 p-2 shadow-2xl transform transition-transform hover:scale-105">
                    <div className="h-full w-full rounded-es-full bg-gray-900 overflow-hidden border-4 shadow-lg">
                        <Image
                            src={kimer}
                            alt="Kimer Seng"
                            className="h-full w-full object-cover transition-transform duration-10 hover:scale-2"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
