import { BsGithub, BsYoutube } from "react-icons/bs";
import { CgOrganisation } from "react-icons/cg";
import {
  IoIosRocket,
  IoIosTrophy,
  IoLogoGameControllerB,
} from "react-icons/io";
import { SiGitbook } from "react-icons/si";
import portfolioBG from "../Assets/portimage.jpg"
import Skills from "./Skills.jsx";

const Projects = [
  {
    title:
      "ASMS",
    image: portfolioBG,
    link: "#",
    timeline: "Jan `22 - now",
    Description:
      "Apartments & Society Management Software",
    repository: "https://github.com/ritik1510/",
    otherLinks: [
      {
        label: "Watch Simulation",
        icon: BsGithub,
        url: "https://youtu.be/HLnyWL7QPkI",screen
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