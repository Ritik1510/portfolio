import { BsGithub, BsYoutube } from "react-icons/bs";
import { CgOrganisation } from "react-icons/cg";
import {
  IoIosRocket,
  IoIosTrophy,
  IoLogoGameControllerB,
} from "react-icons/io";
import { SiGitbook } from "react-icons/si";
import portfolioBG from "../Assets/portimage.jpg"
import Skills from "./Skills.js";

const Projects = [
  {
    title:
      "ASMS",
    image: portfolioBG,
    link: "#",
    timeline: "Jan `22 - now",
    description:
      "Apartments & Society Management Software",
    repository: "https://github.com/ritik1510/",
    otherLinks: [],
    tags: [
      Skills.frameworks.Django,
      Skills.iot.ESP32,
      Skills.tools.EMQX,
      Skills.databases.InfluxDB,
      Skills.databases.PostgreSQL,
      Skills.tools.Telegraf,
    ],
  }
];

export default Projects;