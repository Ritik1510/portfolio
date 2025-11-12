import { BsGithub } from "react-icons/bs";
import Skills from "./Skills.jsx";
import portfolioBG from "../Assets/asms-profile-image.png";

const Projects = [
  {
    title:
      "ASMS",
    image: portfolioBG,
    link: "#",
    timeline: "Jan `22 - now",
    Description:
      "Apartments & Society Management Software",
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
    image: portfolioBG,
    link: "#",
    timeline: "Jan `22 - now",
    Description:
      "Animation requested by the server...",
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