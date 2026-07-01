
import { lazy } from "react";

const AboutSection = lazy(() => import("../pages/AboutSection.jsx"));
const Contact = lazy(() => import("../pages/Contact.jsx"));
const ProjectsSection = lazy(() => import("../pages/ProjectsSection.jsx"));
const Resume = lazy(() => import("../pages/Resume.jsx"));
const SkillsSection = lazy(() => import("../pages/SkillsSection.jsx"));

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
