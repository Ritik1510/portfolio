import { GrOrganization, GrProjects } from "react-icons/gr";
import { RxResume } from "react-icons/rx";
import { IoIosContact, IoIosLink } from "react-icons/io";
import { IoMdInformationCircle } from "react-icons/io";
import { GiSkills } from "react-icons/gi";
import profileImage from "../Assets/profile-img.jpg"
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import { ImLinkedin } from "react-icons/im";

export const sideBarLinksData = [
  {
    name: "projects",
    icon: GrProjects,
    label: "Projects",
    href: "/projects",
  },
  {
    name: "skills",
    icon: GiSkills,
    label: "Skills",
    href: "/skills",
  },
  {
    name: "about",
    icon: IoMdInformationCircle,
    label: "About",
    href: "/about",
  },
  {
    name: "contact",
    icon: IoIosContact,
    label: "Contact",
    href: "/contact",
  },
  {
    name: "resume",
    icon: RxResume,
    label: "Resume",
    href: "/resume",
  },
];

export const profileData = {
  image: profileImage,
  label: "Ritik Kumar",
  name: "Ritik Kumar",
  description: "Something about profile person...",
  location: [{ value: "India, New Delhi", icon: IoLocationOutline }],
  mail: [{ value: "kr.ritik1510@gmail.com", icon: IoMailOutline }],
  links: [{ href: "https://www.github.com/ritik1510/", value: "Github", icon: IoIosLink }],
  linkedIn: [{ href: "https://www.linkedin.com/in/kr-ritik", value: "kr-ritik", icon: ImLinkedin }],
  instagram: [{ href: "https://instagram.com/_ritik__k_", value: "_ritik__k_", icon: IoIosLink }],
  organizations: [{ href: "", value: "Emi...", icon: GrOrganization}],
}
