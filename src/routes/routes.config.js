import AboutSection from "../pages/AboutSection.jsx";
import Contact from "../pages/Contact.jsx";
import ProjectsSection from "../pages/ProjectsSection.jsx";
import Resume from "../pages/Resume.jsx";
import SkillsSection from "../pages/SkillsSection.jsx";

export const ROUTES = [
  {
    path: "/projects",
    label: "Projects",
    component: ProjectsSection,
  },
  {
    path: "/skills",
    label: "Skills",
    component: SkillsSection,
  },
  {
    path: "/about",
    label: "About",
    component: AboutSection,
  },
  {
    path: "/resume",
    label: "Resume",
    component: Resume,
  },
  {
    path: "/contact",
    label: "Contact",
    component: Contact,
  },
];
