import { GrProjects } from "react-icons/gr";
import { RxResume } from "react-icons/rx";
import { IoIosContact } from "react-icons/io";
import { IoMdInformationCircle } from "react-icons/io";
import { GiSkills } from "react-icons/gi";
import profileImage from "../Assets/image-removebg-preview.png"

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
  name: "profileData",
  image: profileImage,
  label: "Ritik Kumar",
  description: "something about profile person..."
}
