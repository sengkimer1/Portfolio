// "use client";

// import React from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// import { Engine } from "@tsparticles/engine";

// const ParticlesBackground: React.FC = () => {
//   // Initialize particles
//   const particlesInit = async (engine: Engine): Promise<void> => {
//     await loadFull(engine); // Load all necessary tsparticles features
//   };

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}  // Initialize particles on load
//       options={{
//         fullScreen: { enable: true },  // Enable full-screen particles
//         particles: {
//           number: {
//             value: 400,  // Number of particles
//             density: { enable: true, area: 800 },  // Density settings
//           },
//           shape: { type: "triangle" },  // Set particle shape to triangle
//           opacity: { value: 0.7 },  // Set opacity
//           size: { value: 5 },  // Set particle size
//           move: {
//             enable: true,  // Enable particle movement
//             speed: 3,  // Set particle speed
//           },
//           links: {  // Updated configuration for connecting lines between particles
//             enable: true,
//             distance: 100,
//             color: "#ffffff",  // White color for links
//             opacity: 0.5,
//             width: 1,
//           },
//           color: { value: "#ffffff" },  // Particle color
//         },
//         interactivity: {
//           events: {
//             onHover: { enable: true, mode: "repulse" },  // Hover interaction
//             onClick: { enable: true, mode: "push" },  // Click interaction
//           },
//         },
//         background: { color: "#000" },  // Black background
//       }}
//     />
//   );
// };

// export default ParticlesBackground;
