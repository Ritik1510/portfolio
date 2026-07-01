import Skills from "./Skills.jsx";
import asmsProjectBG from "../Assets/asms-profile-image.webp";
import AppleIntelligenceBG from "../Assets/appleanimation.webp";
import { BsGithub } from "react-icons/bs";

const Projects = [
  {
    title:
      "Apartments & Society Management Software",
    image: asmsProjectBG,
    link: "#",
    timeline: "Jan `22 - now",
    Description:
      "'Apartments & Society Management Software' is a web application designed to streamline the management of residential communities, providing tools for residents and administrators to enhance communication, maintenance, and overall living experience.",
    repository: "https://public-fe-me.vercel.app/",
    otherLinks: [
      {
        label: "GitHub",
        icon: BsGithub,
        url: "https://github.com/moder-emissary-org/be-me",
      },
    ],
    tags: [
      Skills.frameworks.React,
      Skills.frameworks.Tailwind,
      Skills.frameworks.Vite
    ],
  },
  {
    title: "WEB SOCKET BASED PROJECT",
    image: AppleIntelligenceBG,
    link: "#",
    timeline: "Jan `22 - now",
    Description:
      "Animation requested by the server, rendered on the client side using web sockets for real-time communication.",
    repository: "https://client-assignment-web3task.vercel.app/",
    otherLinks: [
      {
        label: "GitHub",
        icon: BsGithub,
        url: "https://github.com/ritik1510/client-w3t",
      },
    ],
    tags: [
      Skills.frameworks.React,
      Skills.frameworks.Tailwind,
      Skills.frameworks.Vite
    ],
  }
];

export default Projects;