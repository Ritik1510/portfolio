import { BsGithub } from "react-icons/bs";
import Skills from "./Skills.jsx";
import asmsProjectBG from "../Assets/asms-profile-image.png";
import AppleIntelligenceBG from "../Assets/appleanimation.png";

const Projects = [
  {
    title:
      "Apartments & Society Management Software",
    image: asmsProjectBG,
    link: "#",
    timeline: "Jan `22 - now",
    Description:
      "'Apartments & Society Management Software' is a web application designed to streamline the management of residential communities, providing tools for residents and administrators to enhance communication, maintenance, and overall living experience.",
    repository: "https://github.com/ritik1510/cp-server-js",
    otherLinks: [
      {
        label: "Github",
        icon: BsGithub,
        url: "https://github.com/ritik1510/cp-server-js",
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
    repository: "https://github.com/ritik1510/client-w3t",
    otherLinks: [
      {
        label: "Github",
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