import { GrProjects } from "react-icons/gr";
import { RxResume } from "react-icons/rx";
import { IoIosContact } from "react-icons/io";
import { IoMdInformationCircle } from "react-icons/io";
import { GiSkills } from "react-icons/gi";
import profileImage from "../Assets/profile-img.jpg"

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
  name: "Ritik Kumar",
  description: "something about profile person...", 
  location: "India, New Delhi",
  mail: "kr.ritik1510@gmail.com", 
  links: "something", 
  linkedIn: "https://www.linkedin.com/in/kr-ritik", 
  instagram: "https://instagram.com/_ritik__k_",
  organizations: "something",
}
