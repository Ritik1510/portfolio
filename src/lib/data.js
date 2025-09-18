export const Headerlinks = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    } 
]

// src/lib/data.js
export const projects = [
  {
    id: 1,
    title: "IoT based Push-Pull Converter using Simulink, MQTT & Node-RED",
    date: "Dec '21",
    image: "/images/project1.png", 
    description:
      "A push-pull topology based power converter was designed and simulated in MATLAB Simulink, and the realtime performance of the converter was streamed from Simulink to Node-RED platform using MQTT protocol.",
    demoLink: "#",
    githubLink: "#",
    tags: ["Simulink", "EMQX", "NodeRED", "MQTT", "MATLAB", "Dart"],
  },
  {
    id: 2,
    title: "Apartment Management System",
    date: "Sep '24",
    image: "/images/project2.png", 
    description:
      "A full-stack web application for managing apartments, including visitor tracking, payments, and maintenance requests. Built with React, Express, and PostgreSQL.",
    demoLink: "#",
    githubLink: "#",
    tags: ["React", "Express", "PostgreSQL", "TailwindCSS", "Vite"],
  },
];
